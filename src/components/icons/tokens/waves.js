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
        fill='#0155ff'
      />
      <path
        fill='#fff'
        d='M16 6l10 10-10 10L6 16z'
      />
    </g>
  </svg>
)
