import { Dispatch } from 'redux';

import { State, Error } from '../../../reducers/types';
import { LSinstance, Email, Password } from '../../../services/types'; // интерфейс экземпляра объекта LoginService и типы Email, Password

type Login = (email: Email, password: Password) => void;

// То что вернет mapStateToProps
interface MapStateToPropsReturn {
  pending: boolean;
  loginSuccess: boolean;
  loginError: Error | null;
}

// То что вернет mapDispatchToProps
interface MapDispatchToPropsReturn {
  login: Login;
}

type MapStateToProps = (state: State) => MapStateToPropsReturn;

type MapDispatchToProps = (dispatch: Dispatch) => MapDispatchToPropsReturn;

// Стейт компонента
interface OwnState {
  email: Email;
  password: Password;
}

// Props компонента
interface Props extends MapStateToPropsReturn, MapDispatchToPropsReturn {}

export {
  OwnState,
  Props,
  MapStateToProps,
  MapDispatchToProps,
  LSinstance,
  Dispatch,
};
