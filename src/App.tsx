import React, { useEffect, useState } from "react";
import Header from "./layout/Header";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
});

const GET_DATA = gql`
query GetCountry {
  country(code: "BR") {
    name
    native
    capital
    emoji
    currency
    languages {
      code
      name
    }
  }
}
`;

const App = () => {
  const [country, setCountry] = useState();

  const { error, data, loading } = useQuery(GET_DATA, { client });
  useEffect(() => {
    data && setCountry(data);
  });

  return (
    <ApolloProvider client={client}>
      <>
        {loading && "Loading"}
        {error && "error"}
        <Header />
      </>
    </ApolloProvider>
  );
};

export default App;
