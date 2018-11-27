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
        fill='#00b0ff'
      />
      <path
        fill='#fff'
        fillRule='nonzero'
        d='M15.84 16.005L7 11.002l.003 10.002 2.945 1.667v-6.657l5.893 3.335v-3.336h-.001.001zm5.03-7.159l-2.603 1.472-2.426-1.36-2.431 1.376-2.604-1.486L15.846 6zM16 16.226l9-5.103-.002 10.2L22 23.025v-6.79l-6 3.402v-3.402h.002L16 16.233zm-.379 6.728l2.356-1.417 2.523 1.53L15.616 26l-4.866-2.93 2.523-1.517z'
      />
    </g>
  </svg>
)
