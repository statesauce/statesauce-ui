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
        fill='#ffc018'
      />
      <path
        fill='#fff'
        d='M11.5 14.5h9V10h3v16h-3v-8.5h-9V22h-3V6h3z'
      />
    </g>
  </svg>
)
