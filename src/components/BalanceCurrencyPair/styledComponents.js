import styled from "styled-components";

const BalanceItem = styled.li`
  padding: 0;
  margin: 0;
  flex: 1;
`;

const BalanceTicker = styled.div`
  text-transform: uppercase;
  font-size: 1rem;
  color: #666;
`;

const BalanceQuantity = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
`;

const BalancePrefix = styled.span`
  padding-right: 0.2rem;
  color: #666;
  font-size: 1.3rem;
  font-weight: 400;
`;

export { BalanceItem, BalanceTicker, BalanceQuantity, BalancePrefix };
