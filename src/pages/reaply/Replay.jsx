import React,{useState,useEffect} from "react";
import { Alert, Box, Snackbar, TextField, Typography } from "@mui/material";
import { BsPerson } from "react-icons/bs";
import { GetStartBtn } from "../home/Utl";
import { ConfirmBox } from "../home/ConfirmBox";
import { useTranslation } from "react-i18next";
import { TbSend } from "react-icons/tb";
import Snack from "../../component/component/alert/Snack";
import { isValidEmail, validatePhoneNumber,addToLocal } from "../../component/utl";
import { useSearchParams } from 'react-router-dom';
import axios from "axios";
function Replay({
  Qid = "40",
  Qemail = "new@gmail.com",
  QuastionData = "how are you ?",
}) {

  const [searchParams] = useSearchParams();
  QuastionData=searchParams.get('q'); // 'name'
 Qemail=searchParams.get('mail'); // 'name'
 Qid=searchParams.get('qid'); // 'name'


 
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          width: "100%",
          p: 1,
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <QuastionArea Qemail={Qemail} Quastion={QuastionData} Qid={Qid}  />
        <Answer Qemail={Qemail} Qid={Qid}  />
      </Box>
    </>
  );
}

export default Replay;

const QuastionArea = ({ Qemail, Quastion,Qid }) => {
  return (
    <>
      <Box
        sx={{
          border: "1px solid",
          display: "flex",
          gap: 1,
          width: "100%",
          borderColor: "rgba(255,255,255,.1)",
          borderRadius: 1,
          p: 1,
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Info mail={Qemail} Qid={Qid}/>
        <Typography>{Quastion}</Typography>
      </Box>
    </>
  );
};

const Info = ({ mail,Qid }) => {
  return (
    <>
     
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: ".3rem",
          alignItems:"center",
          justifyContent:"space-between",
          width:"100%"
        }}
      >
        <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: ".3rem",
          // mt: "1rem",
        }}>
        <BsPerson color="rgba(255,255,255,.4)" />
        <Typography
          variant="h6"
          color="rgba(255,255,255,.4)"
          sx={{ fontSize: { xs: ".8rem", sm: ".7rem" }, px: 1 }}
        >
          {mail}
        </Typography>
        </Box>
        <Typography
          variant="h6"
          color="rgba(255,255,255,.4)"
          sx={{ fontSize: { xs: ".8rem", sm: ".7rem" }, px: 1 ,backgroundColor:"rgba(255,255,255,.1)",borderRadius:2}}
        >
        {Qid}
        </Typography>
      </Box>
    </>
  );
};

const Answer = ({Qemail,Qid}) => {
  const { t } = useTranslation();
  const [send, setSend] = useState(false);
  const [ok, setOk] = useState(false);
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [err, setErr] = useState(false);
  const [errmsg, setErrmsg] = useState("");
  
  const   savedata = () => {
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
      .post("http://localhost:1337/api/answers", {
        data: {
          answer: msg,
          phone: phone,
          email: email,
          Qemail:Qemail,
          qid:Qid

        },
      })
      .then((response) => {
        addToLocal("mail",email)  
        addToLocal("phone",phone)  
        setMsg("");
        setEmail("");
        setPhone("");
        setSend(false);
        setOk(true);
        console.log(response);
      });

  };
  const handleSend=()=>{
    if (!msg) {
      setErr(true);
      setErrmsg(t("txt-replay-err"));
      return;
    }
    setEmail(localStorage.getItem("mail"))
    setPhone(localStorage.getItem("phone"))
    setSend(true)
  }


  useEffect(() => {
    setEmail(localStorage.getItem("mail"))
    setPhone(localStorage.getItem("phone"))
  
    
  }, [])
  
  return(
  <>
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <form style={{ width: "95%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
            border: "3px solid green",
            borderRadius: "25px",
            gap: ".5rem",
            backgroundColor: "white",
            // maxHeight: "13rem",
            "&:hover": {
              border: "3px solid red",
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
              }}
              inputProps={{
                style: {
                  padding: "0 14px",
                  textAlign: "center",
                },
              }}
            />
            <GetStartBtn
              title={t("S1L5")}
              heightx={"40px"}
              iconx={<TbSend size={"1.2rem"} />}
              onClickBtn={handleSend}
            />
            {send ? (
              <ConfirmBox
                close={() => setSend(false)}
                savedata={savedata}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
              />
            ) : null}
          </Box>
        </Box>
      </form>
    </Box>
    <Snackbar
      open={ok}
      onClose={() => {
        setOk(false);
      }}
      autoHideDuration={3000}
    >
      <Alert
        severity="success"
        variant="filled"
        sx={{ width: "100%", display: "flex", gap: "1.5rem" }}
      >
        {t("Answer-Vaved-Botton")} {/*    تم الحفظ */}     
      </Alert>
    </Snackbar>
    {err ? (
      <Snack txt={errmsg} setErr={setErr} type={"error"} err={err} />
    ) : null}
    
  </>
)};
