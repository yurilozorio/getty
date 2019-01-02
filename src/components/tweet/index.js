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
  state = {
    editMode: false,
    editedContent: this.props.tweet.content,
    id: this.props.tweet.id,
    content: this.props.tweet.content,
    likes: this.props.tweet.likes,
    userId: this.props.tweet.userId
  };

  deletar = () => {
    this.props.delTweetRequest(this.state.id);
  };

  editar = () => {
    this.setState({ editMode: true });
  };

  handleInputChange = event => {
    this.setState({ editedContent: event.target.value });
  };

  handleEditTweet = async event => {
    if (event.keyCode !== 13) return;
    event.preventDefault();

    if (event.target.value.length < 1) return;

    const editedTweet = {
      id: this.state.id,
      content: this.state.editedContent,
      likes: this.state.likes,
      userId: this.state.userId
    };

    this.props.putTweetRequest(editedTweet);
    this.setState({ content: this.state.editedContent });
    this.setState({ editMode: false });
  };

  blur = event => {
    this.setState({ editedContent: this.state.content });
    this.setState({ editMode: false });
  };

  render() {
    return (
      <Container>
        {this.state.editMode ? (
          <textarea
            rows="1"
            value={this.state.editedContent}
            onChange={this.handleInputChange}
            onKeyDown={this.handleEditTweet}
            autoFocus
            onBlur={this.blur}
          />
        ) : (
          <p id="content">{this.state.content}</p>
        )}
        <Buttons>
          <button type="button">
            <img src={Like} alt="Like" />
            {this.state.likes}
          </button>
          <button type="button" onClick={this.editar}>
            <img src={Edit} alt="Edit" />
            Editar
          </button>
          <button type="button" onClick={this.deletar}>
            <img src={Delete} alt="Delete" />
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
