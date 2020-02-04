import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import moment from 'moment';

const Linegraph = ({ data, view }) => {
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
          {view.includes('waterTemp') ? (
            <Line type="monotone" dataKey="waterTempVal" stroke="#6C345C" dot={false} />
          ) : null}
          {view.includes('casingPressure') ? (
            <Line type="monotone" dataKey="casingPressureVal" stroke="#D5456D" dot={false} />
          ) : null}
          {view.includes('injValveOpen') ? (
            <Line type="monotone" dataKey="injValveOpenVal" stroke="#FE886F" dot={false} />
          ) : null}
          {view.includes('flareTemp') ? (
            <Line type="monotone" dataKey="flareTempVal" stroke="#FED13F" dot={false} />
          ) : null}
          {view.includes('oilTemp') ? <Line type="monotone" dataKey="oilTempVal" stroke="#A9436A" dot={false} /> : null}
          {view.includes('tubingPressure') ? (
            <Line type="monotone" dataKey="tubingPressureVal" stroke="#E9F9CB" dot={false} />
          ) : null}
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
