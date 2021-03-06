import React from 'react';
import { LastfmServiceConsumer } from '../lastfm-service-context';

const withLastfmService = () => (Wrapped: React.ComponentType<any>) => {
  return (props: {}) => {
    return (
      <LastfmServiceConsumer>
        {(lastfmService: {}) => {
          return <Wrapped {...props} lastfmService={lastfmService} />;
        }}
      </LastfmServiceConsumer>
    );
  };
};

export default withLastfmService;
