import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import moment from 'moment';

const Linegraph = ({ data }) => {
  console.log('data inside Linegraph: ', data.getMultipleMeasurements);

  return (
    <>
      <ResponsiveContainer height={500} width="80%">
        <LineChart data={data.getMultipleMeasurements[0].measurements}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
          <CartesianGrid stroke="black" strokeDasharray="5 5" />
          <XAxis dataKey="at" tick={{ fill: 'black' }} tickFormatter={tick => moment(tick).format('HH:mm')} />
          <YAxis tick={{ fill: 'black' }} />
          <Tooltip labelFormatter={v => moment(v).format('HH:mm')} />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer height={500} width="80%">
        <LineChart data={data.getMultipleMeasurements[1].measurements}>
          <Line type="monotone" dataKey="value" stroke="red" dot={false} />
          <CartesianGrid stroke="black" strokeDasharray="5 5" />
          <XAxis dataKey="at" tick={{ fill: 'black' }} tickFormatter={tick => moment(tick).format('HH:mm')} />
          <YAxis tick={{ fill: 'black' }} />
          <Tooltip labelFormatter={v => moment(v).format('HH:mm')} />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
export default Linegraph;
