import { connect } from 'react-redux';
import WelcomeBack from '../WelcomeBack.js';

const mapStateToProps = (state) => {
  console.log(state);
  return {username: state.username};
};

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeBack)
