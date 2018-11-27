import React from "react";

export default ({ className = "", width = 24, height = 24 }) => (
  <svg
    className={`caret-icon ${className}`}
    viewBox="0 0 24 24"
    fill="#000000"
    width={width}
    height={height}
  >
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);
