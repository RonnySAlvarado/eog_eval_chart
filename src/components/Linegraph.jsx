import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import moment from 'moment';

const Linegraph = ({ dataMeasurements: getLastKnownMeasurement, type }) => {
  // const dataArray = getLastKnownMeasurement.map(info => {
  //   return { value: info.value, at: new Date(info.at).toTimeString().split(' ')[0] };
  // });
  const dataArray = getLastKnownMeasurement;
  let unit;

  if (type === 'waterTemp' || type === 'flareTemp' || type === 'oilTemp') {
    unit = 'F';
  }
  if (type === 'casingPressure' || type === 'tubingPressure') {
    unit = 'PSI';
  }
  if (type === 'injValveOpen') {
    unit = '%';
  }

  return (
    <ResponsiveContainer height={500} width="80%">
      <LineChart data={dataArray}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
        <CartesianGrid stroke="black" strokeDasharray="5 5" />
        <XAxis dataKey="at" tick={{ fill: 'black' }} tickFormatter={tick => moment(tick).format('HH:mm')} />
        <YAxis label={{ value: `${type} (${unit})`, angle: -90, position: 'left' }} tick={{ fill: 'black' }} />
        <Tooltip labelFormatter={v => moment(v).format('HH:mm')} />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default Linegraph;
