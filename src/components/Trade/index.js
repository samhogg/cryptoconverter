import React from "react";
import PropTypes from "prop-types";
import { TradeCurrencyPair, LoadingIndicator } from "..";

import {
  TradeTitle,
  TradeButton,
  TradeSeparator,
  TradeContainer
} from "./styledComponents";
import { get } from "http";

const Trade = ({
  btcValue,
  executeTrade,
  loading,
  updateQuoteValue,
  usdValue
}) => (
  <TradeContainer onSumbit={executeTrade}>
    <TradeTitle>Trade</TradeTitle>
    <LoadingIndicator loading={loading} />
    <TradeCurrencyPair
      currency="USD"
      onChange={updateQuoteValue}
      value={usdValue}
    />
    <TradeSeparator>To</TradeSeparator>
    <TradeCurrencyPair currency="BTC" value={btcValue} />
    <TradeButton disabled={!usdValue} onClick={executeTrade} type="submit">
      Execute Trade
    </TradeButton>
  </TradeContainer>
);

Trade.propTypes = {
  btcValue: PropTypes.number,
  executeTrade: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  usdValue: PropTypes.number,
  updateQuoteValue: PropTypes.func.isRequired
};

export default Trade;
