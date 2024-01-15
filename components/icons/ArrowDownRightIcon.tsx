import React from 'react'

function ArrowDownRight(props: React.SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M4.5 4.5L19.5 19.5M19.5 19.5V8.25M19.5 19.5H8.25'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  )
}

export default ArrowDownRight