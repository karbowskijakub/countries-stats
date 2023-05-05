import React, { useEffect, useState } from "react";
import Header from "./layout/Header";
import { useCharacters } from "./api-service/useCountry";
import { client } from "./api-service/useCountry";
import { ApolloProvider } from "@apollo/client";

const Main = () => {
    const [country, setCountry] = useState();
    const { error, loading, data } = useCharacters();

    useEffect(() => {
        data && setCountry(data);
    });
    console.log(data);
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

export default Main;
