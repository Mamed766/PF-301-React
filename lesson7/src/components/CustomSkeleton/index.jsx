import { Skeleton } from '@mui/material'
import React from 'react'

const CustomSkeleton = () => {
    return (
        <div className='flex gap-4 flex-row flex-wrap'>
            {new Array(8).fill(0).map((_, index) => (
                <div className='w-[300px]'> <Skeleton variant="rectangular" width={300} height={118} />
                    <Skeleton width={150} height={20} variant="text" />
                    <Skeleton variant="rectangular" width={120} height={20} /></div>
            ))
            }
        </div >
    )
}

export default CustomSkeleton