import { GET_DATA } from "./get-data";
import {
    ApolloClient,
    InMemoryCache,
    useQuery,
} from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/graphql",
    cache: new InMemoryCache(),
});

export const useCharacters = () => {
    const { error, data, loading } = useQuery(GET_DATA, { client });
    return {
        error,
        data,
        loading,
    };
};
