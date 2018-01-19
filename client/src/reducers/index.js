import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import loginReducer from './login.js';

export default combineReducers({
  routing: routerReducer,
  login: loginReducer,
})