import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'https://react.eogresources.com/graphql',
  cache,
});

console.log(client);

export default client;
