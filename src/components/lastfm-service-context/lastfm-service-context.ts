import React from 'react';

const {
  Provider: LastfmServiceProvider,
  Consumer: LastfmServiceConsumer,
} = React.createContext<Partial<{}>>({});
/* Обходим ошибку Typescript - An argument for 'defaultValue' was not provided */

export { LastfmServiceProvider, LastfmServiceConsumer };
