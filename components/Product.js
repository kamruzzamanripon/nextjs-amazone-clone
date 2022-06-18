import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useState } from 'react';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import primeImage from '../public/Prime-tag.png';
import { addToBasket } from '../slices/basketSlice';



const Product = ({id, title, price, description, category, image, rating}) => {
    const ratingFromApi = Math.floor(rating.rate) 
    const hasPrime = useState(Math.random() < 0.5)
    const dispatch = useDispatch()

    const addItemToBasket = ()=>{
         const product ={
            id, title, price, description, category, image, hasPrime
         }   

         //Sending the product as an action to the Basket Slice.
         dispatch(addToBasket(product))
    }
    //console.log(id)
    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            
            <Image src={image} height={200} width={200} objectFit='contain' />
            
            <h4 className='my-3'>{title}</h4>

            <div className='flex'>
                {Array(ratingFromApi).fill().map(( _, i)=>(
                    <StarIcon key={i} className="h-5 text-yellow-500" />
                )) }
                
            </div>

            <p className='text-xs my-2 line-clamp-2'>{description}</p>

            <div className='mb-5'>
                <Currency quantity={price} currency='USD' />
            </div>

            {hasPrime && (
                <div className='flex items-center space-x-2 mt-5'>
                      <Image  src={primeImage} alt="primeImage" height={50} width={50} objectFit='contain' />
                    <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
                </div>
            )}

            <button className='button' onClick={addItemToBasket}>Add to Basket</button>

        </div>
    );
};

export default Product;