import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Linegraph = props => {
  return (
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
  );
};

export default Linegraph;
