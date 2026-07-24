import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600 hover:bg-blue-800',
    textColor = 'text-white',
    className = '',
    ...props
}) {
    return (
        <button
            type={type}
            className={`rounded-2xl px-4 py-2 ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button