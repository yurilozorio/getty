import React from "react";

import twitterlogo from "../../assets/twitter.svg";

import Tweet from "../../components/tweet";

import { Container, Form, TweetList } from "./styles";

const Timeline = () => (
  <Container>
    <img height={24} src={twitterlogo} alt="GoTwitter" />

    <Form>
      <textarea
        /*value={this.state.newTweet}
        onChange={this.handleInputChange}
        onKeyDown={this.handleNewTweet}*/
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

export default Timeline;
