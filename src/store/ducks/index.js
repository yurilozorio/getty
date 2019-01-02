import { combineReducers } from 'redux';

import users from './users';
import tweets from './tweets';
import error from './error';

export default combineReducers({
  users,
  tweets,
  error,
});
