import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    fire: "#ff7402",
    grass: "#33a165",
    steel: "#00858a",
    water: "#0050ac",
    psychic: "#c90086",
    ground: "#c90086",
    ice: "#70deff",
    flying: "#5d4e75",
    ghost: "#4d5b64",
    normal: "#753845",
    poison: "#7e0058",
    rock: "#6e1a00",
    fighting: "#634136",
    dark: "#272625",
    bug: "#6e1a00",
    dragon: "#00c431",
    electric: "#bba909",
    fairy: "#d31c81",
    unknow: "#757575",
    shadow: "#29292c",
  },
  getColor: (type) => {
    switch (type) {
      case "fire":
        return theme.colors.fire;
      case "grass":
        return theme.colors.grass;
      case "steel":
        return theme.colors.steel;
      case "water":
        return theme.colors.water;
      case "psychic":
        return theme.colors.psychic;
      case "ground":
        return theme.colors.ground;
      case "ice":
        return theme.colors.ice;
      case "flying":
        return theme.colors.flying;
      case "ghost":
        return theme.colors.ghost;
      case "normal":
        return theme.colors.normal;
      case "poison":
        return theme.colors.poison;
      case "rock":
        return theme.colors.rock;
      case "fighting":
        return theme.colors.fighting;
      case "dark":
        return theme.colors.dark;
      case "bug":
        return theme.colors.bug;
      case "dragon":
        return theme.colors.dragon;
      case "electric":
        return theme.colors.electric;
      case "fairy":
        return theme.colors.fairy;
      case "unknow":
        return theme.colors.unknow;
      case "shadow":
        return theme.colors.shadow;
    }
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
