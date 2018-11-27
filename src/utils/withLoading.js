import React from "react";
import { branch, renderComponent } from "recompose";

import Spinner from "../components/spinner/Spinner";

const withLoading = (isLoading, props = { color: "#000", width: 20 }) => {
  const Indicator = () => <Spinner {...props} />;
  return branch(isLoading, renderComponent(Indicator));
};

export default withLoading;
