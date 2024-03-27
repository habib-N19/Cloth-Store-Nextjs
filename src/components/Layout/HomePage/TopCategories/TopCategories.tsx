import React from 'react'
import { TopCategoryItems } from './TopCategoryItems'
import ViewMore from '@/components/ReUsableComponents/ViewMore'

const TopCategories = () => {
    return (
        <div className='container text-center'>
            <h1 className='text-3xl mt-6 mb-4 md:mt-12'>Top Categories</h1>
            <h2>Discover the Latest Trends</h2>

            <div className='mt-6 md:mt-12'>
                <TopCategoryItems />
            </div>
            <ViewMore url='categories' styles='float-center' />
        </div>
    )
}

export default TopCategories