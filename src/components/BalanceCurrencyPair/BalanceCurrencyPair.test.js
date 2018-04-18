import React from "react";
import BalanceCurrencyPair from ".";
import renderer from "react-test-renderer";

it("Renders with zero balances", () => {
  const tree = renderer
    .create(<BalanceCurrencyPair quantity={0} ticker="usd" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Renders with non zero balances", () => {
  const tree = renderer
    .create(<BalanceCurrencyPair ticker="usd" quantity={40000} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
