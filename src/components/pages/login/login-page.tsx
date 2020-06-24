import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../../../actions';

import Spinner from '../../spinner';
import LoginService from '../../../services/login-service';
import { bindActionCreators } from 'redux';

import {
  OwnState,
  Props,
  MapStateToProps,
  MapDispatchToProps,
  LSinstance,
} from './types';

class LoginPage extends Component<Props, OwnState> {
  state = {
    email: 'admin@example.com',
    password: 'admin',
  };

  onSubmit = (e: React.FormEvent) => {
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
    const { pending, loginSuccess, loginError } = this.props;

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
          {loginError && <p>{loginError.message}</p>}
        </form>
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps = ({ login }) => {
  return {
    pending: login.pending,
    loginSuccess: login.success,
    loginError: login.error,
  };
};

const mapDispatchToProps: MapDispatchToProps = (dispatch) => {
  const { callLoginApi }: LSinstance = new LoginService();

  return bindActionCreators({ login: login(callLoginApi) }, dispatch);

  /* - bindActionCreators вернет { () => dispatch(action()) }
   * - thunk позволяет передать в dispatch функцию в качестве параметра
   */
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
