
import React, { useState } from 'react'
import { DividerHorizontalIcon, SlashIcon, StarFilledIcon, StarIcon } from "@radix-ui/react-icons"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from '@/components/ui/separator'
import { TProduct } from '@/types'
import { discountFunc } from '@/utils/discountFunc'
import ProductsImages from '@/components/ReUsableComponents/ProductImgs'

const ProductDetailsPage = async ({ params }: { params: any }) => {
    const res = await fetch(`http://localhost:5000/api/v1/products/${params.productId}`);
    const product: TProduct = await res.json();

    return (
        <section className='container mt-6'>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <SlashIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/products">Products</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <SlashIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>{product.name}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/* product image and detail container */}
            <div className='grid grid-cols-1 mt-6  w-full md:grid-cols-3'>
                <div className="border col-span-2 p-2">
                    <ProductsImages images={product?.images} />
                </div>
                <div className="col-span-1 border p-2">
                    <div className="md:flex-1 px-4">
                        <h2 className="mb-2 leading-tight tracking-tight font-bold  text-xl md:text-2xl">{product?.name}</h2>

                        <div className="flex items-center space-x-4 my-4">
                            <div>
                                <div className="rounded-lg border bg-primary-foreground flex py-2 px-3">
                                    <span className="text-lg mr-1 font-bold ">${discountFunc(product?.price)}</span>
                                    <span className="text-sm text-red-600 line-through">${product?.price}</span>

                                </div>
                            </div>
                            <div className="flex-1">
                                <p className=" text-xl font-semibold">Save 25%</p>
                                <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <span className='ml-2'>({product?.ratings?.count} reviews)</span>
                        </div>
                        <Separator className='my-2' />
                        <p className="text-gray-500">{product?.short_description}</p>
                        {/* <div className="flex py-4 space-x-4">
                            <div className="relative">
                                <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase tracking-wide font-semibold">Qty</div>
                                <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                                    {[1, 2, 3, 4, 5].map((qty) => (
                                        <option key={qty}>{qty}</option>
                                    ))}
                                </select>
                                <svg className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                            <button type="button" className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
                                Add to Cart
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* product description details */}
            <div className='mt-6 md:mt-12'>
                <h3>Description</h3>
                <p>{product?.long_description}</p>

            </div>
        </section >
    )
}

export default ProductDetailsPage;


