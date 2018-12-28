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
