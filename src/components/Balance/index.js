import React from "react";
import PropTypes from "prop-types";
import { BalanceCurrencyPair } from "..";
import {
  BalanceContainer,
  BalanceListTitle,
  BalanceList
} from "./styledComponents";

const Balance = props => (
  <BalanceContainer>
    <BalanceListTitle>Account Balance</BalanceListTitle>
    <BalanceList>
      {Object.keys(props).map(ticker => (
        <BalanceCurrencyPair
          key={ticker}
          ticker={ticker}
          quantity={props[ticker]}
        />
      ))}
    </BalanceList>
  </BalanceContainer>
);

Balance.propTypes = {
  usd: PropTypes.number.isRequired,
  btc: PropTypes.number.isRequired
};

export default Balance;
