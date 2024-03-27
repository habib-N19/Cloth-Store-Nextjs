import { ProductCategory } from "@/components/Layout/Products/ProductCategory";
import ProductFilter from "@/components/Layout/Products/ProductFilter";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";

const ProductsPage = () => {
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
                <Card>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quidem exercitationem cum reprehenderit atque id inventore ipsum repudiandae fugiat soluta! Eaque dicta voluptatibus, sapiente excepturi et quidem laborum iusto perferendis.</Card>
            </div>
        </section>
    );
};

export default ProductsPage;
