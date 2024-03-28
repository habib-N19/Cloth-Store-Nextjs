import LoadingCard from '@/components/ReUsableComponents/LoadingCard';
import React from 'react';

const loading = async ({ params }: { params: any }) => {
    const res = await fetch(`https://clothing-store-server-nu.vercel.app/api/v1/products/${params.productId}`);
    const product = await res.json();
    return (
        <div>
            <LoadingCard />
        </div>
    );
};

export default loading;