import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./store";
import Routes from "./routes";
import "./config/reactotron";

import GlobalStyles from "./styles/global";
import { Wrapper, Container, Content } from "./styles/components";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <GlobalStyles />
          <Container>
            <Content>
              <Routes />
            </Content>
          </Container>
        </Wrapper>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
