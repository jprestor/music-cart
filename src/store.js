import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

// Примеры Middleware
const stringMiddleware = (/*{ dispatch, getState }*/) => (next) => (action) => {
  if (typeof action === 'string') {
    return next({ type: action });
  }

  return next(action);
};

const logMiddleware = () => (next) => (action) => {
  console.log(action.type);
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
