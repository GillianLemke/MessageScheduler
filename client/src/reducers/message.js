import * as ActionTypes from '../constants/action-types.js';

// const initialState = {
//   username: null,
//   loggedin: false,
//   isLoading: false,
//   error: undefined,
//   messages: null,
// }

const MessageReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.GET_MESSAGES_LOADING:
      return {
        isLoading: true,
      }
      // break;
    case ActionTypes.GET_MESSAGES_FAILED:
      return {
        isLoading: false,
        error: action.error,
      }
      // break;
    case ActionTypes.GET_MESSAGES_SUCCESSFUL:
      return {
        isLoading: false,
        messages: action.messages,
      }
      // break;
    default:
      return { ...state };
  }
}

export default MessageReducer;
