import styled from "styled-components";

const Container = styled.div`
  margin: 2rem;
  width: 24rem;
  max-width: calc(100% - 4rem);
  border: 1px solid #ddd;
  border-top: 0.5rem solid
    ${({ theme, error }) =>
      !error ? theme.colors.primary : theme.colors.error};
  border-radius: 0.5rem;
  background-color: #eee;
  box-shadow: 1px 1px 5px #eee;
  position: relative;
  overflow: hidden;
`;

export { Container };
