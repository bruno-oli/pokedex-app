import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header/Header";
import PokemonContainer from "./components/PokemonContainer/PokemonContainer";

import { theme } from "./components/Theme";

import { PokemonContext } from "./contexts/PokemonContex";

import Theme from "./components/Theme";
import axios from "axios";

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

function App() {
  const { setLoading, setPokemon, currentID } = useContext(PokemonContext);
  useEffect(() => {
    function getPokemon(id) {
      const API = axios.create({
        baseURL: "https://pokeapi.co/api/v2/",
      });
      setLoading(true);
      API.get(`pokemon/${id}`)
        .then((response) => {
          setPokemon(response.data);
          document.querySelector(
            "body"
          ).style.cssText = `background: ${theme.getColor(
            response.data.types[0].type.name
          )}`;
        })
        .finally(() => {
          setLoading(false);
        });
    }
    getPokemon(currentID);
  }, [currentID]);
  return (
    <Theme>
      <GlobalStyle />
      <Container>
        <Header />
        <PokemonContainer />
      </Container>
    </Theme>
  );
}

export default App;
