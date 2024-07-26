import React from 'react'
import clsx from 'clsx'

const Card = ({ name, className, onClick }) => {
    return (
        <div className={clsx("border border-solid flex flex-col justify-between rounded-lg min-h-[200px] max-w-[300px] w-full", className)}>
            <h1>{name}</h1>
            <button onClick={onClick} className='bg-blue-500 my-3  w-[140px] py-2 rounded-md text-white'>Chanage Color</button>
        </div>
    )
}

export default Card