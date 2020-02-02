import React from 'react';
import { render } from '@testing-library/react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from '../utils/createClient';

import Dashboard from '../views/Dashboard';

describe('<Dashboard />', () => {
  it('Matches snapshot', () => {
    const dashboard = render(
      <ApolloProvider client={client}>
        <Dashboard />
      </ApolloProvider>,
    );
    expect(dashboard).toMatchSnapshot();
  });
});
