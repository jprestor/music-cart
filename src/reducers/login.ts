import { AnyAction, State, LoginState } from './types';

const updateLogin = (
  state: State | undefined,
  action: AnyAction
): LoginState => {
  if (state === undefined) {
    return {
      success: false,
      pending: false,
      error: null,
    };
  }

  switch (action.type) {
    case 'SET_LOGIN_PENDING':
      return {
        success: false,
        pending: true,
        error: null,
      };

    case 'SET_LOGIN_SUCCESS':
      return {
        success: true,
        pending: false,
        error: null,
      };

    case 'SET_LOGIN_ERROR':
      return {
        success: false,
        pending: false,
        error: action.payload,
      };

    default:
      return state.login;
  }
};

export default updateLogin;
