import { useState, useCallback, useEffect } from 'react';
import { useApolloClient, useSubscription } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_MEASUREMENTS_QUERY = gql`
  query getMeasurements($input: MeasurementQuery) {
    getMeasurements(input: $input) {
      at
      value
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

const filterData = (dataArray, newDatapoint) => {
  const newArray = dataArray.filter(dataPoint => {
    return newDatapoint.at - dataPoint.at < 1800000;
  });
  newArray.push(newDatapoint);
  return newArray;
};

const useLastMeasurement = metricType => {
  const client = useApolloClient();
  const [type, setType] = useState(metricType);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const { data: pushData, loading: pushLoading, error: pushError } = useSubscription(GET_MEASUREMENTS_SUBSCRIPTION, {
    onSubscriptionData: options => {
      if (type === options.subscriptionData.data.newMeasurement.metric) {
        setData(filterData(data, options.subscriptionData.data.newMeasurement));
      }
    },
  });

  const getLastMeasurements = useCallback(async () => {
    try {
      setLoading(true);
      const res = await client.query({
        query: GET_MEASUREMENTS_QUERY,
        variables: { input: { metricName: type, after: Date.now() - 1800000, before: Date.now() } },
        fetchPolicy: 'network-only',
      });
      setData(res.data.getMeasurements);
    } catch (err) {
      console.log(err);
      setData(null);
    }
    setLoading(false);
  }, [type, client]);

  useEffect(() => {
    if (type) {
      getLastMeasurements();
    }
  }, [type, getLastMeasurements]);

  return [data, type, setType, loading, getLastMeasurements, pushData, pushError];
};

export default useLastMeasurement;
