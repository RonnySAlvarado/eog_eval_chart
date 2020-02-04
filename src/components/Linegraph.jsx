import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import moment from 'moment';

const Linegraph = ({ data, view }) => {
  const newDataArr = [];
  for (let i = 0; i < 1382; i++) {
    let newobj = {
      at: data.getMultipleMeasurements[0].measurements[i].at,
      waterTempVal: data.getMultipleMeasurements[0].measurements[i].value,
      casingPressureVal: data.getMultipleMeasurements[1].measurements[i].value,
      injValveOpenVal: data.getMultipleMeasurements[2].measurements[i].value,
      flareTempVal: data.getMultipleMeasurements[3].measurements[i].value,
      oilTempVal: data.getMultipleMeasurements[4].measurements[i].value,
      tubingPressureVal: data.getMultipleMeasurements[5].measurements[i].value,
    };
    newDataArr.push(newobj);
  }
  return (
    <ResponsiveContainer height={500} width="80%">
      <LineChart data={newDataArr}>
        {view.includes('waterTemp') ? (
          <Line type="monotone" dataKey="waterTempVal" yAxisId="temperature" stroke="#6C345C" dot={false} />
        ) : null}
        {view.includes('casingPressure') ? (
          <Line type="monotone" dataKey="casingPressureVal" yAxisId="pressure" stroke="#D5456D" dot={false} />
        ) : null}
        {view.includes('injValveOpen') ? (
          <Line type="monotone" dataKey="injValveOpenVal" yAxisId="percentage" stroke="#FE886F" dot={false} />
        ) : null}
        {view.includes('flareTemp') ? (
          <Line type="monotone" dataKey="flareTempVal" yAxisId="temperature" stroke="#FED13F" dot={false} />
        ) : null}
        {view.includes('oilTemp') ? (
          <Line type="monotone" dataKey="oilTempVal" yAxisId="temperature" stroke="#A9436A" dot={false} />
        ) : null}
        {view.includes('tubingPressure') ? (
          <Line type="monotone" dataKey="tubingPressureVal" yAxisId="pressure" stroke="#065535" dot={false} />
        ) : null}
        <CartesianGrid stroke="black" strokeDasharray="5 5" />
        <XAxis dataKey="at" tick={{ fill: 'black' }} tickFormatter={tick => moment(tick).format('HH:mm')} />
        {view.includes('waterTemp') || view.includes('flareTemp') || view.includes('oilTemp') ? (
          <YAxis tick={{ fill: 'black' }} yAxisId="temperature" label="Temp(F)" width={140} />
        ) : null}
        {view.includes('casingPressure') || view.includes('tubingPressure') ? (
          <YAxis tick={{ fill: 'black' }} yAxisId="pressure" label="PSI" width={120} />
        ) : null}
        {view.includes('injValveOpen') ? (
          <YAxis tick={{ fill: 'black' }} yAxisId="percentage" label="%" width={80} />
        ) : null}
        <Tooltip labelFormatter={v => moment(v).format('HH:mm')} />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default Linegraph;
