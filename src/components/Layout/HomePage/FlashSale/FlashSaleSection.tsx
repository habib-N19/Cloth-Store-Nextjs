import React from 'react'
import FlashSaleCarousel from './FlashSaleCarousel'

const FlashSaleSection = () => {
    return (
        <section className='container border h-svh'>
            <h1 className='text-3xl font-bold mt-4'>
                Flash Sale
            </h1>
            <div>
                <FlashSaleCarousel />
            </div>

        </section>
    )
}

export default FlashSaleSection