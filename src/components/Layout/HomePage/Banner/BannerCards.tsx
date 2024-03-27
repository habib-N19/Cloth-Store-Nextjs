import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BannerCards = async () => {
    const data = await fetch("https://fakestoreapi.com/products?limit=6");
    const product = await data.json();
    console.log(product);
    return (
        <>
            {product.map((product) => (
                <CarouselItem
                    key={product.id}
                    className="pl-1 md:basis-1/2 lg:basis-1/3 "
                >
                    <Card className="w-full bg-transparent">
                        <CardContent className=" aspect-square relative p-6">
                            {/* <AspectRatio ratio={4 / 3}> */}
                            <Image
                                className="object-contain"
                                src='https://i.ibb.co/HCzcDs2/image.png'
                                alt={product.title}
                                height={300}
                                width={300}
                            />
                            {/* </AspectRatio> */}
                            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                                39% OFF
                            </span>

                            <div className="mt-4 px-5 pb-5">
                                <Link href="#">
                                    <h5 className="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
                                </Link>
                                <div className="mt-2 mb-5 flex items-center justify-between">
                                    <p>
                                        <span className="text-3xl font-bold text-slate-900">$449</span>
                                        <span className="text-sm text-slate-900 line-through">$699</span>
                                    </p>
                                    <div className="flex items-center">
                                        <StarFilledIcon className="text-yellow-400" />
                                        <StarFilledIcon className="text-yellow-400" />
                                        <StarFilledIcon className="text-yellow-400" />
                                        <StarIcon className="text-yellow-400" />
                                        <StarIcon className="text-yellow-400" />
                                        <span className="ml-2 text-sm font-semibold text-slate-600">5.0</span>
                                    </div>
                                </div>
                                <Button className="w-full">Add to cart</Button>
                            </div>
                        </CardContent>
                    </Card>
                </CarouselItem>
            ))}
        </>
    );
};

export default BannerCards;
