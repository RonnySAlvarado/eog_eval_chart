import React from 'react';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';

import LandingPage from '../views/LandingPage';

test('Directs user to the dashboard', () => {
  const history = createMemoryHistory();
  const landingPage = render(
    <Router history={history}>
      <LandingPage />
    </Router>,
  );
  const button = landingPage.getByText(/enter here/i);
  fireEvent.click(button);
  expect(history.location.pathname).toBe('/dashboard');
});
