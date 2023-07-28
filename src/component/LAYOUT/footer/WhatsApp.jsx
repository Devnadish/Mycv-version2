import React from "react";
import { AiOutlineInfo } from "react-icons/ai";
import { Button } from "@mui/material";
import { footerBtn } from "./footerStyle";

export function WhatsApp() {
  return (
    <Button variant="contained" color="success" sx={footerBtn}>
      <AiOutlineInfo color="white" />
    </Button>
  );
}
