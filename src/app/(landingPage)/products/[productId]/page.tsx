'use client'
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

const ProductDetailsPage = () => {
    const [image, setImage] = useState(1);
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
                        <BreadcrumbPage>Product</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/* product image and detail container */}
            <div className='grid grid-cols-1 mt-6  w-full md:grid-cols-3'>
                <div className="border col-span-2 p-2">
                    <div className="md:flex-1 px-4">
                        <div className="h-64 md:h-80 rounded-lg bg-primary-foreground mb-4">
                            <div className="h-64 md:h-80 rounded-lg bg-primary-foreground mb-4 flex items-center justify-center">
                                <span className="text-5xl">{image}</span>
                            </div>
                        </div>
                        <div className="flex -mx-2 mb-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex-1 px-2">
                                    <button
                                        onClick={() => setImage(i)}
                                        className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-primary-foreground flex items-center justify-center ${image === i ? 'ring-2  ring-inset' : ''
                                            }`}
                                    >
                                        <span className="text-2xl">{i}</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-1 border p-2">
                    <div className="md:flex-1 px-4">
                        <h2 className="mb-2 leading-tight tracking-tight font-bold  text-xl md:text-2xl">Lorem ipsum dolor, sit amet consectetur, adipisicing elit.</h2>

                        <div className="flex items-center space-x-4 my-4">
                            <div>
                                <div className="rounded-lg border bg-primary-foreground flex py-2 px-3">
                                    <span className=" mr-1 mt-1">$</span>
                                    <span className="font-bold text-3xl">25</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className=" text-xl font-semibold">Save 12%</p>
                                <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <StarFilledIcon />
                            <span className='ml-2'>({'10 reviews'})</span>
                        </div>
                        <Separator className='my-2' />
                        <p className="text-gray-500">Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem repudiandae laboriosam delectus eos cumque dolor quisquam autem, qui facilis, dignissimos eligendi provident, quis natus. Voluptates odit reprehenderit ex placeat corporis. Magni aut voluptatem ipsa quam consequatur labore nihil voluptates dolore delectus excepturi modi repellendus tempore vero perspiciatis impedit expedita, numquam dignissimos ad? Quo esse dolores aspernatur adipisci? Odio, ea ducimus?</p>
                <ul>
                    {

                        Array.from({ length: 5 }).map((_, i) => (
                            <li key={i}>Lorem ipsum dolor sit.</li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default ProductDetailsPage;


