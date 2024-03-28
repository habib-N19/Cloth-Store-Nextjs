import ProductCard from "@/components/ReUsableComponents/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import { TMostPopularProduct, TMostPopularProducts } from "@/types";
import Image from "next/image";
import Link from "next/link";

import { Suspense } from "react";

export async function MostPopularItemsTab() {
    const res = await fetch('http://localhost:5000/api/v1/products/top-rated-by-category')
    const data: TMostPopularProducts = await res.json()
    console.log(data);
    if (!data) {
        return <div>Loading...</div>
    }
    const tabs = data?.map((categoryData: TMostPopularProduct, index: number) => (
        {
            title: categoryData?.category,
            value: categoryData?.category,
            content: (
                <div className="w-full overflow-hidden mx-auto justify-center items-center relative h-96 rounded-2xl p-6 lg:flex-row flex lg:gap-2 flex-col bg-primary-foreground ">
                    {
                        categoryData?.products?.map((product: any, index: number) => (
                            <Card key={index} className="h-fit p-0 bg-transparent">
                                <CardContent className=" aspect-square relative p-0">
                                    <Link href={`/mens-wear/${product?.product_id}`}>
                                        <Image
                                            className="object-contain rounded"
                                            src={product?.images?.[0]}
                                            alt='img'
                                            height={250}
                                            width={250}
                                        />
                                    </Link>

                                    {/* <Badge className="absolute top-0 left-0">
                                        39% OFF
                                    </Badge> */}

                                </CardContent>
                                <CardFooter className='mt-4'> <div className='space-y-1'>
                                    <Link href={`/mens-wear/${product?.product_id}`}
                                        className='text-base'>
                                        {product?.name}
                                    </Link>
                                    <div className=" flex items-center  gap-1 justify-between">
                                        <p>
                                            <span className="text-lg mr-1 font-bold ">${product?.price}</span>
                                            {/* <span className="text-sm text-secondary line-through">${product?.price - product?.price * 35 / 100}</span> */}
                                        </p>

                                    </div>

                                </div></CardFooter>
                            </Card >
                        ))
                    }

                </div>
            ),
        }
    ));

    return (
        <div className="h-[20rem] md:h-[40rem] md:mb-16 [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
            <Suspense fallback={<div>Loading...</div>}>

                <Tabs tabs={tabs} />
            </Suspense>
        </div>
    );
}
