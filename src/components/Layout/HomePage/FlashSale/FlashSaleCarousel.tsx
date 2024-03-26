'use client'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import FlashSaleCard from './FlashSaleCard';
const FlashSaleCarousel = () => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
    return (
        <div>
            <Carousel
                opts={{
                    align: "start",
                }}
                setApi={setApi} className="w-full">
                <CarouselContent className="-ml-2 md:-ml-4 space-x-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <FlashSaleCard key={index} index={index} />
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count}
            </div>
        </div>
    );
};

export default FlashSaleCarousel