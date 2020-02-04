import { useEffect, useRef } from 'react';
import { useQuery } from '@apollo/react-hooks';
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
  const { loading, error, data, subscribeToMore } = useQuery(GET_MULTIPLE_MEASUREMENTS_QUERY, {
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
    const unsubscribe = subscribeToMore({
      document: GET_MEASUREMENTS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }
        const final = prev.getMultipleMeasurements.map(element => {
          if (element.metric === subscriptionData.data.newMeasurement.metric) {
            element.measurements.shift();
            return { ...element, measurements: [...element.measurements, subscriptionData.data.newMeasurement] };
          } else {
            return element;
          }
        });
        prev = { ...prev, getMultipleMeasurements: final };
        return prev;
      },
    });
    return () => unsubscribe();
  }, [subscribeToMore]);
  return [loading, error, data];
};

export default useGetMeasurements;
