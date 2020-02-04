import React from 'react';
import Loader from 'react-loader-spinner';

import GraphSelectionButton from '../components/GraphSelectionButton';
import Linegraph from '../components/Linegraph';
import { DashboardHeaderContainer } from '../styles/DashboardHeaderContainer';
import { LoaderContainer } from '../styles/LoaderContainer';
import { DashboardContainer } from '../styles/DashboardContainer';
import useGetMeasurements from '../hooks/useGetMeasurements';

const Dashboard = () => {
  const [loading, error, data] = useGetMeasurements();
  const metricList = ['waterTemp', 'casingPressure', 'injValveOpen', 'flareTemp', 'oilTemp', 'tubingPressure'];

  return (
    <DashboardContainer>
      <DashboardHeaderContainer>
        <h2 style={{ margin: 0, fontSize: '32px' }}>Which information would you like to display?</h2>
        <div>
          {metricList.map((type, id) => {
            return <GraphSelectionButton key={id} type={type} />;
          })}
        </div>
      </DashboardHeaderContainer>
      {loading ? (
        <LoaderContainer>
          <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} />
        </LoaderContainer>
      ) : (
        <Linegraph data={data} />
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
