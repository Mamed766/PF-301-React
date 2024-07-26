import React from 'react'

const CustomCard = ({ title, img }) => {
    return (
        <div className='border border-solid rounded-md shadow-lg'>
            <img className='w-full h-[300px] object-cover' src={img} alt={title} />
            <h2>{title}</h2>
        </div>
    )
}

export default CustomCard