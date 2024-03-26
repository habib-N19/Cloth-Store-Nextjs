'use client'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import FlashSaleCard from './FlashSaleCard';
const FlashSaleCarousel = () => {
    return (
        <div className='w-9/12 mx-auto '>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full">
                <CarouselContent className="-ml-2 md:-ml-4 space-x-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <FlashSaleCard key={index} index={index} />
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    );
};

export default FlashSaleCarousel