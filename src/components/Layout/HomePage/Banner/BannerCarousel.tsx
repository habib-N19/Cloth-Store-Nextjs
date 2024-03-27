'use client'
import Autoplay from "embla-carousel-autoplay"
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import BannerCards from "./BannerCards"
import ProductCard from "@/components/ReusuableComponents/ProductCard"


const BannerCarousel = () => {
    // const [api, setApi] = React.useState<CarouselApi>()
    // const [current, setCurrent] = React.useState(0)
    // const [count, setCount] = React.useState(0)
    // React.useEffect(() => {
    //     if (!api) {
    //         return
    //     }

    //     setCount(api.scrollSnapList().length)
    //     setCurrent(api.selectedScrollSnap() + 1)

    //     api.on("select", () => {
    //         setCurrent(api.selectedScrollSnap() + 1)
    //     })
    // }, [api])
    return (
        <div>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
                // setApi={setApi}
                className="w-full">
                <CarouselContent className="-ml-2 md:-ml-4 space-x-2">
                    {/* <BannerCards /> */}
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            {/* <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count}
            </div> */}
        </div>
    );
};

export default BannerCarousel;