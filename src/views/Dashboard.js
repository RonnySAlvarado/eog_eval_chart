import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import GraphSelectionButton from '../components/GraphSelectionButton';
import { DashboardHeaderContainer } from '../styles/DashboardHeaderContainer';

const infoTypes = [
  'Water Temperature',
  'Casing Pressure',
  'Injection Valve Open',
  'Flare Temperature',
  'Oil Temperature',
  'Tubing Pressure',
];

const Dashboard = () => {
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

      <ResponsiveContainer height={500} width="100%">
        <LineChart data={null}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <Line type="monotone" dataKey="thresholdVal" stroke="red" dot={false} />
          <CartesianGrid stroke="black" strokeDasharray="5 5" />
          <XAxis dataKey="timestamp" stroke="black" />
          <YAxis stroke="black" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Dashboard;
