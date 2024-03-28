import React from 'react';
import { Card, CardContent, CardFooter } from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { TProduct } from '@/types';
import { discountFunc } from '@/utils/discountFunc';

const ProductCard = ({ product }: { product: TProduct }) => {
    return (
        <Card className="w-full h-96 bg-transparent">
            <CardContent className=" aspect-square relative p-0">
                <Link href={`/mens-wear/${product?.product_id}`}>
                    <Image
                        className="object-contain rounded"
                        src={product?.images?.[0]}
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
                <Link href={`/mens-wear/${product?.product_id}`}
                    className='text-base'>
                    {product?.name}
                </Link>
                <div className=" flex items-center  gap-1 justify-between">
                    <p>
                        <span className="text-lg mr-1 font-bold ">${discountFunc(product?.price)}</span>
                        <span className="text-sm text-secondary line-through">${product?.price}</span>
                    </p>
                    <div className="flex items-center">
                        <StarFilledIcon className="text-yellow-400" />
                        <StarFilledIcon className="text-yellow-400" />
                        <StarFilledIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <span className="ml-2 text-sm font-semibold">{product?.ratings?.rating}</span>
                    </div>
                </div>
                <Button className="aria-disabled: w-fit disabled:">Add to cart</Button>
            </div></CardFooter>
        </Card >
    );
};

export default ProductCard;