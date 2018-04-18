import styled from "styled-components";

const ErrorWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.95;
  background-color: ${({ theme }) => theme.colors.error};
  padding: 3rem 0.5rem;
  color: white;
  text-align: center;
  z-index: 1;
`;

const RetryButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 0.5rem;
  border-radius: 3px;
  cursor: pointer;
`;

export { ErrorWrapper, RetryButton };
