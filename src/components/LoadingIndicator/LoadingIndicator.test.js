import React from "react";
import LoadingIndicator from ".";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import theme from "../../config/theme";

it("Renders with loading=true", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <LoadingIndicator loading={true} />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Renders with loading=false", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <LoadingIndicator loading={false} />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
