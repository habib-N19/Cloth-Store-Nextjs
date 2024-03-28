import LoadingCard from '@/components/ReUsableComponents/LoadingCard';
import { TProduct } from '@/types';
import React from 'react';

const loading = async () => {
    const res = await fetch('https://clothing-store-server-nu.vercel.app/api/v1/products');
    const products = await res.json();

    return (
        <div className='grid grid-cols-4 gap-3'>
            <div className='col-span-1 h-screen'>
                <LoadingCard />
            </div>
            <div className='col-span-3 grid grid-cols-3'>


                {
                    products?.map((product: TProduct, index: number) => (
                        <LoadingCard key={index} />
                    )
                    )
                }
            </div>

        </div>
    );
};

export default loading;