import React, { Suspense } from 'react'
import BaseTable from '../Blogs/BaseTable'
import { Link } from 'react-router-dom'
import useSWR from 'swr'
import { fetcher } from '../../services/api'

const BlogListTableWrapper = () => {
  const { data, isLoading, error } = useSWR('http://localhost:3002/blogs', fetcher)
  return (
    <div className='my-20'>
      <div className="flex items-center justify-between mb-8">
        <Link to="/create-blog" className='primary-btn'>
          add new
        </Link>
      </div>
      {
        <BaseTable
          options={data}
        />
      }
    </div>
  )
}

export const BlogListTableWidgets = () => {
  return (
    <Suspense>
      <BlogListTableWrapper />
    </Suspense>
  )
}
