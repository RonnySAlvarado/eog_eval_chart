import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Loader from 'react-loader-spinner';

import GraphSelectionButton from '../components/GraphSelectionButton';
import Linegraph from '../components/Linegraph';
import { DashboardHeaderContainer } from '../styles/DashboardHeaderContainer';
import { LoaderContainer } from '../styles/LoaderContainer';

const infoTypes = [
  'Water Temperature',
  'Casing Pressure',
  'Injection Valve Open',
  'Flare Temperature',
  'Oil Temperature',
  'Tubing Pressure',
];

const GET_METRICS_QUERY = gql`
  query GET_METRICS_QUERY {
    getMetrics
  }
`;

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_METRICS_QUERY);
  if (loading) {
    return (
      <LoaderContainer>
        <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} />
      </LoaderContainer>
    );
  }
  if (error) return <p>Error</p>;

  console.log(data);

  return (
    <>
      <DashboardHeaderContainer>
        <h2 style={{ margin: 0, fontSize: '32px' }}>Which information would you like to display?</h2>
        <div>
          {infoTypes.map(type => {
            return <GraphSelectionButton type={type} />;
          })}
        </div>
      </DashboardHeaderContainer>
      <Linegraph />
    </>
  );
};

export default Dashboard;
