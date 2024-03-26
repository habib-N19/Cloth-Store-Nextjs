import Banner from '@/components/Layout/HomePage/Banner/Banner';
import FlashSaleSection from '@/components/Layout/HomePage/FlashSale/FlashSaleSection';
import TopCategories from '@/components/Layout/HomePage/TopCategories/TopCategories';
import React from 'react';

const HomePage = () => {
    return (
        <>
            <Banner />
            <FlashSaleSection />
            <TopCategories />
        </>
    );
};

export default HomePage;