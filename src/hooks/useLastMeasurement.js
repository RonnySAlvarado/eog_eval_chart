import { useState, useCallback, useEffect } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_MEASUREMENTS_QUERY = gql`
  query getMeasurements($input: MeasurementQuery) {
    getMeasurements(input: $input) {
      at
      value
    }
  }
`;

const useLastMeasurement = metricType => {
  const client = useApolloClient();
  const [type, setType] = useState(metricType);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

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

  return [data, type, setType, loading, getLastMeasurements];
};

export default useLastMeasurement;
