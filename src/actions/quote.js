import {
  QUOTE_ERROR,
  QUOTE_LOADING,
  QUOTE_SUCCESS,
  QUOTE_INPUT_UPDATE
} from "../constants/actionTypes";

/*
  The bitfinex API doesn't support CORS, so for the purposes of this
  example we're using a readily available proxy to get around that restriction.

  This clearly has negative security implications, and in production one would
  want to set up a proxy they control.
*/
const CORS_PROXY = `https://cors-anywhere.herokuapp.com`;
const API_URL = `https://api.bitfinex.com/v1/pubticker/BTCUSD`;
const URL = `${CORS_PROXY}/${API_URL}`;

const getQuote = () => async dispatch => {
  dispatch({ type: QUOTE_LOADING });
  try {
    const data = await fetch(URL)
      .then(response => {
        // Check for error codes
        if (response.ok) {
          return response;
        } else {
          throw Error(
            `Request failed with error ${response.status} ${
              response.statusText
            }`
          );
        }
      })
      .then(response => response.json());
    dispatch({ type: QUOTE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: QUOTE_ERROR, error: error.message });
  }
};

const updateQuoteValue = e => {
  e.preventDefault();
  return {
    type: QUOTE_INPUT_UPDATE,
    payload: e.target.value
  };
};

const clearQuoteInput = () => {
  return {
    type: QUOTE_INPUT_UPDATE,
    payload: ""
  };
};

export { clearQuoteInput, getQuote, updateQuoteValue };
