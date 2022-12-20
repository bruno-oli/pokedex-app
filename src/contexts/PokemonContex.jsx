import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

function PokemonProvider({ children }) {
  const [currentID, setCurrentID] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  return (
    <PokemonContext.Provider
      value={{
        currentID,
        setCurrentID,
        loading,
        setLoading,
        pokemon,
        setPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
export default PokemonProvider;
