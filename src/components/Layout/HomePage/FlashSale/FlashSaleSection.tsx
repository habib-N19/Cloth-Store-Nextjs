import React from 'react'
import FlashSaleCarousel from './FlashSaleCarousel'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowBottomRightIcon, ChevronRightIcon } from '@radix-ui/react-icons'

const FlashSaleSection = () => {
    return (
        <section className='container border h-svh'>
            <h1 className='text-3xl font-bold mt-4'>
                Flash Sale
            </h1>
            <div className='mt-6 md:mt-12'>
                <FlashSaleCarousel />
            </div>
            <Button className='mt-6 md:mt-12 float-right'><Link className='inline-flex items-center' href='/flash-sale'>View All<ChevronRightIcon /> </Link></Button>

        </section>
    )
}

export default FlashSaleSection