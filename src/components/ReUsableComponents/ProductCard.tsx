import React from 'react';
import { Card, CardContent, CardFooter } from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const ProductCard = () => {
    return (
        <Card className="w-full h-96 bg-transparent">
            <CardContent className=" aspect-square relative p-0">
                <Link href='/'>
                    <Image
                        className="object-contain rounded"
                        src='https://i.ibb.co/HCzcDs2/image.png'
                        alt='img'
                        height={300}
                        width={300}
                    />
                </Link>

                <Badge className="absolute top-0 left-0">
                    39% OFF
                </Badge>

            </CardContent>
            <CardFooter className='mt-4'> <div className='space-y-1'>
                <Link href="/" className='text-base'>
                    Nike Air MX Super 2500 - Red
                </Link>
                <div className=" flex items-center  gap-1 justify-between">
                    <p>
                        <span className="text-lg mr-1 font-bold ">$449</span>
                        <span className="text-sm text-secondary line-through">$699</span>
                    </p>
                    <div className="flex items-center">
                        <StarFilledIcon className="text-yellow-400" />
                        <StarFilledIcon className="text-yellow-400" />
                        <StarFilledIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <span className="ml-2 text-sm font-semibold">5.0</span>
                    </div>
                </div>
                <Button className="w-full disabled:">Add to cart</Button>
            </div></CardFooter>
        </Card >
    );
};

export default ProductCard;