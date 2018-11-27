import React from "react";

const IssueIcon = ({ className = "", width = 50, height = 50 }) => (
  <svg
    className={`overview-icon ${className}`}
    viewBox="0 0 32 32"
    width={width}
    height={height}
  >
    <path d="M 4 5 L 4 27 L 28 27 L 28 5 Z M 6 7 L 26 7 L 26 9 L 6 9 Z M 6 11 L 26 11 L 26 25 L 6 25 Z M 9 13 L 9 15 L 15 15 L 15 13 Z M 13 16 L 13 18 L 19 18 L 19 16 Z M 18 19 L 18 21 L 24 21 L 24 19 Z M 9 21 L 9 23 L 15 23 L 15 21 Z " />
  </svg>
);

export default IssueIcon;
