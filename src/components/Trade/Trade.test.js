import React from "react";
import renderer from "react-test-renderer";
import Trade from ".";
import { ThemeProvider } from "styled-components";
import theme from "../../config/theme";

it("Renders with reasonable defaults", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Trade
          btcValue={100}
          executeTrade={() => {}}
          loading={false}
          usdValue={1000}
          updateQuoteValue={() => {}}
        />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
