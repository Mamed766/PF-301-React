import clsx from 'clsx'
import React from 'react'

const CustomInput = ({ label, onChange, showLabel = false, id, type, pleaceholder, name, className, ...props }) => {
    return (
        <>
            <label for={label} className="block text-gray-600">
                {showLabel && label}
            </label>
            <input
                onChange={onChange}
                placeholder={pleaceholder} type={type} id={id} name={name} className={clsx("base_input", className)} />
        </>
    )
}

export default CustomInput