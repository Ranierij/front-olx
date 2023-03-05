import React from 'react';
import { connect } from 'react-redux';
import './App.css';

const Page = (props) => {
  return (
    <div>testando </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapDispatchToProps, mapStateToProps)(Page)