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

module.exports = {
  connect: (mapStateToProps, mapDispatchToProps) => (Component) => ({
    mapStateToProps,
    mapDispatchToProps: (dispatch = mockDispatch, ownProps) =>
      mapDispatchToProps(dispatch, ownProps),
    Component,
    mockDispatch,
  }),
  Provider: ({ children }) => children,
};
