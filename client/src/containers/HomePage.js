import { connect } from 'react-redux';
import { loginRequest } from '../action-creators/login.js';
import HomePage from '../HomePage.js';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onLoginClick: (username, password) => {
    dispatch(loginRequest(username, password))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
