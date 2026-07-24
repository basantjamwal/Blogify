import React from 'react'

function Logo({ width = '100px' }) {
  return (
    <div
      className="flex items-center justify-center rounded-full overflow-hidden shadow-md"
      style={{ width, height: width }}
    >
      <img
        src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-black-quill-feather-pen-with-writing-line-vector-logo-design-png-image_5157648.jpg"
        alt="BLOGIFY"
        className="object-cover w-full h-full"
      />
    </div>
  )
}

export default Logo
