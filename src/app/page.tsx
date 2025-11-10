"use client";

import ListPokemon from "@/pages/ListPokemon";
import { ApolloProvider } from "@apollo/client/react";
import client from "@/services";
import NavBar from "@/components/NavBar";
import Loading from "@/components/Loading";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function Home() {

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <header>
          <NavBar />
        </header>
        <main className="mt-[150]">
          <ListPokemon />
          <Loading /> 
        </main>
      </Provider>
    </ApolloProvider>
  );
}
