import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TradeInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem;
`;

const TradeCurrencyPair = ({ currency, value, onChange }) => (
  <TradeInput
    placeholder={currency}
    value={value || ""}
    onChange={onChange}
    disabled={!onChange}
    readOnly={!onChange}
  />
);

TradeCurrencyPair.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func
};

export default TradeCurrencyPair;
