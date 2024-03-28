import React from 'react'
import FlashSaleCarousel from './FlashSaleCarousel'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowBottomRightIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import ViewMore from '@/components/ReUsableComponents/ViewMore'

const FlashSaleSection = () => {
    return (
        <section className='container relative border h-screen'>
            <h1 className='text-3xl font-bold mt-4'>
                Flash Sale
            </h1>
            <div className='mt-6 md:mt-12'>
                <FlashSaleCarousel />
            </div>
            <ViewMore url='flash-sale/all' styles='float-right ' />

        </section>
    )
}

export default FlashSaleSection