import React from 'react';
import LoginPage from '../login-page';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const state = {
  login: {
    pending: false,
    success: true,
    error: null,
  },
};

const props = {
  pending: false,
  loginSuccess: true,
  loginError: null,
};

const {
  Component,
  mapStateToProps,
  mapDispatchToProps,
  mockDispatch,
} = LoginPage;

describe('Testing Component', () => {
  const element = shallow(<Component {...props} />).instance();

  it('renders correctly', () => {
    expect(element).toMatchSnapshot();
  });
});

describe('Testing mapStateToProps', () => {
  it('should reading the correct keys from store', () => {
    expect(mapStateToProps(state)).toEqual(props);
  });
});

describe('Testing mapDispatchToProps', () => {
  it('should return login method', () => {
    expect(mapDispatchToProps().login).toBeDefined();
  });
});
