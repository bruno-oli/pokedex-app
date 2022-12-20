import React, { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../../contexts/PokemonContex";

import { AiOutlineRight } from "react-icons/ai";

const Wrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: calc(50% - 1.5em);
  right: -20%;
  transition: transform .3s;
  &:hover {
    transform: translateX(1rem);
    svg {
      opacity: 100%;
    }
  }
  svg {
    color: white;
    font-size: 3em;
    opacity: 40%;
    transition: opacity .3s;
  }
`;

const ControlRight = () => {
  const { currentID, setCurrentID } = useContext(PokemonContext);
  function nextID() {
    setCurrentID(currentID + 1);
  }
  return (
    <Wrapper>{currentID < 905 && <AiOutlineRight onClick={nextID} />}</Wrapper>
  );
};

export default ControlRight;
