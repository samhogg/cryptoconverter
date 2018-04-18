import React from "react";
import Balance from ".";
import renderer from "react-test-renderer";

it("Renders with zero balances", () => {
  const tree = renderer.create(<Balance usd={0} btc={0} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Renders with non zero balances", () => {
  const tree = renderer.create(<Balance usd={100} btc={1000} />).toJSON();
  expect(tree).toMatchSnapshot();
});
