import clsx from 'clsx'
import React from 'react'

const CustomInput = ({ label, showLabel = false, id, type, pleaceholder, name, className, ...props }) => {
    return (
        <>
            <label for="password" className="block text-gray-600">
                {showLabel && label}
            </label>
            <input type={type} id={id} name={name} className={clsx("base_input", className)} />
        </>
    )
}

export default CustomInput