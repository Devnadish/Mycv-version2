import React  from "react";
import { Box } from "@mui/material";
import { RegisterUser } from "./RegisterUser";
import { UserComponent } from "./UserComponent";

export function LoginBar({ USERSTUTES, userData }) {

  return (
    <Box
    id="loginBar"
      sx={{
        width: "100%",
        minHeight: "50px",
        backgroundColor:"boxColor.main",
      }}
    >
      {USERSTUTES ? (
        <UserComponent userData={userData}/>
      ) : (
        <RegisterUser userData={userData} />
      )}
    </Box>
  );
}
