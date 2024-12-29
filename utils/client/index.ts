import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://graphqlzero.almansi.me/api", // Your running GraphQL server URL
    cache: new InMemoryCache(),
  });