import React from "react";
import renderer from "react-test-renderer";
import { ConverterContainer } from ".";
import { ThemeProvider } from "styled-components";
import theme from "../../config/theme";

it("Renders without errors", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ConverterContainer
          balances={{ usd: 100, btc: 100 }}
          btcValue={0}
          loading={true}
          executeTrade={() => {}}
          getQuote={() => {}}
          updateQuoteValue={() => {}}
          usdValue={0}
        />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Renders with an error", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ConverterContainer
          balances={{ usd: 100, btc: 100 }}
          btcValue={0}
          error="Fetch Error"
          executeTrade={() => {}}
          getQuote={() => {}}
          updateQuoteValue={() => {}}
          usdValue={0}
        />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
