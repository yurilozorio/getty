import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UsersActions } from "../../store/ducks/users";
import { Creators as TweetsActions } from "../../store/ducks/tweets";

import twitterlogo from "../../assets/twitter.svg";

import Tweet from "../../components/tweet";

import { Container, Form, TweetList } from "./styles";

class Timeline extends Component {
  state = {};

  componentDidMount() {
    this.props.getTweetsRequest(this.props.users.userLogado.id);
  }

  handleInputChange = event => {
    this.setState({ newTweet: event.target.value });
    console.log(this.props.tweets.data);
  };

  handleNewTweet = async e => {
    if (e.keyCode !== 13) return;

    const content = this.state.newTweet;

    console.log(content);
  };
  render() {
    return (
      <Container>
        <img height={24} src={twitterlogo} alt="GoTwitter" />
        <h1>Tweets do {this.props.users.userLogado.username}</h1>
        <Form>
          <textarea
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
