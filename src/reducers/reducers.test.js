import reducer, { initialState } from ".";
import { QUOTE_INPUT_UPDATE } from "../constants/actionTypes";

describe("Cryptoconverter reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it("should handle an empty string value for inputChange", () => {
    expect(
      reducer(undefined, {
        type: QUOTE_INPUT_UPDATE,
        payload: ""
      })
    ).toEqual(initialState);
  });

  it("input should not exceed available USD balance", () => {
    expect(
      reducer(undefined, {
        type: QUOTE_INPUT_UPDATE,
        payload: "1000000"
      }).input.usd
    ).toEqual(156.12);
  });

  it("input should not be allowed below zero", () => {
    expect(
      reducer(undefined, {
        type: QUOTE_INPUT_UPDATE,
        payload: "-1000000"
      }).input.usd
    ).toEqual(null);
  });
});
