import React from "react";
import "./App.css";
import { useGetWinesQuery } from "./services/wine";

export default function App() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetWinesQuery("");
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data[0].wine}</h3>
          <img src={data[0].image} />
        </>
      ) : null}
    </div>
  );
}
