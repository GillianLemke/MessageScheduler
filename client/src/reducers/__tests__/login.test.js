import reducer from '../login.js';
import * as ActionTypes from '../../constants/action-types.js';

describe('login reducer', () => {
  const initialState = {
    username: null,
    loggedin: false,
    isLoading: false,
  }

  it('doesn\'t update the state when login failed', () => {
    expect(reducer({}, ActionTypes.LOGIN_FAILED)).toEqual({
      username: null,
      loggedin: false,
      isLoading: false,
  })});

  it('updates the loading property when login is loading');
  it('updates the username and loggedin prop when logging in succeeds');
});
