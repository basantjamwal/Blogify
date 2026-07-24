import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    placeholder = '',
    className = 'bg-transparent font-sans border-gray-600',
    ...props
}, ref) {
    const id = useId()

    return (
        <div className=''>
            {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                className={`border py-2 px-3 focus:outline-none focus:ring-2 w-full
                    rounded-2xl focus:ring-blue-500 ${className}`}
                {...props}
                ref={ref}
                id={id}
            />
        </div>
    )
})

export default Input