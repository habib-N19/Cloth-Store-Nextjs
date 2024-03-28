import LoadingCard from '@/components/ReUsableComponents/LoadingCard';
import React from 'react';

const loading = () => {
    return (
        <div className='grid grid-cols-3'>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
        </div>
    );
};

export default loading;