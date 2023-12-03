import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://localhost:3050';

const graphQLClient = new GraphQLClient(endpoint);
export default graphQLClient;
