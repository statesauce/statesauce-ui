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
        fill='#1666af'
      />
      <path
        fill='#fff'
        fillRule='nonzero'
        d='M15.699 11.006v2.06h-4.7c-.61 0-1.361.214-1.92.61-.693.492-1.08 1.229-1.08 2.327s.387 1.835 1.08 2.327c.559.396 1.31.61 1.92.61h2V21h-2a5.448 5.448 0 0 1-3.054-.973C6.717 19.155 6 17.789 6 16.003s.717-3.152 1.945-4.024a5.447 5.447 0 0 1 3.053-.973zm-5 6.182v-2.06h5V21H13.7v-3.812zM19 13.06V11h7v10h-9.002v-7.933h2v5.872H24v-5.878z'
      />
    </g>
  </svg>
)
