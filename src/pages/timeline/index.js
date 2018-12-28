import React, { Component } from "react";

import twitterlogo from "../../assets/twitter.svg";

import Tweet from "../../components/tweet";

import { Container, Form, TweetList } from "./styles";

export default class Timeline extends Component {
  state = {
    tweets: [],
    newTweet: ""
  };

  componentDidMount() {
    /* this.subscribeToEvent();

    const response = await api.get('tweets')
    this.setState({tweets: response.data}) */
  }

  handleInputChange = event => {
    this.setState({ newTweet: event.target.value });
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

        <Form>
          <textarea
            value={this.state.newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
            placeholder="O que está acontecendo?"
          />
        </Form>
        <TweetList>
          {/*this.state.tweets.map(tweet => (
            <Tweet key={tweet._id} tweet={tweet} />
          ))*/}

          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </TweetList>
      </Container>
    );
  }
}
