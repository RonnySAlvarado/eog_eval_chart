// module imports
import styled, { keyframes } from 'styled-components';

// This will load in the landing page animations and components
const fadein = keyframes`
    0% {
        opacity:0;
    }
  100% {
    opacity:1;
  }
`;

export const LandingContainer = styled.div`
  animation: ${fadein} ease 5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15% 0;
  h2 {
    margin: 30px 0 0 0;
    font-size: 50px;
    font-family: 'Alata', sans-serif;
    color: black;
    text-align: center;
  }
  .logo {
    width: 20%;
  }
  a {
    margin-top: 20px;
    border: 2px solid black;
    border-radius: 50px;
    text-decoration: none;
    color: black;
    padding: 20px 50px;
    font-size: 24px;
    font-weight: bold;
    font-family: 'Alata', sans-serif;
    cursor: pointer;
    &:hover {
      background: black;
      color: white;
    }
  }
  @media (max-width: 800px) {
    margin-top: 25%;
  }
`;
