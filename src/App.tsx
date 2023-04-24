import React from "react";
import "./App.css";
import { usePostsControllerFindAllQuery } from "./petApi";

export default function App() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = usePostsControllerFindAllQuery();
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  console.log("data = ", data);
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data[0].languages.en.title}</h3>
        </>
      ) : null}
    </div>
  );
}
