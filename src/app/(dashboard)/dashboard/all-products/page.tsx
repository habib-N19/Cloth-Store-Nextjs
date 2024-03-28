import { TProduct } from '@/types';
import React, { Suspense } from 'react'
const AllProductsPage = async () => {
    const res = await fetch(`https://clothing-store-server-nu.vercel.app/api/v1/products`, {
        cache: "no-store",
    });
    const productsArr = await res.json();
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Product Name</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Category</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsArr.map((product: TProduct) => (
                            <tr key={product._id}>
                                <td className="border px-4 py-2">{product.name}</td>
                                <td className="border px-4 py-2">{product.price}</td>
                                <td className="border px-4 py-2">{product.category}</td>
                                <td className="border px-4 py-2">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* <AllProducts data={productsArr} /> */}
            </Suspense>
        </div>
    )
}

export default AllProductsPage