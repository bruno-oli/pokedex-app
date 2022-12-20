import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PokemonProvider from "./contexts/PokemonContex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </React.StrictMode>
);
