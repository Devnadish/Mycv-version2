import React from "react";
import { MdDarkMode,MdOutlineDarkMode } from "react-icons/md";
import { Button } from "@mui/material";
import { dropDawn } from "./footerStyle";
 

export function DarklightMode({themeMode,setThemeMode}) {
  const handleClick=()=>{}
  return (
    <Button
      variant="contained"
      id="settingMenu"
      onClick={() => {
        themeMode==="dark"  ?   setThemeMode("light"):setThemeMode("dark")
      }}
      sx={dropDawn}
    >
      {themeMode==="dark"  ?   <MdDarkMode  color="black" size="1.2rem" />:<MdOutlineDarkMode color="black" size="1.2rem" />}
    </Button>
  );
}
 