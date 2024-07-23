import React, { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { fetcher } from '../../services/api'
import Spinner from '../../components/Spinner'

const HomeBlogDetailContainer = () => {
    const { id } = useParams()

    const { data, isLoading } = useSWR(`http://localhost:3001/homeblogs/${id}`, fetcher)
    if (isLoading) {
        return (<div className='fixed w-full h-full top-0 left-0 right-0 flex justify-center items-center bg-slate-100'>
            <Spinner />
        </div>)
    }

    return (
        <div>

            {
                data ? (
                    <div>
                        <h1 className='text-xl font-bold'>{data?.title}</h1>
                        <p>{data?.description}</p>
                        <p>{data?.author}</p>
                        <p className='font-sans'>{data?.date}</p>
                        <img
                            className='w-full object-cover h-[400px] rounded-lg'
                            src={data.file ? data.file : "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"} alt={data?.title} />
                    </div>
                ) : null
            }
        </div>
    )
}

export default function HomeBlogDetailWidget() {
    return (
        <Suspense>
            <HomeBlogDetailContainer />
        </Suspense>
    )
}