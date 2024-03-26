import React from 'react'
import { MostPopularItemsTab } from './MostPopularItemsTab'

const MostPopularProduct = () => {
    return (
        <div className=' container mt-6 md:mt-12'>
            <h1 className='text-3xl  font-bold text-center'>Most Popular Product</h1>
            <h2 className='w-1/2 text-pretty mx-auto text-center'>Explore the Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque assumenda, itaque eligendi distinctio est is </h2>
            <div>
                <MostPopularItemsTab />
            </div>
        </div>
    )
}

export default MostPopularProduct