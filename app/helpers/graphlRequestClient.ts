import { GraphQLClient } from "graphql-request";

const requestHeaders = {};

const graphqlRequestClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL as string,
  {
    headers: requestHeaders,
  }
);

export default graphqlRequestClient;
