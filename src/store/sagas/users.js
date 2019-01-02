import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UsersActions } from '../ducks/users';
import { Creators as ErrorsActions } from '../ducks/error';

export function* getUsers() {
  try {
    const response = yield call(api.get, '/users');

    yield put(UsersActions.getUsersSuccess(response.data));
  } catch (err) {
    yield put(ErrorsActions.setError('danger', 'Não foi possível obter usuarios.'));
  }
}

export function* postUser(action) {
  try {
    const response = yield call(api.post, '/users/', action.payload.data);

    yield put(UsersActions.postUserSuccess(response.data));
  } catch (err) {
    yield put(ErrorsActions.setError('danger', 'Não foi possível cadastrar usuario.'));
  }
}
