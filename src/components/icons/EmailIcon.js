import React from "react";

const EmailIcon = ({ className = "", width = 50, height = 50 }) => (
  <svg
    className={`email-icon ${className}`}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <path d="M 20 4 L 4 4 C 2.898438 4 2 4.898438 2 6 L 2 18 C 2 19.101563 2.898438 20 4 20 L 20 20 C 21.101563 20 22 19.101563 22 18 L 22 6 C 22 4.898438 21.101563 4 20 4 Z M 20 8 L 12 13 L 4 8 L 4 6 L 12 11 L 20 6 Z " />
  </svg>
);

export default EmailIcon;
