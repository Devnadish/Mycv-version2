import React, { useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { GetStartBtn } from "./Utl";
import axios from "axios";
import { TbSend } from "react-icons/tb";
import {
  isValidEmail,
  validatePhoneNumber,
  addToLocal
} from "../../helper/utl";
import { ConfirmBox } from "./ConfirmBox";

export const QuationsForm = ({ setErr, setErrmsg }) => {
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const [send, setSend] = useState(false);


  const [userId, setUserId] = useState("1");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSend = () => {
    if (!msg) {
      setErr(true);
      setErrmsg(t("txt-err"));
      return;
    }
    setEmail(localStorage.getItem("mail"));
    setPhone(localStorage.getItem("phone"));
    setSend(true);
  };
  const savedata = () => {
    if (!isValidEmail(email)) {
      setErr(true);
      setErrmsg(t("email-err"));
      return;
    }
    if (!validatePhoneNumber(phone)) {
      setErr(true);
      setErrmsg(t("phone-err"));
      return;
    }

    axios
      .post("http://localhost:1337/api/cliend-queries", {
        data: {
          Quastion: msg,
          phone: phone,
          email: email,
        },
      })
      .then((response) => {
        addToLocal("mail", email);
        addToLocal("phone", phone);
        addToLocal("userID", userId);
        setMsg("");
        setEmail("");
        setPhone("");
        setSend(false);
        setOk(true);
        console.log(response);
      });
  };


  useEffect(() => {
    setEmail(localStorage.getItem("mail"));
    setPhone(localStorage.getItem("phone"));
  }, []);

  return (
    <>
      <form style={{ width: "95%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
            border: "2px solid",
            borderColor:"borderColor.main",
            borderRadius: "25px",
            gap: ".5rem",
            backgroundColor: "lightGrey.main",
            "&:hover": {
              border: "1px solid red",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: ".5rem",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <TextField
              multiline
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              rows={5}
              placeholder={t("askme")}
              variant="standard"
              // type="email"
              sx={{
                borderRadius: "25px 0px 0px 25px",
                width: "80%",
                border: 0,
                outline: 0,
                color:"primary"
              }}
              inputProps={{
                style: {
                  padding: "0 14px",
                  textAlign: "center",
                  color:"#000"
                },
              }} />
            <GetStartBtn
              title={t("S1L5")}
              heightx={"40px"}
              iconx={<TbSend size={"1.2rem"} />}
              onClickBtn={handleSend} />
            {send ? (
              <ConfirmBox
                close={() => setSend(false)}
                savedata={savedata}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone} />
            ) : null}
          </Box>
        </Box>
      </form>
    </>
  );
};
