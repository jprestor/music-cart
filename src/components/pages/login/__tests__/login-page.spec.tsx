import React from 'react';
import LoginPage from '../login-page';

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

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
} = LoginPage as any;

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

describe('Testing Component', () => {
  const element = shallow(<Component {...props} />);

  it('renders correctly', () => {
    expect(toJson(element)).toMatchSnapshot();
  });
});
