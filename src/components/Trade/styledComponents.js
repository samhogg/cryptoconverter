import styled from "styled-components";

const TradeTitle = styled.h2`
  margin: 0 0 1rem 0;
`;

const TradeContainer = styled.form`
  padding: 1rem;
  position: relative;
`;

const TradeButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.1s ease-in, box-shadow 0.1s ease-in;
  box-shadow: 0 0 3px transparent;
  border: none;
  margin-top: 0.5rem;

  &:focus {
    outline: none;
    transition: box-shadow 0.1s ease-out;
    box-shadow: 0 0 10px #0062ae;
  }

  &:hover {
    background-color: #2985cc;
    transition: background-color 0.1s ease-out;
  }

  &:active {
    background-color: #1f6499;
    transition: background-color 0.1s ease-out;
  }
`;

const TradeSeparator = styled.div`
  height: 2rem;
  line-height: 2rem;
  color: #666;
  text-transform: uppercase;
  font-size: 0.8rem;
  text-align: center;
  position: relative;
`;

export { TradeTitle, TradeButton, TradeSeparator, TradeContainer };
