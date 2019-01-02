import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as TweetsActions } from "../ducks/tweets";

export function* getTweets(action) {
  try {
    const response = yield call(
      api.get,
      `/tweets?userId=${action.payload.userId}`,
      action.payload.data
    );

    yield put(TweetsActions.getTweetsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* postTweet(action) {
  try {
    let response = yield call(api.post, "/tweets/", action.payload.data);

    yield put(TweetsActions.postTweetSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* putTweet(action) {
  try {
    let response = yield call(
      api.put,
      `/tweets/${action.payload.data.id}`,
      action.payload.data
    );

    yield put(TweetsActions.putTweetSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* delTweet(action) {
  try {
    yield call(api.delete, `/tweets/${action.payload.id}`);

    yield put(TweetsActions.delTweetSuccess(action.payload.id));
  } catch (err) {
    console.log(err);
  }
}
