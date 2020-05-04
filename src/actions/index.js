const setLoginSuccess = () => {
  return 'SET_LOGIN_SUCCESS';
};

const setLoginPending = () => {
  return 'SET_LOGIN_PENDING';
};

const setLoginError = (error) => {
  return {
    type: 'SET_LOGIN_ERROR',
    payload: error,
  };
};

const fetchDataSuccess = (newItems) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload: newItems,
  };
};

const fetchDataRequest = () => {
  return 'FETCH_DATA_REQUEST';
};

const fetchDataFailure = (error) => {
  return {
    type: 'FETCH_DATA_FAILURE',
    payload: error,
  };
};

const itemAddedToCart = (id) => {
  return {
    type: 'ITEM_ADDED_TO_CART',
    payload: id,
  };
};

const itemDecreasedInCart = (id) => {
  return {
    type: 'ITEM_DECREASED_IN_CART',
    payload: id,
  };
};

const itemDeletedFromCart = (id) => {
  return {
    type: 'ITEM_DELETED_FROM_CART',
    payload: id,
  };
};

const fetchData = (getData) => () => (dispatch) => {
  dispatch(fetchDataRequest());

  getData()
    .then((data) => {
      dispatch(fetchDataSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchDataFailure(error));
    });
};

const login = (callApi) => (email, password) => (dispatch) => {
  dispatch(setLoginPending());

  callApi(email, password)
    .then(() => {
      dispatch(setLoginSuccess());
    })
    .catch((error) => {
      dispatch(setLoginError(error));
    });
};

export {
  fetchData,
  login,
  itemAddedToCart,
  itemDecreasedInCart,
  itemDeletedFromCart,
};
