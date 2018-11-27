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
        fill='#302C2C'
        fillRule='nonzero'
      />
      <circle
        cx='16'
        cy='16'
        r='11'
        fill='#FFF'
      />
    </g>
  </svg>
)
