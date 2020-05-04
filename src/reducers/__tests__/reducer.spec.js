import reducer from '../index';

describe('test reducer', () => {
  it('should return correct initial state', () => {
    expect(reducer(undefined)).toEqual({
      login: {
        success: false,
        pending: false,
        error: null,
      },
      itemsList: {
        items: [],
        loading: true,
        error: null,
      },
      shoppingCart: {
        cartItems: [],
        totalCount: 0,
        orderTotal: 0,
      },
    });
  });
});
