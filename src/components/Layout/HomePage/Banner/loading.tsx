import LoadingCard from '@/components/ReUsableComponents/LoadingCard';
import React from 'react';

const loading = async () => {
    const data = await fetch("https://clothing-store-server-nu.vercel.app/api/v1/products/latest", {
        cache: 'force-cache'
    });
    const products = await data.json();
    return (
        <div className='grid grid-cols-3'>
            {
                products?.map((product: any, index: number) => (
                    <LoadingCard key={index} />
                ))
            }
        </div>
    );
};

export default loading;