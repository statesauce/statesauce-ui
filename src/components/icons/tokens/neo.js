import React from 'react'

export default props => (
  <svg
    width='32'
    height='32'
    {...props}
  >
    <defs
    >
      <linearGradient
        id='a'
        x1='53856%'
        x2='53856%'
        y1='-3432%'
        y2='77792%'
      >
        <stop
          offset='0%'
          stopColor='#58BF00'
        />
        <stop
          offset='23%'
          stopColor='#58BF00'
        />
        <stop
          offset='42%'
          stopColor='#58BF00'
        />
        <stop
          offset='61%'
          stopColor='#29B800'
        />
        <stop
          offset='78%'
          stopColor='#00AE1D'
        />
        <stop
          offset='99%'
          stopColor='#00A62C'
        />
      </linearGradient>
    </defs>
    <g
      fill='none'
      fillRule='evenodd'
    >
      <circle
        cx='16'
        cy='16'
        r='16'
        fill='url(#a)'
      />
      <path
        fill='#FFF'
        fillRule='nonzero'
        d='M25 22.58l-6.99-3.258v-7.22L25 9.623V22.58zM14.823 26L8 22.821V9.958l6.823 3.18V26zm10.01-16.843l-.113.04-6.71 2.381-.168.06-2.843 1.008-6.73-3.136 9.573-3.396.084-.03.177-.063.062-.021 6.73 3.136-.063.021z'
      />
    </g>
  </svg>
)
