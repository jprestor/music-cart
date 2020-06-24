import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

import { Dispatch, AnyAction } from 'redux';

// Примеры Middleware
const stringMiddleware = (/*{ dispatch, getState }*/) => (next: Dispatch) => (
  action: AnyAction
) => {
  if (typeof action === 'string') {
    return next({ type: action });
  }

  return next(action);
};

const logMiddleware = () => (next: Dispatch) => (action: AnyAction) => {
  if (typeof action === 'object') {
    console.log(action.type);
  }
  if (typeof action === 'string') {
    console.log(action);
  }

  return next(action);
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware)
);

// Пример использования thunkMiddleware
// const delayedActionCreator = (timeout) => (dispatch) => {
//   setTimeout(
//     () =>
//       dispatch({
//         type: 'DELAYED_ACTION'
//       }),
//     timeout
//   );
// };

// store.dispatch(delayedActionCreator(2000));

export default store;
