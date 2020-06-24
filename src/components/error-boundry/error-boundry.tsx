import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  /* Отлавливает ошибки, которые произошли в методах жизненного цикла
   * Принцип работы похож на try/catch - ошибку отлавливает ближайший блок */
  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator error={{ message: 'Something wrong!' }} />;
    }

    return this.props.children;
  }
}
