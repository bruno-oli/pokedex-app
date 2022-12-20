import React, { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../../contexts/PokemonContex";
import ControlLeft from "../Controls/ControlLeft";
import ControlRight from "../Controls/ControlRight";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  position: relative;
  padding-top: 7rem;
  & > img {
    width: 25rem;
  }
  .pokemon__id {
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    opacity: 30%;
    font-weight: bold;
    font-size: 15em;
    z-index: -1;
  }
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
  .infos {
    margin-bottom: 3rem;
    & > div {
      &:first-child {
        display: flex;
        gap: 1rem;
        & > div {
          display: flex;
          flex-direction: column;
          color: white;
          .type {
            display: flex;
            gap: 1rem;
            span {
              font-size: 1.5em;
              text-transform: uppercase;
              font-weight: 400;
            }
          }
          .name {
            font-size: 3.5em;
            font-weight: 700;
            text-transform: capitalize;
          }
        }
      }
      &:last-child {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 0.5rem;
        gap: 0.2rem;
        div {
          display: flex;
          width: 100%;
          justify-content: space-between;
          span {
            text-transform: capitalize;
          }
          .caracteristic {
            font-size: 1em;
            color: white;
            font-weight: bold;
          }
          .value {
            color: white;
            font-weight: 400;
            span {
              &:not(:last-child) {
                ::after {
                  content: ", ";
                }
              }
            }
          }
        }
      }
    }
  }
`;

const PokemonInformations = () => {
  const { pokemon } = useContext(PokemonContext);
  return (
    <Wrapper>
      <ControlLeft />
      <ControlRight />
      <span className="pokemon__id">
        #{pokemon.id < 10 && "00"}
        {pokemon.id > 10 && "0"}
        {pokemon.id}
      </span>
      <div className="infos">
        <div>
          <img
            style={{ width: "5rem" }}
            src={`/pokedex-app/icons/${pokemon.types[0].type.name}.svg`}
            alt=""
          />
          <div>
            <div className="type">
              {pokemon.types.map((i, key) => {
                return <span key={key}>{i.type.name}</span>;
              })}
            </div>
            <span className="name">{pokemon.name}</span>
          </div>
        </div>
        <div className="caracteristics">
          <div>
            <span className="caracteristic">Height</span>
            <span className="value">{pokemon.height / 10}M</span>
          </div>
          <div>
            <span className="caracteristic">Weight</span>
            <span className="value">{pokemon.weight / 10}KG</span>
          </div>
          <div>
            <span className="caracteristic">Abilities</span>
            <span className="value">
              {pokemon.abilities.map((i, key) => {
                if (key < 2) return <span key={key}>{i.ability.name}</span>;
              })}
            </span>
          </div>
        </div>
      </div>
      <img src={`/pokedex-app/pokemon/${pokemon.id}.png`} alt="" />
    </Wrapper>
  );
};

export default PokemonInformations;
