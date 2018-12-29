import { all, takeLatest } from "redux-saga/effects";

import { Types as UsersTypes } from "../ducks/users";
import { getUsers, postUser, getUser } from "./users";

import { Types as TweetsTypes } from "../ducks/tweets";
import { getTweets, postTweet, delTweet } from "./tweets";

export default function* rootSaga() {
  yield all([
    takeLatest(UsersTypes.GET_REQUEST, getUsers),
    takeLatest(UsersTypes.POST_REQUEST, postUser),
    takeLatest(UsersTypes.GET_USER, getUser),

    takeLatest(TweetsTypes.GET_REQUEST, getTweets),
    takeLatest(TweetsTypes.POST_REQUEST, postTweet),
    takeLatest(TweetsTypes.DEL_REQUEST, delTweet)
  ]);
}
