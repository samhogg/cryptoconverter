import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { lifecycle } from "recompose";

import { Balance, Trade, ErrorRenderer } from "../../components/";
import { getQuote, updateQuoteValue } from "../../actions/quote";
import { executeTrade } from "../../actions/trade";
import { Container } from "./styledComponents";

export const ConverterContainer = ({
  balances,
  btcValue,
  error,
  executeTrade,
  getQuote,
  loading,
  updateQuoteValue,
  usdValue
}) => (
  <Container error={error}>
    {error && <ErrorRenderer error={error} retry={getQuote} />}
    <Balance {...balances} />
    <Trade
      btcValue={btcValue}
      executeTrade={executeTrade}
      loading={loading}
      updateQuoteValue={updateQuoteValue}
      usdValue={usdValue}
    />
  </Container>
);

ConverterContainer.propTypes = {
  balances: PropTypes.shape({
    usd: PropTypes.number,
    btc: PropTypes.number
  }).isRequired,
  btcValue: PropTypes.number,
  error: PropTypes.string,
  executeTrade: PropTypes.func.isRequired,
  getQuote: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  updateQuoteValue: PropTypes.func.isRequired,
  usdValue: PropTypes.number
};

const mapStateToProps = state => ({
  balances: state.balances,
  btcValue: state.input.btc,
  error: state.quote.error,
  loading: state.quote.loading,
  rate: state.quote.rate,
  usdValue: state.input.usd
});

const mapDispatchToProps = dispatch => {
  return {
    executeTrade: event => dispatch(executeTrade(event)),
    getQuote: () => dispatch(getQuote()),
    updateQuoteValue: event => dispatch(updateQuoteValue(event))
  };
};

const lifecycleMethods = lifecycle({
  componentDidMount() {
    this.props.getQuote();
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  lifecycleMethods(ConverterContainer)
);
