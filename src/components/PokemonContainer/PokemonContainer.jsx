import React, { useContext } from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";
import PokemonInformations from "./PokemonInformations";
import { PokemonContext } from "../../contexts/PokemonContex";
import PokemonStats from "./PokemonStats";

const Wrapper = styled.div`
  width: 55rem;
  margin-top: 2rem;
`;

const PokemonContainer = () => {
  const {loading} = useContext(PokemonContext)
  return (
    <Wrapper>
      {loading ? (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <ReactLoading
            type={"spin"}
            color={"#FFF"}
            height={"3rem"}
            width={"3rem"}
          />
        </div>
      ) : (
        <div className="container">
          <PokemonInformations />
          <PokemonStats />
        </div>
      )}
    </Wrapper>
  );
};

export default PokemonContainer;
