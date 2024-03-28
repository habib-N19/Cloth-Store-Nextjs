import { ProductCategory } from "@/components/Layout/Products/ProductCategory";
import ProductFilter from "@/components/Layout/Products/ProductFilter";
import ProductCard from "@/components/ReUsableComponents/ProductCard";
import { TProduct, TProducts } from "@/types";
import React from "react";
const ProductsPage = async ({ searchParams }: { searchParams: any }) => {
    const { category } = searchParams;
    let productsArr: TProducts = [];
    if (category) {
        // console.log(category);
        const res = await fetch(`https://clothing-store-server-nu.vercel.app/api/v1/products/category?category=${category}`);
        productsArr = await res.json();
    } else {
        const res = await fetch(`https://clothing-store-server-nu.vercel.app/api/v1/products`);
        productsArr = await res.json();
    }
    // console.log(productsArr);
    return (
        <section className="container grid grid-cols-5">
            {/* filter section */}
            <div className="col-span-1">
                <ProductFilter />
                <ProductCategory />
                <ProductFilter />
            </div>
            {/* all products section */}
            <div className="col-span-4 p-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <div className="col-span-full mb-2">

                    <h1 className="text-3xl font-bold">All Products</h1>
                    <h2>Showing 1-12 of 24 item(s)</h2>
                    <h2 className="text-xs text-muted-foreground text-pretty">
                        Explore the Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </h2>
                </div>
                {
                    productsArr?.map((product: TProduct, index) => (
                        <ProductCard key={index} product={product}></ProductCard>
                    )
                    )
                }
            </div>
        </section>
    );
};

export default ProductsPage;
