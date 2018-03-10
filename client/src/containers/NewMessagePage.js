import { connect } from 'react-redux';
import { addNewMessageRequest } from '../action-creators/message.js';
import NewMessagePage from '../NewMessagePage.js';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  addNewMessage: (message) => {
    dispatch(addNewMessageRequest(message))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMessagePage)
