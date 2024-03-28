'use client';
import Image from 'next/image';
import React, { useState } from 'react';
const ProductsImages = ({ images }: { images: string[] }) => {
    const [image, setImage] = useState(1);
    return (
        <div>
            {images.map((image: string, index) => (
                <div key={index} className="md:flex-1 px-4">
                    <div className="h-64 md:h-80 rounded-lg bg-primary-foreground mb-4 aspect-video">
                        <Image src={image} className='aspect-video' alt="product image" width={400} height={400} />
                        <div className="h-64 md:h-80 rounded-lg  mb-4 flex items-center justify-center">
                            {/* <AspectRatio > */}
                            {/* </AspectRatio> */}
                            <span className="text-5xl">

                            </span>
                        </div>
                    </div>
                    <div className="flex -mx-2 mb-4">
                        <div className="flex-1 px-2">



                            <button
                                onClick={() => setImage(index)}
                                className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-primary-foreground flex items-center justify-center
                  }`}
                            >
                                <span className="text-2xl"> <Image src={image} alt="product image" width={100} height={100} /></span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductsImages;