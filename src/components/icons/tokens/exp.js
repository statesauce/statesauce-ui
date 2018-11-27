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
        fill='#ffaa5c'
      />
      <path
        fill='#fff'
        d='M7.5 11.67l4.298 2.481a4.644 4.644 0 0 0-.396 1.884c0 .65.132 1.267.372 1.828L7.5 20.33zm.57-.826l7.43-4.539v5.126a4.588 4.588 0 0 0-3.201 1.855zM24.5 20.33l-4.274-2.467c.24-.56.372-1.179.372-1.828 0-.67-.141-1.308-.396-1.884L24.5 11.67zm-.459.89L16.5 25.703V20.64a4.589 4.589 0 0 0 3.237-1.905zm-16.082 0l4.304-2.485A4.589 4.589 0 0 0 15.5 20.64v5.063zm15.97-10.376l-4.228 2.442A4.588 4.588 0 0 0 16.5 11.43V6.305z'
      />
    </g>
  </svg>
)
