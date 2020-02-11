import { useState, useEffect, useRef } from 'react';
import { useQuery, useSubscription } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_MULTIPLE_MEASUREMENTS_QUERY = gql`
  query getMultipleMeasurements($input: [MeasurementQuery]) {
    getMultipleMeasurements(input: $input) {
      metric
      measurements {
        metric
        at
        value
      }
    }
  }
`;

const GET_MEASUREMENTS_SUBSCRIPTION = gql`
  subscription newMeasurement {
    newMeasurement {
      metric
      at
      value
    }
  }
`;

const useGetMeasurements = () => {
  const now = useRef(Date.now());
  const [stateData, setStateData] = useState([]);
  const [subData, setSubData] = useState([]);
  useSubscription(GET_MEASUREMENTS_SUBSCRIPTION, {
    onSubscriptionData: options => {
      setSubData([...subData, options.subscriptionData.data.newMeasurement]);
      if (subData.length === 5) {
        let newObj = {
          at: subData[0].at,
          waterTempVal: subData[3].value,
          casingPressureVal: subData[2].value,
          injValveOpenVal: subData[4].value,
          flareTempVal: options.subscriptionData.data.newMeasurement.value,
          oilTempVal: subData[0].value,
          tubingPressureVal: subData[1].value,
        };
        let final = [...stateData];
        final.shift();
        setStateData([...final, newObj]);
        setSubData([]);
      }
    },
  });

  const { loading, error, data } = useQuery(GET_MULTIPLE_MEASUREMENTS_QUERY, {
    variables: {
      input: [
        {
          metricName: 'waterTemp',
          after: now.current - 1800000,
          before: now.current,
        },
        {
          metricName: 'casingPressure',
          after: now.current - 1800000,
          before: now.current,
        },
        {
          metricName: 'injValveOpen',
          after: now.current - 1800000,
          before: now.current,
        },
        {
          metricName: 'flareTemp',
          after: now.current - 1800000,
          before: now.current,
        },
        {
          metricName: 'oilTemp',
          after: now.current - 1800000,
          before: now.current,
        },
        {
          metricName: 'tubingPressure',
          after: now.current - 1800000,
          before: now.current,
        },
      ],
    },
  });

  useEffect(() => {
    if (data) {
      const newDataArr = [];
      for (let i = 0; i < data.getMultipleMeasurements[0].measurements.length; i++) {
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
      setStateData(newDataArr);
    }
  }, [data]);

  return [loading, error, stateData];
};

export default useGetMeasurements;
