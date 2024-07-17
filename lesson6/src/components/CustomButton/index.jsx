import React from 'react'
import clsx from 'clsx'
import LoadingSpinner from '../Spinner/LoadingSpinner'
const CustomButton = ({ title, type, children, loading = true, className, ...props }) => {
    return (
        <button
            {...props}
            className={clsx("primary_btn", className)}
            disabled={loading}
            type={type}>

            {
                loading && <LoadingSpinner />
            }
            {
                title ? title : children

            }

        </button>
    )
}

export default CustomButton