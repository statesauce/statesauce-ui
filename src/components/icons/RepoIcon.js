import React from "react";

const RepoIcon = ({ className = "", width = 50, height = 50 }) => (
  <svg
    className={`repo-icon ${className}`}
    viewBox="0 0 32 32"
    width={width}
    height={height}
  >
    <path d="M 4 5 L 4 27 L 28 27 L 28 5 Z M 6 7 L 26 7 L 26 9 L 6 9 Z M 6 11 L 26 11 L 26 25 L 6 25 Z M 16 13 L 14 23 L 16 23 L 18 13 Z M 11.1875 13.40625 L 8.1875 17.40625 L 7.75 18 L 8.1875 18.59375 L 11.1875 22.59375 L 12.8125 21.40625 L 10.25 18 L 12.8125 14.59375 Z M 20.8125 13.40625 L 19.1875 14.59375 L 21.75 18 L 19.1875 21.40625 L 20.8125 22.59375 L 23.8125 18.59375 L 24.25 18 L 23.8125 17.40625 Z " />
  </svg>
);

export default RepoIcon;
