import { all, takeLatest } from 'redux-saga/effects';

import { Types as UsersTypes } from '../ducks/users';
import { getUsers, postUser } from './users';

import { Types as TweetsTypes } from '../ducks/tweets';
import {
  getTweets, postTweet, putTweet, delTweet,
} from './tweets';

export default function* rootSaga() {
  yield all([
    takeLatest(UsersTypes.GET_REQUEST, getUsers),
    takeLatest(UsersTypes.POST_REQUEST, postUser),

    takeLatest(TweetsTypes.GET_REQUEST, getTweets),
    takeLatest(TweetsTypes.POST_REQUEST, postTweet),
    takeLatest(TweetsTypes.PUT_REQUEST, putTweet),
    takeLatest(TweetsTypes.DEL_REQUEST, delTweet),
  ]);
}
