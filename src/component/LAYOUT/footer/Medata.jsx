import React from "react";
import { Avatar, IconButton } from "@mui/material";
import me from "../../assets/expImage/meOnly2.png";

export const Medata = () => {
  return (<>
    <IconButton
      variant="contained"
      color="primary"
      sx={{
        borderRadius: "50%",
        minWidth: 0,
        padding: "6px",
        height: "fit-content",
      }}
      href="https://www.behance.net/khalidnadish"
      target="_blank"
    >
      <Avatar src={me} sx={{ width: "30px", height: "30px" }} />
    </IconButton>

  </>);
};
