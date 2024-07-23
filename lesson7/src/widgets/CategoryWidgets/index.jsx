import React, { Suspense } from 'react'
import useSWR from 'swr'
import { fetcher } from '../../services/api'
import Spinner from '../../components/Spinner'
import { ensuresArray } from '../../utils/helper'
const CategoryContainerWrapper = () => {
    const { data, error, isLoading, isValidating } = useSWR('http://localhost:3001/category', fetcher)
    if (error) {
        return <button className='p-4  rounded-xl bg-red-200 text-red-500'>Failed to load</button>
    }
    return (
        <div>
            <h1 className='text-xl font-medium'>
                Category List
            </h1>
            {
                isLoading ? <Spinner /> : (
                    <div className='flex items-stretch flex-wrap gap-7 w-full'>
                        {
                            ensuresArray(data) && data?.map((category) => (
                                <div className='shadow-md border border-solid rounded-xl w-[400px] p-3'>
                                    <h1>{category?.category}</h1>
                                    <h1>{category?.createdBy}</h1>
                                    <button>{category?.startDate}</button>
                                    <button>{category?.endDate}</button>
                                </div>
                            ))
                        }
                    </div>
                )
            }

        </div>
    )
}


export default function CategoryWidget() {
    return (
        <Suspense>
            <CategoryContainerWrapper />
        </Suspense>
    )
}