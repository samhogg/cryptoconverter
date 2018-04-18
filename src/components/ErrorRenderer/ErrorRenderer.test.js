import React from "react";
import renderer from "react-test-renderer";
import ErrorRenderer from ".";
import { ThemeProvider } from "styled-components";
import theme from "../../config/theme";

it("Renders an error", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ErrorRenderer retry={() => {}} error="Error Message" />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
