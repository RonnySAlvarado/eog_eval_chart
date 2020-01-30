// module imports
import React from 'react';
import { Link } from 'react-router-dom';

// style imports
import { LandingContainer } from '../styles/LandingStyles';

const LandingPage = () => {
  return (
    <LandingContainer>
      <h2>
        Welcome to the <br />
        EOG React Assessment.
      </h2>
      <Link to="/dashboard">Enter Here</Link>
    </LandingContainer>
  );
};

export default LandingPage;
