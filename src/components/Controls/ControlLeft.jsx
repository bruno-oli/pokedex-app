import React, { useContext } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import styled from "styled-components";
import { PokemonContext } from "../../contexts/PokemonContex";

const Wrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: calc(50% - 1.5em);
  left: -20%;
  transition: transform 0.3s;
  &:hover {
    transform: translateX(-1rem);
    svg {
      opacity: 100%;
    }
  }
  svg {
    font-size: 3em;
    color: white;
    opacity: 40%;
    transition: opacity 0.3s;
  }
`;

const ControlLeft = () => {
  const { currentID, setCurrentID } = useContext(PokemonContext);
  function prevID() {
    setCurrentID(currentID - 1);
  }
  return (
    <Wrapper>{currentID > 1 && <AiOutlineLeft onClick={prevID} />}</Wrapper>
  );
};

export default ControlLeft;
