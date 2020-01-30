import styled from 'styled-components';

export const AppContainer = styled.div`
  height: 98vh;
  background: linear-gradient(#d3d3d3, #22303f);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`;
