import React from 'react'
import { CarouselItem } from '@/components/ui/carousel'
import ProductCard from '@/components/ReUsableComponents/ProductCard'

function FlashSaleCard({ index }: { index: number }) {
    return (
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/4 ">
            <ProductCard />

        </CarouselItem>
    )
}

export default FlashSaleCard