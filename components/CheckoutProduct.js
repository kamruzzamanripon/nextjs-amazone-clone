import { MinusIcon, PlusIcon, StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, decrementQuantity, incrementQuantity, removeFromBasket } from '../slices/basketSlice';

const CheckoutProduct = ({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
    quantity
}) => {

    const dispatch = useDispatch();
    
    const additemToBasket = ()=>{
        const product = {
            id, title, price, rating, description, category, image, hasPrime
        }

        dispatch(addToBasket(product))
    }

    const increaseProduct = ()=>{
        dispatch(incrementQuantity(id))
    }

    const decrementProduct = ()=>{
      dispatch(decrementQuantity(id))
    }

    const removeItemFromBasket = ()=>{
        dispatch(removeFromBasket({id}));
    }

   
    return (
        <div className='grid grid-cols-5'>
            
            <Image src={image} height={200} width={200} objectFit='contain' />

            {/* Middle */}
            <div className='col-span-2 mx-5'>
                <p>{title}</p>
                <div className='flex'>
                    { Array(rating)
                        .fill()
                        .map((_, i)=>(
                            <StarIcon key={i} className='h-5 text-yellow-500' />
                        ))
                    }
                </div>
                <p className='text-xs my-2 line-clamp-3'>{description}</p>
                <Currency quantity={price} currency='GBP' />
                {hasPrime && (
                   <div>
                       <img 
                            loading='lazy'
                            className='w-12'
                            src="https://links.papareact.com/fdw"
                             alt="" 
                       />
                       <p className='text-xs text-gray-500'>FREE Next-day Dilevery</p>
                   </div>     
                )}
                
                
            </div>

            {/* product Quantity */}

            <div className='flex flex-col sm:flex-row space-x-3 items-center justify-self-center sm:justify-self-end mr-5'>
                <PlusIcon className='h-8 cursor-pointer'  onClick={increaseProduct}/> 
                    <span className='font-bold'>{quantity}</span>
                <MinusIcon className='h-8 cursor-pointer' onClick={decrementProduct}/>       
            </div>

            {/* Right */}
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button className='button' onClick={additemToBasket}>Add to Basket</button>
                <button className='button' onClick={removeItemFromBasket}>Remove from Basket</button>
            </div>        

        </div>
    );
};

export default CheckoutProduct;