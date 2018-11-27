import React from "react";
import styled from "styled-components";
import { BigNumber } from "bignumber.js";

const TokenValue = ({ children, symbol, decimals = 18 }) => {
  const denominator = BigNumber(10).pow(decimals);
  return (
    <span>
      {`${BigNumber(children)
        .div(denominator)
        .toFixed(2)} ${symbol}`}
    </span>
  );
};

TokenValue.displayName = "TokenValue";

export default TokenValue;
