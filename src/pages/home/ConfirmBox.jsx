import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { TbSend } from "react-icons/tb";
import { FiDelete } from "react-icons/fi";

export const ConfirmBox = ({ close, savedata, email, setEmail, phone, setPhone }) => {
  const { t } = useTranslation();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: ".5rem",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          backgroundColor: "rgba(202, 141, 141, 0.5)",
          position: "absolute",
          borderRadius: "20px",
          top: 0,
          left: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <TextField
            placeholder={t("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
            type="email"
            sx={{
              // borderRadius: "25px 0px 0px 25px",
              width: "80%",
              border: 0,
              outline: 0,
              backgroundColor: "white",
            }}
            inputProps={{
              style: {
                padding: "0 14px",
                textAlign: "center",
                height: "40px",
              },
            }} />
          <TextField
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t("phone")}
            variant="standard"
            // type="email"
            sx={{
              // borderRadius: "25px 0px 0px 25px",
              width: "80%",
              border: 0,
              outline: 0,
              backgroundColor: "white",
            }}
            inputProps={{
              style: {
                padding: "0 14px",
                textAlign: "center",
                height: "40px",
              },
            }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{ height: "40px", width: "40%" }}
            onClick={savedata}
          >
            <TbSend size={"1.2rem"} />
          </Button>
          <Button
            variant="contained"
            color={"warning"}
            sx={{ height: "40px", width: "40%" }}
            onClick={close}
          >
            <FiDelete size={"1.2rem"} />
          </Button>
        </Box>
      </Box>
    </>
  );
};
