import React from 'react'

export default props => (
  <svg
    width='32'
    height='32'
    {...props}
  >
    <g
      fill='none'
      fillRule='evenodd'
    >
      <circle
        cx='16'
        cy='16'
        r='16'
        fill='#e5f300'
      />
      <path
        fill='#fff'
        d='M10.5 9.358l8.143 4.926v3.097l-5.714-3.433V26H10.5zm11 13.284l-8.143-4.926V14.62l5.714 3.433V6H21.5z'
      />
    </g>
  </svg>
)
