import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";

import theme from "./config/theme";
import store from "./store";
import { ConverterContainer } from "./containers/";

const baseStyles = () => injectGlobal`
  ${styledNormalize};
`;

const Wrapper = styled.div`
  font-family: ${({ theme }) => theme.fontStack};
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

baseStyles();
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Wrapper>
        <ConverterContainer />
      </Wrapper>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
