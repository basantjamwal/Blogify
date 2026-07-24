import React from 'react'

function Select({
    options = [],
    label,
    className = '',
    ...props
}, ref) {
    const id = React.useId()
    return (
        <div>
            {label && <label className='w-full' htmlfor={id} ></label>}
            <select
                className={`${className}`}
                ref={ref}
                id={id}
                {...props}>
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)