import React from "react";

const RedditIcon = ({ className = "", width = 50, height = 50 }) => (
  <svg
    className={`reddit-icon ${className}`}
    viewBox="0 0 26 26"
    width={width}
    height={height}
  >
    <path d="M 15.5 2 C 14.675781 2 13.902344 2.371094 13.40625 2.90625 C 12.910156 3.441406 12.636719 4.09375 12.4375 4.78125 C 12.121094 5.886719 12.023438 7.113281 12 8.21875 C 9.683594 8.355469 7.585938 8.964844 5.84375 9.90625 C 5.136719 9.378906 4.285156 9.085938 3.46875 9.09375 C 2.539063 9.101563 1.65625 9.457031 1 10.1875 C -0.253906 11.582031 -0.109375 13.863281 1.34375 15.21875 C 1.253906 15.636719 1.1875 16.066406 1.1875 16.5 C 1.1875 21.09375 6.476563 24.8125 13 24.8125 C 19.523438 24.8125 24.8125 21.089844 24.8125 16.5 C 24.8125 16.066406 24.746094 15.636719 24.65625 15.21875 C 26.109375 13.863281 26.253906 11.582031 25 10.1875 C 24.34375 9.457031 23.460938 9.101563 22.53125 9.09375 C 21.714844 9.085938 20.863281 9.378906 20.15625 9.90625 C 18.421875 8.96875 16.335938 8.359375 14.03125 8.21875 C 14.0625 7.199219 14.144531 6.140625 14.375 5.34375 C 14.519531 4.84375 14.691406 4.480469 14.875 4.28125 C 15.058594 4.082031 15.191406 4 15.5 4 C 16.167969 4 16.253906 4.191406 16.65625 4.65625 C 16.859375 4.890625 17.09375 5.183594 17.46875 5.46875 C 17.84375 5.753906 18.398438 6 19 6 L 19 4 C 18.832031 4 18.800781 3.996094 18.6875 3.90625 C 18.574219 3.816406 18.417969 3.609375 18.1875 3.34375 C 17.726563 2.808594 16.832031 2 15.5 2 Z M 22 2.1875 C 20.445313 2.1875 19.1875 3.445313 19.1875 5 C 19.1875 6.554688 20.445313 7.8125 22 7.8125 C 23.554688 7.8125 24.8125 6.554688 24.8125 5 C 24.8125 3.445313 23.554688 2.1875 22 2.1875 Z M 22 3.1875 C 23 3.1875 23.8125 4 23.8125 5 C 23.8125 6 23 6.8125 22 6.8125 C 21 6.8125 20.1875 6 20.1875 5 C 20.1875 4 21 3.1875 22 3.1875 Z M 13 9.78125 C 18.535156 9.78125 23.21875 12.863281 23.21875 16.5 C 23.21875 20.140625 18.535156 23.21875 13 23.21875 C 7.464844 23.21875 2.78125 20.140625 2.78125 16.5 C 2.78125 12.863281 7.464844 9.78125 13 9.78125 Z M 3.5 10.6875 C 3.777344 10.691406 4.066406 10.753906 4.34375 10.875 C 3.339844 11.636719 2.542969 12.511719 2 13.5 C 1.625 12.726563 1.726563 11.761719 2.1875 11.25 C 2.523438 10.875 2.988281 10.683594 3.5 10.6875 Z M 22.5 10.6875 C 23.011719 10.683594 23.476563 10.875 23.8125 11.25 C 24.273438 11.761719 24.375 12.726563 24 13.5 C 23.457031 12.511719 22.660156 11.636719 21.65625 10.875 C 21.933594 10.753906 22.222656 10.691406 22.5 10.6875 Z M 9 13.1875 C 8 13.1875 7.1875 14 7.1875 15 C 7.1875 16 8 16.8125 9 16.8125 C 10 16.8125 10.8125 16 10.8125 15 C 10.8125 14 10 13.1875 9 13.1875 Z M 17 13.1875 C 16 13.1875 15.1875 14 15.1875 15 C 15.1875 16 16 16.8125 17 16.8125 C 18 16.8125 18.8125 16 18.8125 15 C 18.8125 14 18 13.1875 17 13.1875 Z M 8.03125 19.34375 C 8.667969 20.660156 10.636719 21.9375 13 21.9375 C 15.363281 21.9375 17.363281 20.660156 18 19.34375 C 16.84375 20.089844 15.019531 20.59375 13 20.59375 C 10.980469 20.59375 9.1875 20.089844 8.03125 19.34375 Z " />
  </svg>
);

export default RedditIcon;