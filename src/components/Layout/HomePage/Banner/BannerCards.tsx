import ProductCard from "@/components/ReUsableComponents/ProductCard";
import { TProduct, TProducts } from "@/types";
import React, { Suspense } from "react";
const BannerCards = async () => {
    const data = await fetch("http://localhost:5000/api/v1/products/latest", {
        cache: 'force-cache'
    });
    const products: TProducts = await data.json();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {products?.map((product: TProduct, index: React.Key | null | undefined) => (
                <ProductCard key={index} product={product} />
            ))}
        </Suspense>
    );
};

export default BannerCards;
