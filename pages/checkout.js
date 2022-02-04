import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import Currency from 'react-currency-formatter';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import Header from '../components/Header';
import { selectItems, selectTotal } from '../slices/basketSlice';
const stripePromise = loadStripe(process.env.stripe_public_key);

const Checkout = () => {

    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const session = useSession();

    const createCheckoutSesssion = async()=>{
        const stripe = await stripePromise;

        //call the backend to create a checkout session..
        const checkoutSession = await axios.post("/api/create-checkout-session",{
            items: items,
            email: session.data.user.email
        })

        //Redirect user/customer to Stripe Checkout
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        });

        if(result.error) alert(result.error.message);

    }

    //console.log(items)

    return (
        <div className='bg-gray-100'>
            <Header />
            
            <main className='lg:flex max-w-screen-2xl mx-auto'>
                {/* left */}
                <div className='flex-grow m-5 shadow-sm'>
                    
                    <div className='text-center'>
                        <Image
                            src="https://links.papareact.com/ikj"
                            width={1020}
                            height={250}
                            objectFit='contain'
                        />
                
                    </div>

                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h1 className='text-3xl border-b pb-4'>{items.length === 0 ? "Your Basket is Empty" : "Shopping Basket"}</h1>

                        {items.map((item, i)=>(
                            
                            <CheckoutProduct 
                                key={i} 
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                hasPrime={item.hasPrime}
                                quantity={item.quantity}
                            />
                        ))}
                    </div>
                    
                </div>


                {session.data && (
                    <div className='flex flex-col bg-white p-10 shadow-md'>
                    {items.length > 0 && (
                        <>
                            <h2 className='whitespace-nowrap font-bold'>
                                Subtotal ({items.length} items)
                                <span className='font-bold'>
                                     <Currency quantity={total} currency='GBP' />
                                </span>
                            </h2>

                            <button 
                            onClick={createCheckoutSesssion}
                            role="link"
                            disabled={!session.data}
                            className={`button mt-2 ${!session.data && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}
                            >
                                {!session.data ? "Sign in to Checkout" : "Process to checkout"}
                            </button>
                            
                        </>
                    )}        
                </div>
                )}                
                
            </main>

        </div>
    );
};

export default Checkout;