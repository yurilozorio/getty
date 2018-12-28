import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./config/reactotron";
import store from "./store";
import Routes from "./routes";

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
