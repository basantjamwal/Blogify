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
    <div className="relative w-full ">
      <input
        type={type}
        placeholder={placeholder}
        className={`peer border py-2 px-3 focus:outline-none focus:ring-2 w-full
                    rounded-2xl focus:ring-black ${className}`}
        {...props}
        ref={ref}
        id={id}
      />
      <label
        htmlFor={id}
        className="absolute left-3 -top-2 text-xs text-black bg-white px-1
                   transition-all duration-300 ease-in-out
                   peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400"
      >
        {placeholder}
      </label>
    </div>
  )
})

export default Input
