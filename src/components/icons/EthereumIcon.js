import React from "react";

const EthereumIcon = ({ className = "", width = 50, height = 50 }) => (
  <svg
    className={`ethereum-icon ${className}`}
    viewBox="0 0 48 48"
    width={width}
    height={height}
  >
    <g>
      <path style={{ fill: "#9FA8DA" }} d="M 11 24 L 25 2 L 39 24 L 25 32 Z " />
      <path style={{ fill: "#7986CB" }} d="M 25 2 L 39 24 L 25 32 Z " />
      <path
        style={{ fill: "#9FA8DA" }}
        d="M 11 27 L 25 35 L 39 27 L 25 46 Z "
      />
      <path style={{ fill: "#7986CB" }} d="M 25 35 L 39 27 L 25 46 Z " />
      <path
        style={{ fill: "#7986CB" }}
        d="M 11 24 L 25 18 L 39 24 L 25 32 Z "
      />
      <path style={{ fill: "#5C6BC0" }} d="M 25 18 L 39 24 L 25 32 Z " />
    </g>
  </svg>
);

export default EthereumIcon;
