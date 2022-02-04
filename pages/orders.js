/* eslint-disable react-hooks/rules-of-hooks */
import { useSession } from 'next-auth/react';
import React from 'react';
import Header from '../components/Header';

const orders = () => {
    const session = useSession();
    return (
        <div className='bg-gray-100 h-screen'>
            <Header />
            
            <main className='max-w-screen-lg mx-auto p-10'>
                <h1 className='text-3xl border-b mb-2 border-yellow-400'>Your orders</h1>

                {session.data ? (
                    <h2>X orders</h2>
                ) : ( 
                    <h2>Please Sign in to see your order</h2>
                )}
            </main>
        </div>
    );
};

export default orders;