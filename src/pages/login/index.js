import React from "react";

import twitterlogo from "../../assets/logo.svg";

import { Container, Form } from "./styles";

const Login = () => (
  <Container>
    <img src={twitterlogo} alt="TwitterLogo" />
    <Form>
      <input
        placeholder="Nome do Usuário"
        /*value={this.state.username}
          onChange={this.handleInputChange}*/
      />
      <button type="submit">Entrar</button>
    </Form>
  </Container>
);

export default Login;
