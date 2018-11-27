import React from 'react'

export default props => (
  <svg
    width='32'
    height='32'
    {...props}
  >
    <g
      fill='none'
    >
      <circle
        cx='16'
        cy='16'
        r='16'
        fill='#C91111'
      />
      <g
        fill='#FFF'
      >
        <path
          d='M9.4 20.78h2.818l-.072-7.327L22.64 26.776l-.033-15.732h-2.774l.072 7.401L9.404 5.087z'
          opacity='.6'
        />
        <path
          d='M9.4 9.953l.016-4.851 13.183 16.752.055 4.942z'
        />
      </g>
    </g>
  </svg>
)
