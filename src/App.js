import React from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './views/LandingPage';
import Dashboard from './views/Dashboard';
import { AppContainer } from './styles/AppStyles.js';

const App = () => {
  return (
    <AppContainer>
      <Route exact path="/" component={LandingPage} />
      <Route path="/dashboard" component={Dashboard} />
    </AppContainer>
  );
};

export default App;
