import React from "react";
import PropTypes from "prop-types";
import {
  TradeCurrencyPairContainer,
  TradeLabel,
  TradeInput
} from "./styledComponents";

const TradeCurrencyPair = ({ currency, value, onChange }) => (
  <TradeCurrencyPairContainer>
    <TradeLabel htmlFor={`currency-input-${currency}`}>{currency}</TradeLabel>
    <TradeInput
      id={`currency-input-${currency}`}
      placeholder={currency}
      value={value || ""}
      onChange={onChange}
      disabled={!onChange}
      readOnly={!onChange}
    />
  </TradeCurrencyPairContainer>
);

TradeCurrencyPair.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func
};

export default TradeCurrencyPair;
