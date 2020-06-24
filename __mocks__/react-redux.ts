/* Заменяем connect функцию
 * Теперь она просто возвращает объект с
 * React Component, mapStateToProps, mapDispatchToProps
 * Вместо подключенного к store компонента
 *
 * Отпадает необходимость оборачивать тестовый компонент в <Provider>
 */

// This mock will make sure that we are able to access mapStateToProps, mapDispatchToProps and reactComponent in the test file.

// To use this, just do `jest.mock('react-redux');` in your page.test.js file.

const mockDispatch = jest.fn((action) => action);

// type MockStateToProps = ({}) => {};
// type MockDispatchToProps = (dispatch: Function) => {};

// interface MockConnect {
//   connect: (
//     mapStateToProps: MockStateToProps,
//     mapDispatchToProps: MockDispatchToProps
//   ) => (
//     Component: React.ComponentType
//   ) => {
//     mapStateToProps: MockStateToProps;
//     mapDispatchToProps: MockDispatchToProps;
//     Component: React.ComponentType;
//   };
// }

module.exports = {
  connect: (mapStateToProps: any, mapDispatchToProps: any) => (
    Component: any
  ) => ({
    mapStateToProps,
    mapDispatchToProps: (dispatch = mockDispatch, ownProps: any) =>
      mapDispatchToProps(dispatch, ownProps),
    Component,
    mockDispatch,
  }),
  Provider: ({ children }: any) => children,
};
