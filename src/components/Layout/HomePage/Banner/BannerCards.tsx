import ProductCard from "@/components/ReUsableComponents/ProductCard";
import { TProduct, TProducts } from "@/types";
import React, { Suspense } from "react";
const BannerCards = async () => {
    const data = await fetch("https://clothing-store-server-nu.vercel.app/api/v1/products/latest", {
        next: {
            revalidate: 30,
        }
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
