import styled from "styled-components";

const TradeCurrencyPairContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 3px;
  overflow: hidden;
  border: 2px solid #ccc;
`;
const TradeLabel = styled.label`
  display: block;
  padding: 0.5rem;
  width: 3rem;
  background-color: #ccc;
  text-align: center;
  color: #666;
`;
const TradeInput = styled.input`
  box-sizing: border-box;
  flex: 1;
  padding: 0.5rem;
  border: 0;
`;

export { TradeCurrencyPairContainer, TradeLabel, TradeInput };
