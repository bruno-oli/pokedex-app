import React, { useContext, useRef } from "react";
import styled from "styled-components";

import { BiSearch } from "react-icons/bi";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

import { PokemonContext } from "../../contexts/PokemonContex";
import axios from "axios";

const Wrapper = styled.header`
  width: 55rem;
  display: flex;
  .search__box {
    display: flex;
    align-items: center;
    background-color: #ffffff78;
    padding: 0.6rem;
    border-radius: 0.2rem;
    gap: 0.2rem;
    input {
      background: none;
      outline: none;
      border: none;
      color: white;
      width: 15rem;
      ::placeholder {
        color: white;
        font-weight: 500;
      }
    }
    svg {
      color: white;
      font-size: 1.5em;
      cursor: pointer;
    }
  }
  button {
    cursor: pointer;
    background: none;
    outline: none;
    display: flex;
    align-items: center;
    border: none;
    color: white;
    gap: 0.5rem;
    font-weight: 700;
    svg {
      font-size: 2em;
    }
  }
`;

const Header = () => {
  const { setCurrentID } = useContext(PokemonContext);
  const inputRef = useRef(null);
  function RandomPokemon() {
    setCurrentID(Math.floor(Math.random() * 905));
  }
  function SearchPokemon() {
    const API = axios.create({
      baseURL: "https://pokeapi.co/api/v2/",
    });
    if (inputRef.current.value.length > 0) {
      API.get(`pokemon/${inputRef.current.value.toLowerCase()}`)
        .then((response) => {
          setCurrentID(response.data.id);
          inputRef.current.value = "";
        })
        .catch(() => {
          window.alert("Esse pokemon não foi encontrado!");
        });
    }
  }
  return (
    <Wrapper>
      <div className="search__box">
        <input
          onKeyDown={(e) => {
            let key = e.which || e.keyCode;
            if (key === 13) {
              SearchPokemon();
            }
          }}
          ref={inputRef}
          placeholder="Search here"
          type="text"
        />
        <GiPerspectiveDiceSixFacesRandom onClick={RandomPokemon} />
        <BiSearch onClick={SearchPokemon} />
      </div>
    </Wrapper>
  );
};

export default Header;
