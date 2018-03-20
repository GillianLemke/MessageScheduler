import {
  LOGIN_LOADING,
  LOGIN_FAILED,
  LOGIN_SUCCESSFUL
} from '../constants/action-types.js';
// import { getMessageRequest } from './homepage.js';
import $ from 'jquery';

const loginLoading = () => ({
  type: LOGIN_LOADING,
});

const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  error,
});

const loginSuccessful = (user) => ({
  type: LOGIN_SUCCESSFUL,
  username: user.username,
});


const loginUtility = (username, password) => {
  return $.ajax({
    type: 'GET',
    url: `https://infinite-waters-85309.herokuapp.com:3001/api/user`,
    data: {username: username, password: password},
    async: false,
    crossDomain: true,
    beforeSend: function (xhr) {
      if (xhr && xhr.overrideMimeType) {
        xhr.overrideMimeType('application/json;charset=utf-8');
      }
    },
    dataType: 'json',
    success: function (data) {
      return dispatch => {
        dispatch(loginSuccessful(data[0]));
      }
    }
  });
}

export const loginRequest = (username, password) => {
  return dispatch => {
    dispatch(loginLoading());
    return loginUtility(username, password)
      .then(response => dispatch(loginSuccessful(response[0])))
      .catch(error => {
        return dispatch(loginFailed(error));
      });
  }
}
