import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UsersActions } from "../../store/ducks/users";
import { Creators as TweetsActions } from "../../store/ducks/tweets";

import twitterlogo from "../../assets/twitter.svg";

import Tweet from "../../components/tweet";

import { Container, Form, TweetList } from "./styles";

class Timeline extends Component {
  state = {
    newTweet: ""
  };

  componentDidMount() {
    this.props.getTweetsRequest(this.props.users.userLogado.id);
  }

  componentWillMount() {
    if (!this.props.users.userLogado.id) {
      this.props.history.push("/");
    }
  }

  handleInputChange = event => {
    this.setState({ newTweet: event.target.value });
  };

  handleNewTweet = async event => {
    if (event.keyCode !== 13) return;
    event.preventDefault();

    if (event.target.value.length < 1) return;

    const tweet = {
      content: this.state.newTweet,
      likes: Math.floor(Math.random() * 100),
      userId: this.props.users.userLogado.id
    };

    this.props.postTweetRequest(tweet);
    this.setState({ newTweet: "" });
  };
  render() {
    return (
      <Container>
        <img height={24} src={twitterlogo} alt="GoTwitter" />
        <h1>Tweets do {this.props.users.userLogado.username}</h1>
        <Form>
          <textarea
            rows="1"
            value={this.state.newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
            placeholder="O que está acontecendo?"
          />
        </Form>
        <TweetList>
          {this.props.tweets.data.map(tweet => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </TweetList>
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
)(Timeline);
