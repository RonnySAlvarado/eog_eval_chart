import React, { useState } from 'react';
import Loader from 'react-loader-spinner';

import GraphSelectionButton from '../components/GraphSelectionButton';
import Linegraph from '../components/Linegraph';
import { DashboardHeaderContainer } from '../styles/DashboardHeaderContainer';
import { LoaderContainer } from '../styles/LoaderContainer';
import { DashboardContainer } from '../styles/DashboardContainer';
import useGetMeasurements from '../hooks/useGetMeasurements';

const Dashboard = () => {
  const [loading, error, stateData] = useGetMeasurements();
  const metricList = ['waterTemp', 'casingPressure', 'injValveOpen', 'flareTemp', 'oilTemp', 'tubingPressure'];
  const [view, setView] = useState([
    'waterTemp',
    'casingPressure',
    'injValveOpen',
    'flareTemp',
    'oilTemp',
    'tubingPressure',
  ]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (loading || stateData.length === 0) {
    return (
      <LoaderContainer>
        <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} />
      </LoaderContainer>
    );
  } else {
    return (
      <DashboardContainer>
        <DashboardHeaderContainer>
          {metricList.map((type, id) => {
            let value = stateData[stateData.length - 1][`${type}Val`];
            return <GraphSelectionButton key={id} type={type} value={value} setView={setView} view={view} />;
          })}
        </DashboardHeaderContainer>
        <Linegraph stateData={stateData} view={view} />
      </DashboardContainer>
    );
  }
};

export default Dashboard;
