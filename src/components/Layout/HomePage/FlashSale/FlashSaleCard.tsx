import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { CarouselItem } from '@/components/ui/carousel'

function FlashSaleCard({ index }: { index: number }) {
    return (
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/4 ">
            <Card className='w-full'>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
            </Card>
        </CarouselItem>
    )
}

export default FlashSaleCard