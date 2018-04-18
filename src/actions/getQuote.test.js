import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getQuote, URL } from "./quote";
import fetchMock from "fetch-mock";
import {
  QUOTE_LOADING,
  QUOTE_SUCCESS,
  QUOTE_ERROR
} from "../constants/actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const responseMock = {
  mid: "7921.25",
  bid: "7921.2",
  ask: "7921.3",
  last_price: "7921.3",
  low: "7823.0",
  high: "8185.0",
  volume: "28556.287986889987",
  timestamp: "1524026929.8797288"
};

describe("async actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("Completes successfully", () => {
    fetchMock.get("*", responseMock);

    const expectedActions = [
      { type: QUOTE_LOADING },
      {
        type: QUOTE_SUCCESS,
        payload: responseMock
      }
    ];

    const store = mockStore();

    return store.dispatch(getQuote()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("Throws an error", () => {
    fetchMock.get("*", 500);

    const expectedActions = [
      { type: QUOTE_LOADING },
      {
        type: QUOTE_ERROR,
        error: "Request failed with error 500 Internal Server Error"
      }
    ];

    const store = mockStore();

    return store.dispatch(getQuote()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
