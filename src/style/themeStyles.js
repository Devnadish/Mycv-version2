import { createTheme } from "@mui/material/styles";

import React, { useContext }  from "react";

const Colors = {
  primary: "#00adb5",
  secondary: "#95defb",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#121212",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#000",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export const getTheme = (mode) => ({
  palette: {
    mode,
    primary: {
      main: Colors.info,
      light: Colors.danger,
      dark: Colors.dark,
    },
    customColor: {
      main: Colors.info,
      light: Colors.danger,
      dark: Colors.dark,
    },
  },
});

export const lightTheme = {
  palette: {
    mode: "light",
    boxColor: { main: "#fff"},
    boxColor1: { main: "hsl(174, 62%, 47%)"},
    boxHeaderColor: { main: "#666"},
    backGroundColor: { main: "#fafafa" },
    textColor: { main: "#443355" },
    inputTextColor: {main: "#000"},
    buttonColor: { main: "#008744" },
    lightGrey: {main: "#f5f5f5"},
    darkGrey: {main: "#9394a5"},
    orangeColor: { main: "#e65100" },
    greenColor: { main: "#008744" },
    blueColor: { main: "#0057e7" },
    redColor: { main: "#d62d20" },
    yellowColor: { main: "#ffe600" },
    borderColor:{main:"#c1c1c1"},
    darkPurpleColor:{main:"#9c27b0"},
    lightPurpleColor:{main:"#ba68c8"},
    menuTextColor:{main:"#fff"}
  },
 
    
};

export const darkTheme = {
  palette: {
    mode: "dark",
    boxColor: {main: "#333333"},
    boxColor1: { main: "#444444"},
    boxHeaderColor: { main: "#444"},
    backGroundColor: { main: "#443355"},
    textColor: {main: "#eeeedd"},
    inputTextColor: {main: "#eeeedd"},
    buttonColor: { main: "#ffa700" },
    lightGrey: {main: "#f5f5f5"},
    darkGrey: {main: "#555555"},
    orangeColor: { main: "#e65100" },
    greenColor: { main: "#008744" },
    blueColor: { main: "#0057e7" },
    redColor: { main: "#d62d20" },
    yellowColor: { main: "#ffe600" },
    borderColor:{main:"#a9a9a9"},
    darkPurpleColor:{main:"#9c27b0"},
    lightPurpleColor:{main:"#ba68c8"},
    menuTextColor:{main:"#fff"}
  },
  
};
