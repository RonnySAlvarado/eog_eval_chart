import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import moment from 'moment';

const Linegraph = ({ data }) => {
  const newDataArr = [];
  for (let i = 0; i < 1383; i++) {
    let newobj = {
      at: data.getMultipleMeasurements[0].measurements[i].at,
      waterTempVal: data.getMultipleMeasurements[0].measurements[i].value,
      casingPressureVal: data.getMultipleMeasurements[1].measurements[i].value,
      injValveOpenVal: data.getMultipleMeasurements[2].measurements[i].value,
      flareTempVal: data.getMultipleMeasurements[3].measurements[i].value,
      oilTempVal: data.getMultipleMeasurements[4].measurements[i].value,
      TubingPressureVal: data.getMultipleMeasurements[5].measurements[i].value,
    };
    newDataArr.push(newobj);
  }

  return (
    <>
      <ResponsiveContainer height={500} width="80%">
        <LineChart data={newDataArr}>
          <Line type="monotone" dataKey="waterTempVal" stroke="#0000ff" dot={false} />
          <Line type="monotone" dataKey="casingPressureVal" stroke="#FF0000" dot={false} />
          <Line type="monotone" dataKey="injValveOpenVal" stroke="#ffff00" dot={false} />
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
