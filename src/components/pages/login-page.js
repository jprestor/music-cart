import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../../actions';

import Spinner from '../spinner';
import LoginService from '../../services/login-service';
import { bindActionCreators } from 'redux';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { login } = this.props;
    const { email, password } = this.state;

    login(email, password);
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;
    const { loginSuccess, pending, loginError } = this.props;

    if (loginSuccess) {
      return <Redirect to="/account/" />;
    }

    return (
      <div className="jumbotron">
        <h1>Login</h1>

        <form name="loginForm" onSubmit={this.onSubmit}>
          <div className="form-group-collection">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={(e) => this.setState({ email: e.target.value })}
                value={email}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => this.setState({ password: e.target.value })}
                value={password}
              />
            </div>
          </div>

          <input type="submit" value="Login" />

          {pending && <Spinner />}
          {loginError && <div>{loginError.message}</div>}
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ login }) => {
  return {
    pending: login.pending,
    loginSuccess: login.success,
    loginError: login.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { callApi } = new LoginService();

  return bindActionCreators(
    {
      login: (email, password) => login(callApi, email, password),
    },
    dispatch
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ login }, dispatch);
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     login: (email, password) => dispatch(login(email, password))
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
