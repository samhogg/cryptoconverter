import React from "react";
import PropTypes from "prop-types";
import { ErrorWrapper, RetryButton } from "./styledComponents";

const ErrorRenderer = ({ error, retry }) => (
  <ErrorWrapper>
    {error}
    <RetryButton onClick={retry}>Retry</RetryButton>
  </ErrorWrapper>
);

ErrorRenderer.propTypes = {
  error: PropTypes.string.isRequired,
  retry: PropTypes.func.isRequired
};

export default ErrorRenderer;
