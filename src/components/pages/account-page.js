import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AccountPage = ({ loginSuccess }) => {
  if (loginSuccess) {
    return (
      <div className="jumbotron">
        <h1 className="mb-5">Account page</h1>
        <h4>This page is full of secrets!!!</h4>
      </div>
    );
  }

  return <Redirect to="/login" />;
};

const mapStateToProps = ({ login }) => {
  return {
    loginSuccess: login.success,
  };
};

export default connect(mapStateToProps)(AccountPage);
