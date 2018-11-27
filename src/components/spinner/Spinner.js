import React from "react";
import styled, { keyframes } from "styled-components";

import CommonInterestIcon from "../icons/CommonInterestIcon";

const StyledSelectContainer = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(CommonInterestIcon)`
  animation: ${rotate360} 2s linear infinite;
`;

Spinner.displayName = "Spinner";

export default Spinner;
