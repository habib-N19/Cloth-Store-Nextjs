import ProductCard from "@/components/ReUsableComponents/ProductCard";
import { Product, Products } from "@/types";
import React, { Suspense } from "react";
const BannerCards = async () => {
    const data = await fetch("http://localhost:5000/api/v1/products/latest", {
        cache: 'force-cache'
    });
    const product: Products = await data.json();
    console.log('hello');
    console.log(product);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {product?.map((product: Product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </Suspense>
    );
};

export default BannerCards;
