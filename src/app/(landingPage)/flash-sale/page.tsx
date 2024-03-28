import ProductCard from '@/components/ReUsableComponents/ProductCard'
import { TProduct } from '@/types'
import React from 'react'

const FlashSalePage = async () => {
    const res = await fetch('http://localhost:5000/api/v1/products/flash-sale/all')
    const products = await res.json()

    return (

        <div className="p-3 grid container grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            <div className="col-span-full mb-2">
                <h1 className="text-3xl font-bold">Flash Sale Products</h1>
                {/* <h2>Showing 1-12 of 24 item(s)</h2> */}
                <h2 className="text-xs text-muted-foreground text-pretty">
                    Flash Sale Products
                </h2>
            </div>
            {
                products?.map((product: TProduct, index: React.Key | null | undefined) => (
                    <ProductCard key={index} product={product}></ProductCard>
                )
                )
            }
        </div>

    )
}

export default FlashSalePage