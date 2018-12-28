import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UsersActions } from "../../store/ducks/users";

import twitterlogo from "../../assets/logo.svg";

import { Container, Form } from "./styles";

class Login extends Component {
  state = {
    userLogado: {},
    userSelected: false,
    username: ""
  };

  componentDidMount() {
    this.props.getUsersRequest();
  }

  handleInputChange = event => {
    this.setState({ username: event.target.value });
  };

  handleSelectChange = event => {
    if (event.target.value < 0) return;
    this.setState({ userSelected: true });
    this.setState({
      userLogado: this.props.users.data.find(
        user => user.id === parseInt(event.target.value)
      )
    });
  };

  salvar = event => {
    event.preventDefault();
    const { username } = this.state;

    if (!username.length) return;

    const NovoUser = { username };

    this.props.postUserRequest(NovoUser);
    this.setState({ username: "" });
  };

  logar = () => {
    this.props.getUserLogado(this.state.userLogado);
  };

  render() {
    return (
      <Container>
        <img src={twitterlogo} alt="TwitterLogo" />
        <Form onSubmit={this.salvar}>
          <input
            placeholder="Nome do Usuário"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <button type="submit">Cadastrar</button>
        </Form>
        <Form>
          <select onChange={this.handleSelectChange}>
            <option value={-1}>Escolha o Usuário</option>
            {this.props.users.data.map(user => (
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            ))}
          </select>
          <Link to={`/timeline`}>
            <button
              type="submit"
              disabled={!this.state.userSelected}
              onClick={this.logar}
            >
              Entrar
            </button>
          </Link>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...UsersActions
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
