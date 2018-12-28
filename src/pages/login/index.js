import React, { Component } from "react";
import { Link } from "react-router-dom";

import twitterlogo from "../../assets/logo.svg";

import { Container, Form } from "./styles";

export default class Login extends Component {
  state = {
    username: ""
  };

  handleInputChange = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <Container>
        <img src={twitterlogo} alt="TwitterLogo" />
        <Form>
          <input
            placeholder="Nome do Usuário"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <Link to="/timeline">
            <button type="submit">Entrar</button>
          </Link>
        </Form>
      </Container>
    );
  }
}
