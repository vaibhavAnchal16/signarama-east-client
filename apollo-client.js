import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const api_url =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:4000/graphql";

const httpLink = createHttpLink({
  uri: api_url,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = null;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    token = window.localStorage.getItem("signarama_token");
  }
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([
    authLink,
    // uploadLink,
    httpLink,
  ]),
  cache: new InMemoryCache(),
});

export default client;
