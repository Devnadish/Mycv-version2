import React from "react";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Typography, Button, Box, useTheme } from "@mui/material";
import Register from "../../pages/auth/register/Register";
import Login from "../../pages/auth/login/Login";
import { useTranslation } from "react-i18next";

export function RegisterUser({ userData }) {
  const myTheme=useTheme()
  console.log(myTheme.palette.orangeColor.main)
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        p: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: ".5rem",
          alignItems: "end",
          p: 1,
        }}
      >
        <FaUserAlt color={myTheme.palette.greenColor.main} size={"1.2rem"} />
        <Typography
          sx={{
            color: "textColor.main",
          }}
        >
          {t("takeAction")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: ".5rem",
          alignItems: "end",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
          sx={{ color: "textColor.main",backgroundColor:"greenColor.main" }}
        >
          {" "}
          {t("register")}
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            setOpenLogin(true);
          }}
          sx={{ color: "textColor.main",backgroundColor:"blueColor.main"  }}
        >
          {t("login")}
        </Button>
      </Box>

      {open ? <Register open={open} setOpen={setOpen} /> : null}
      {openLogin ? <Login open={openLogin} setOpen={setOpenLogin} /> : null}
    </Box>
  );
}
