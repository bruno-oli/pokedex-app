import React, { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../../contexts/PokemonContex";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2rem;
  @keyframes animWrapper {
    from {
      opacity: 0;
      transform: translateX(-5rem);
    }
    to {
      opacity: 1;
      transform: initial;
    }
  }
  animation: animWrapper 1s forwards ease-out;
  & > span {
    color: white;
    font-size: 2em;
    font-weight: bold;
    width: 15%;
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 85%;
    gap: 1rem;
    li {
      display: flex;
      align-items: center;
      span {
        color: white;
        text-transform: capitalize;
        font-size: 1.3em;
        width: 30%;
        &.stat__value {
          text-align: end;
        }
      }
      progress {
        background: none;
        width: 40%;
        height: 1.5rem;
        ::-webkit-progress-bar {
          background-color: transparent;
        }
        ::-webkit-progress-value {
          background-color: white;
          border-radius: 0.5rem;
        }
      }
    }
  }
`;

const PokemonStats = () => {
  const { pokemon } = useContext(PokemonContext);
  function getMax(statName) {
    switch (statName) {
      case "hp":
        return 223;
      case "attack":
        return 160;
      case "defense":
        return 230;
      case "special-attack":
        return 180;
      case "special-defense":
        return 230;
      case "speed":
        return 160;
    }
  }
  return (
    <Wrapper>
      <span>Stats</span>
      <ul>
        {pokemon.stats.map((i, key) => {
          return (
            <li key={key}>
              <span className="stat__name">{i.stat.name}</span>
              <progress
                value={i.base_stat}
                max={getMax(i.stat.name)}
              ></progress>
              <span className="stat__value">{i.base_stat}</span>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default PokemonStats;
