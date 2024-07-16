import React from 'react'
import clsx from 'clsx'

const CustomButton = ({ title, type, className, children, ...props }) => {
    return (
        <button
            type={type}
            className={clsx("defaul_btn", className)}>
            {
                title ? title : children
            }
        </button>
    )
}

export default CustomButton