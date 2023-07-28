import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import supabase from "../../component/database/supabase";
import { Box } from "@mui/material";
import { RiWhatsappFill } from "react-icons/ri";

function Hireme() {
  const { t } = useTranslation();
  const [client, setClient] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [done, setDone] = useState(false);
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleWhats = () => {
    var url =
      "https://wa.me/966578375172?text=" +
      "Name : " +
      client +
      "%0a" +
      "-------------------------" +
      "Email : " +
      email +
      "%0a" +
      "-------------------------" +
      "Phone : " +
      phone +
      "%0a" +
      "-------------------------" +
      "*Message :* " +
      msg;
    window.open(url, "_blank").focus();
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (client === "") {
      setErrMsg(" الاسم مطلوب " + " -- " + "Name Is Requierd");
      setErr(true);
      return;
    }
    if (phone === "") {
      setErrMsg(" الهاتف مطلوب " + " -- " + "Phone Is Requierd");
      setErr(true);
      return;
    }
    const { data, error } = await supabase
      .from("request")
      .insert([{ name: client, phone, email, msg }]);
    setClient("");
    setPhone("");
    setEmail("");
    setMsg("");
    setDone(true);
  };

  return (
    <>
      <Card sx={{ padding: "5px 5px", margin: "0 auto", maxWidth: "350px" }}>
        <CardContent>
          {done && <Header setDone={setDone} />}
          {err && <Error setDone={setErr} errMsg={errMsg} />}

          <form onSubmit={sendEmail}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                gap: ".5rem",
                alignItems: "center",
                justifyContent: "center",
                mb: 1,
              }}
            >
              <Input
                label={t("firstnameTitle")}
                name={"fname"}
                value={client}
                onchange={(e) => setClient(e.target.value)}
              />
              <Input
                label={t("phoneTitle")}
                name={"phone"}
                value={phone}
                onchange={(e) => setPhone(e.target.value)}
              />
              <Input
                label={t("emailTitle")}
                name={"email"}
                value={email}
                onchange={(e) => setEmail(e.target.value)}
              />
              <Input
                label={t("messageTitle")}
                name={"msg"}
                row={3}
                multi={true}
                value={msg}
                onchange={(e) => setMsg(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                value="Send"
              >
                {t("submitterTitle")}
              </Button>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  justifyContent: "center",
                  border: "1px solid #36b37e",
                  p: 0.5,
                  width: "100%",
                  backgroundColor: "#dafbe4",
                  // borderColor:"warning.dark",
                  borderRadius: 2,
                  boxShadow: 1,
                  cursor: "pointer",
                }}
                onClick={handleWhats}
              >
                <Typography sx={{ fontFamily: "dn", fontSize: ".7rem" }}>
                  {t("emrgency")}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    fontFamily: "latoBold",
                    fontSize: ".8rem",
                  }}
                >
                  <RiWhatsappFill fontSize={"1.5rem"} color="#36b37e" />
                  0578375172
                </Typography>
              </Box>
            </Box>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default Hireme;

const Header = ({ setDone }) => {
  const { t } = useTranslation();
  useEffect(() => {
    const clearMsg = setTimeout(() => {
      setDone(false);
    }, 5000);

    return () => {
      clearTimeout(clearMsg);
    };
  }, []);

  return (
    <>
      {/* <Typography
        sx={{
          fontFamily: "NX",
          width: "100%",
          backgroundColor: "warning.dark",
          color: "white",
          textAlign: "center",
          fontSize: "1.5em",
          borderRadius: 1,
        }}
      >
        {t("hiremeTitle")}
      </Typography> */}

      <Typography
        sx={{
          fontFamily: "NX",
          width: "100%",
          textAlign: "center",
          fontSize: "1.2em",
          mb: 1,
          backgroundColor: "warning.dark",
          color: "white",
          borderRadius: 1,
        }}
      >
        {t("hiremelongTitle")}
      </Typography>
    </>
  );
};

const Error = ({ setDone, errMsg }) => {
  const { t } = useTranslation();
  useEffect(() => {
    const clearMsg = setTimeout(() => {
      setDone(false);
    }, 3000);

    return () => {
      clearTimeout(clearMsg);
    };
  }, []);

  return (
    <>
      <Typography
        sx={{
          fontFamily: "NX",
          width: "100%",
          textAlign: "center",
          fontSize: ".8em",
          mb: 1,
          backgroundColor: "warning.dark",
          color: "white",
          borderRadius: 1,
        }}
      >
        {errMsg}
      </Typography>
    </>
  );
};

const Input = ({ label, name, onchange, value, row = 1, multi }) => {
  return (
    <>
      <TextField
        label={
          <Typography
            sx={{
              fontFamily: "NX",
              fontSize: ".8em",
            }}
          >
            {label}
          </Typography>
        }
        variant="standard"
        // fullWidth
        value={value}
        onChange={onchange}
        size="small"
        rows={row}
        multiline={multi}
        sx={{
          width: "90%",
          border: "1px solid",
          borderColor: "rgba(0,0,0,.1)",
          borderRadius: 1,
          p: 0.2,
        }}
      />
    </>
  );
};
