import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Loader from 'react-loader-spinner';

import GraphSelectionButton from '../components/GraphSelectionButton';
import Linegraph from '../components/Linegraph';
import { DashboardHeaderContainer } from '../styles/DashboardHeaderContainer';
import { LoaderContainer } from '../styles/LoaderContainer';
import { DashboardContainer } from '../styles/DashboardContainer';
import useGetMeasurements from '../hooks/useGetMeasurements';

const GET_METRICS_QUERY = gql`
  query GET_METRICS_QUERY {
    getMetrics
  }
`;

const Dashboard = () => {
  const [data, type, setType, loading] = useGetMeasurements('waterTemp');
  const { loading: loadingMetrics, error: errorMetrics, data: dataMetrics } = useQuery(GET_METRICS_QUERY);

  if (loadingMetrics) {
    return (
      <LoaderContainer>
        <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} />
      </LoaderContainer>
    );
  }
  if (errorMetrics) return <p>Error</p>;

  return (
    <DashboardContainer>
      <DashboardHeaderContainer>
        <h2 style={{ margin: 0, fontSize: '32px' }}>Which information would you like to display?</h2>
        <div>
          {dataMetrics.getMetrics.map((type, id) => {
            return <GraphSelectionButton key={id} type={type} setMetricType={setType} />;
          })}
        </div>
      </DashboardHeaderContainer>
      {loading ? (
        <LoaderContainer>
          <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} />
        </LoaderContainer>
      ) : (
        <Linegraph dataMeasurements={data} type={type} />
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
