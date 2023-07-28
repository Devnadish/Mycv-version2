import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Button } from "@mui/material";
import { footerBtn } from "./footerStyle";

export function SendMe(props) {
  return (
    <Button
      variant="text"
      color="error"
      sx={footerBtn}
      onClick={() => {
        props.setOpen(true);
      }}
    >
      <FaPaperPlane color="darkblue" size={"1.5rem"} />
    </Button>
  );
}
