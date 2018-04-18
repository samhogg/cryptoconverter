import React from "react";
import PropTypes from "prop-types";
import currency from "../../config/currency";
import {
  BalanceItem,
  BalanceTicker,
  BalanceQuantity,
  BalancePrefix
} from "./styledComponents";

const BalanceCurrencyPair = ({ ticker, quantity }) => (
  <BalanceItem>
    <BalanceTicker>{ticker}</BalanceTicker>
    <BalanceQuantity>
      <BalancePrefix>{currency[ticker].prefix}</BalancePrefix>
      {quantity.toLocaleString("en-US", {
        minimumFractionDigits: currency[ticker].dp
      })}
    </BalanceQuantity>
  </BalanceItem>
);

BalanceCurrencyPair.propTypes = {
  ticker: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default BalanceCurrencyPair;
