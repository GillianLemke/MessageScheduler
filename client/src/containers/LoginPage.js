import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onLoginClick: (username, password) => {
    dispatch(login(username, password))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)
