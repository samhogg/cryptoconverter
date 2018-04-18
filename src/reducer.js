import {
  QUOTE_ERROR,
  QUOTE_LOADING,
  QUOTE_SUCCESS,
  QUOTE_INPUT_UPDATE,
  TRADE_EXECUTE
} from "./constants/actionTypes";

const reducer = (
  state = {
    quote: {
      loading: false,
      rate: null,
      error: null
    },
    input: {
      usd: null,
      btc: null
    },
    balances: {
      usd: 156.12,
      btc: 0
    }
  },
  action
) => {
  switch (action.type) {
    case QUOTE_ERROR:
      return Object.assign({}, state, {
        quote: {
          rate: null,
          error: action.error,
          loading: false
        }
      });
    case QUOTE_LOADING:
      return Object.assign({}, state, {
        quote: {
          loading: true,
          error: null,
          rate: null
        }
      });
    case QUOTE_SUCCESS:
      return Object.assign({}, state, {
        quote: {
          rate: +action.payload.last_price,
          loading: false,
          error: null
        },
        input: Object.assign({}, state.input, {
          btc: state.input.usd
            ? state.input.usd / +action.payload.last_price
            : null
        })
      });
    case QUOTE_INPUT_UPDATE:
      const usd =
        action.payload.length && +action.payload >= 0
          ? Math.min(Math.max(0, +action.payload), state.balances.usd)
          : null;
      return Object.assign({}, state, {
        input: {
          usd,
          btc: usd === "" ? null : usd / state.quote.rate
        }
      });
    case TRADE_EXECUTE:
      return Object.assign({}, state, {
        input: {
          usd: null,
          btc: null
        },
        balances: {
          usd: state.balances.usd - +state.input.usd,
          btc: state.balances.btc + +state.input.btc
        }
      });
    default:
      return state;
  }

  return state;
};

export default reducer;
