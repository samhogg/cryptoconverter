import React from "react";
import TradeCurrencyPair from ".";
import renderer from "react-test-renderer";

it("Renders with zero balances", () => {
  const tree = renderer
    .create(<TradeCurrencyPair currency="USD" value={0} onChange={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Renders with a non zero balance", () => {
  const tree = renderer
    .create(
      <TradeCurrencyPair currency="USD" value={1000} onChange={() => {}} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Renders without an onChange handler", () => {
  const tree = renderer
    .create(<TradeCurrencyPair currency="USD" value={1000} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
