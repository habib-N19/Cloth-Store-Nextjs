import { Card, CardContent } from '@/components/ui/card'
import { CarouselItem } from '@/components/ui/carousel'
import React from 'react'

function FlashSaleCard({ index }: { index: number }) {
    return (
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 ">
            <Card className='w-full'>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
            </Card>
        </CarouselItem>
    )
}

export default FlashSaleCard