import {
  GET_MESSAGES_FAILED,
  GET_MESSAGES_SUCCESSFUL,
  GET_MESSAGES_LOADING,
} from '../constants/action-types.js';
import $ from 'jquery';

const getMessagesLoading = () => ({
  type: GET_MESSAGES_LOADING,
});

const getMessagesFailed = (error) => ({
  type: GET_MESSAGES_FAILED,
  error,
});

const getMessagesSuccessful = (messages) => ({
  type: GET_MESSAGES_SUCCESSFUL,
  messages,
});

const getMessageUtility = (username) => {
  return $.ajax({
    type: 'GET',
    url: `https://infinite-waters-85309.herokuapp.com:3001/api/message`,
    data: {username: username},
    async: false,
    crossDomain: true,
    beforeSend: function (xhr) {
      if (xhr && xhr.overrideMimeType) {
        xhr.overrideMimeType('application/json;charset=utf-8');
      }
    },
    dataType: 'json',
    success: function (data) {
      console.log(data);
    }
  });
}

export const getMessageRequest = (username) => {
  console.log('get message request');
  return dispatch => {
    dispatch(getMessagesLoading());
    return getMessageUtility(username)
      .then(response =>
        dispatch(getMessagesSuccessful(response)))
      .catch(error => {
        return dispatch(getMessagesFailed(error));
      });
  }
}
