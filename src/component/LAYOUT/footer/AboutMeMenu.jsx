import React from "react";
import { FcMenu } from "react-icons/fc";
import { Button } from "@mui/material";
import { dropDawn } from "./footerStyle";

export function AboutMeMenu(props) {
  return (
    <Button
      variant="contained"
      id="contactMenu"
      onClick={props.handleClick}
      sx={dropDawn}
    >
      <FcMenu />
    </Button>
  );
}
