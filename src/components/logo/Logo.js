import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CommonInterestIcon from "../icons/CommonInterestIcon";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = ({ className = "", to = "/", width = 50 }) => (
  <LogoContainer className={`logo ${className}`}>
    <Link to={to}>
      <CommonInterestIcon width={width} />
    </Link>
  </LogoContainer>
);

export default Logo;
