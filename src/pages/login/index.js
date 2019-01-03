import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UsersActions } from '../../store/ducks/users';

import Loading from '../../components/Loading';

import twitterlogo from '../../assets/logo.svg';

import { Container, Form } from './styles';

class Login extends Component {
  static propTypes = {
    getUsersRequest: PropTypes.func.isRequired,
    users: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          find: PropTypes.func,
          map: PropTypes.func,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
    postUserRequest: PropTypes.func.isRequired,
    getLoggedUser: PropTypes.func.isRequired,
  };

  state = {
    loggedUser: {},
    userSelected: false,
    username: '',
  };

  componentDidMount() {
    this.props.getUsersRequest();
  }

  handleInputChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleSelectChange = (event) => {
    if (event.target.value < 0) return;
    this.setState({ userSelected: true });
    this.setState({
      loggedUser: this.props.users.data.find(user => user.id === parseInt(event.target.value, 10)),
    });
  };

  salvar = (event) => {
    event.preventDefault();
    const { username } = this.state;

    if (!username.length) return;

    const NovoUser = { username };

    this.props.postUserRequest(NovoUser);
    this.setState({ username: '' });
  };

  login = () => {
    this.props.getLoggedUser(this.state.loggedUser);
  };

  render() {
    return (
      <Container>
        <img src={twitterlogo} alt="TwitterLogo" />
        <Form onSubmit={this.salvar}>
          <input
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <button type="submit">Register</button>
        </Form>
        <Form>
          <select onChange={this.handleSelectChange}>
            <option value={-1}>Select your user</option>
            {this.props.users.data.map(user => (
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            ))}
          </select>
          <Link to="/timeline">
            <button type="submit" disabled={!this.state.userSelected} onClick={this.login}>
              Log In
            </button>
          </Link>
        </Form>
        {this.props.users.loading && <Loading />}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...UsersActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
