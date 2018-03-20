import {
  ADD_NEW_MESSAGE_FAILED,
  ADD_NEW_MESSAGE_SUCCESSFUL,
  ADD_NEW_MESSAGE_LOADING,
} from '../constants/action-types.js';
import $ from 'jquery';

const addNewMessageLoading = () => ({
  type: ADD_NEW_MESSAGE_LOADING,
});

const addNewMessageFailed = (error) => ({
  type: ADD_NEW_MESSAGE_FAILED,
  error,
});

const addNewMessageSuccessful = () => ({
  type: ADD_NEW_MESSAGE_SUCCESSFUL,
});

const addNewMessageUtility = (message) => {
  return $.ajax({
    type: 'POST',
    url: `https://infinite-waters-85309.herokuapp.com:3001/api/message`,
    data: {message: message},
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

export const addNewMessageRequest = (message) => {
  return dispatch => {
    dispatch(addNewMessageLoading());
    return addNewMessageUtility(message)
      .then(() => dispatch(addNewMessageSuccessful()))
      .catch(error => {
        return dispatch(addNewMessageFailed(error));
      });
  }
}
