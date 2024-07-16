import React from 'react'
import clsx from 'clsx'

const CustomInput = ({ pleaceholder, type, value, className, ...props }) => {

    return (
        <input
            type={type}
            className={clsx("base_input", className)}
            placeholder={pleaceholder}
            value={value}
            {...props} />

    )
}

export default CustomInput