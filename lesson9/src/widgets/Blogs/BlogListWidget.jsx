import React from 'react'
import Card from '../../components/Card'
import useSWR from 'swr'
import { fetcher } from '../../services/api'
import Spinner from '../../components/Spinner'

const BlogListCardWidget = () => {
    const { data, isLoading, isValidating, error } = useSWR('http://localhost:3002/blogs', fetcher)
    if (isLoading) return <div className='fixed left-0 right-0  flex justify-center items-center w-full h-screen'>
        <Spinner />
    </div>

    return (
        <div className='flex flex-wrap gap-5 items-stretch'>
            {
                Array.isArray(data) && data.map((blog) => (
                    <Card
                        key={blog.id}
                        price={blog?.price}
                        avarage={blog?.avarage}
                        count={blog?.count}
                        title={blog?.title}
                        inStock={blog?.inStock ? "in Stock" : "Out of Stock"}
                        imgTitle={blog?.imgTitle}
                        imgUrl={blog?.imgUrl}
                    />)
                )
            }
        </div>
    )
}

export default BlogListCardWidget