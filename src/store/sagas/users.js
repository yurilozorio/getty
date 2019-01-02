import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as UsersActions } from "../ducks/users";

export function* getUsers() {
  try {
    const response = yield call(api.get, "/users");

    yield put(UsersActions.getUsersSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* postUser(action) {
  try {
    let response = yield call(api.post, "/users/", action.payload.data);

    yield put(UsersActions.postUserSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
