import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UsersActions } from "../../store/ducks/users";
import { Creators as TweetsActions } from "../../store/ducks/tweets";

import Like from "../../assets/like.svg";
import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";

import { Container, Buttons } from "./styles";

class Tweet extends Component {
  deletar = id => {
    this.props.delTweetRequest(id);
  };

  render() {
    return (
      <Container>
        <p>{this.props.tweet.content}</p>
        <Buttons>
          <button type="button">
            <img src={Like} alt="Like" />
            {this.props.tweet.likes}
          </button>
          <button type="button">
            <img src={Edit} alt="Like" />
            Editar
          </button>
          <button
            type="button"
            onClick={() => this.deletar(this.props.tweet.id)}
          >
            <img src={Delete} alt="Like" />
            Excluir
          </button>
        </Buttons>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  tweets: state.tweets
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...UsersActions,
      ...TweetsActions
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tweet);
