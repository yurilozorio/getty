import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UsersActions } from '../../store/ducks/users';
import { Creators as TweetsActions } from '../../store/ducks/tweets';

import Loading from '../../components/Loading';

import twitterlogo from '../../assets/twitter.svg';

import Tweet from '../../components/Tweet';

import { Container, Form, TweetList } from './styles';

class Timeline extends Component {
  static propTypes = {
    users: PropTypes.shape({
      loggedUser: PropTypes.shape({
        id: PropTypes.number,
        username: PropTypes.string,
      }),
    }).isRequired,
    tweets: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          map: PropTypes.func,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
    history: PropTypes.shape().isRequired,
    getTweetsRequest: PropTypes.func.isRequired,
    postTweetRequest: PropTypes.func.isRequired,
  };

  state = {
    newTweet: '',
  };

  componentWillMount() {
    if (!this.props.users.loggedUser.id) {
      this.props.history.push('/');
    }
  }

  componentDidMount() {
    this.props.getTweetsRequest(this.props.users.loggedUser.id);
  }

  handleInputChange = (event) => {
    this.setState({ newTweet: event.target.value });
  };

  handleNewTweet = async (event) => {
    if (event.keyCode !== 13) return;
    event.preventDefault();

    if (event.target.value.length < 1) return;

    const tweet = {
      content: this.state.newTweet,
      likes: Math.floor(Math.random() * 100),
      userId: this.props.users.loggedUser.id,
    };

    this.props.postTweetRequest(tweet);
    this.setState({ newTweet: '' });
  };

  render() {
    return (
      <Container>
        <img height={24} src={twitterlogo} alt="GoTwitter" />
        <h1>{`Tweets of ${this.props.users.loggedUser.username}`}</h1>
        <Form>
          <textarea
            rows="1"
            value={this.state.newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
            placeholder="What's Happening?"
          />
        </Form>
        {this.props.tweets.loading && <Loading />}
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
  tweets: state.tweets,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...UsersActions,
    ...TweetsActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Timeline);
