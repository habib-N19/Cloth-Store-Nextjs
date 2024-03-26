import React from 'react'
import { SlashIcon } from "@radix-ui/react-icons"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import ProductDescriptionComponent from '@/components/ReusuableComponents/ProductDescriptionPage'

const ProductDetailsPage = () => {
    return (
        <section className='container'>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <SlashIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <SlashIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/* product image and detail container */}
            <div className='grid grid-cols-1  w-full md:grid-cols-3'>
                <div className="border col-span-2">

                </div>
                <div className="col-span-1 border">Detail</div>
            </div>
            <ProductDescriptionComponent />
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


