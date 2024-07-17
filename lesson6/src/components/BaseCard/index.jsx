import React from 'react'
import "./style.scss"
import CustomButton from '../CustomButton'
const BaseCard = ({ title, img, desc, price, ...props }) => {
    return (

        <div {...props} className="card">
            <div className='flex justify-start gap-10'>
                <div className="w-20 h-20 overflow-hidden rounded-full">
                    <img className='w-full h-full' src={img} alt={title} />
                </div>
                <div className="flex items-center gap-4">
                    <h3 className='text-md font-bold'>{title}</h3>
                    <p>{desc}</p>
                    <p>{price} AZN</p>
                </div>
            </div>
            <div> <CustomButton title="read More" /></div>



        </div>
    )
}

export default BaseCard