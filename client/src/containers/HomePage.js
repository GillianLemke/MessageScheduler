import { connect } from 'react-redux';
import { getMessageRequest } from '../action-creators/homepage.js';
import HomePage from '../HomePage.js';

const mapStateToProps = (state) => {
  console.log(state);
  return {username: state.data.username, messages: state.data.messages};
};

const mapDispatchToProps = (dispatch) => ({
  getMessages: (username) => {
    dispatch(getMessageRequest(username))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
