import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: translate3d(0);
    opacity: 0.4;
  }
  50% {
    transform: translate3d(0, -6px, 0);    
    opacity: 1
  }
  100% {
    transform: translate3d(0);
    opacity: 0.4;
  }
`;

const LoadingContainer = styled.div`
  position: absolute;
  right: 1.2rem;
  top: 1.2rem;
  transition: opacity 0.3s;
  opacity: ${({ loading }) => (loading ? 1 : 0)};
`;

const LoadingDot = styled.div`
  display: inline-block;
  border-radius: 50%;
  margin-right: 3px;
  width: 6px;
  height: 6px;
  background: ${({ theme }) => theme.colors.primary};
  animation: ${pulse} 1s linear infinite;
  &:nth-child(2) {
    animation-delay: 0.333s;
  }
  &:nth-child(3) {
    animation-delay: 0.666s;
  }
`;

const LoadingIndicator = ({ loading }) => (
  <LoadingContainer loading={!!loading}>
    <LoadingDot />
    <LoadingDot />
    <LoadingDot />
  </LoadingContainer>
);

LoadingIndicator.propTypes = {
  loading: PropTypes.bool
};

export default LoadingIndicator;
