import React, { Suspense } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import FlashSaleCard from './FlashSaleCard';
import { TProduct, TProducts } from '@/types';
import ProductCard from '@/components/ReUsableComponents/ProductCard';
const FlashSaleCarousel = async () => {
    const res = await fetch("http://localhost:5000/api/v1/products/flash-sale", {
        cache: 'force-cache'
    });
    const products: TProducts = await res.json();


    return (
        <div className='w-9/12 mx-auto ' >
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full">
                <CarouselContent className="-ml-2 md:-ml-4 space-x-2">
                    <Suspense fallback={<div>Loading...</div>}>
                        {products?.map((product: TProduct, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </Suspense>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div >
    );
};

export default FlashSaleCarousel