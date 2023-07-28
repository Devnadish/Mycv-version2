import React,{ useContext } from "react";

import Typography from "@mui/material/Typography";
import { Avatar, IconButton } from "@mui/material";
import me from "../assets/expImage/meOnly2.png";
import { ProfileDetail } from "../../../helper/context";

function Btn({ title, xcolor = "inherit", onclick ,xicon}) {
  const { activeLang } = useContext(ProfileDetail);
  return (
    <>
      
        <IconButton
            variant="filled"
          sx={{
            borderColor: xcolor,
            width:"100%",
            // height:"100%",
            color:'background.paper',
            bgcolor:xcolor,
            borderRadius:1,
            display:"flex",
            justifyContent:"space-around",
            fontSize:{xs:".5rem" ,md:"1rem",},
            // flexDirection:{xs:"column",md:"row"}
          }}
          disableRipple
          onClick={onclick}
        >
          <Typography variant="btnFont" sx={{
            fontSize:{xs:".7rem",sm:"1rem",md:"1.1rem"},
            textAlign:"center",
            mx:{xs:0,md:1},
            textTransform:"capitalize",
            fontFamily: activeLang === "arabic" ? "CB": "latoBold" ,
          }}>{title}</Typography>
          
       
        {xicon}
        </IconButton>
       
    </>
  );
}

export default Btn;

export const Me=({ title, xcolor = "inherit", onclick ,xicon})=> {
  return (
    <>
      
        <IconButton
            variant="filled"
          sx={{
            borderColor: xcolor,
            width:"100%",
            height:"100%",
            color:'background.paper',
            bgcolor:xcolor,
            borderRadius:1,
            display:"flex",
            justifyContent:"space-around",
            fontSize:{xs:"1rem" ,md:"2rem",},
          }}
          disableRipple
          onClick={onclick}
        >
          <Typography variant="btnFont" sx={{
            textAlign:"center",
            mx:{xs:0,md:1},
            textTransform:"capitalize",
            fontFamily:"CB",
            fontSize:".8rem"


          }}>{title}</Typography>
          
       <Avatar src={me} alt={"khalid nadish خالد نديش"} sx={{width:"25px",height:"25px"}}/>
        {/* {xicon} */}
        </IconButton>
       
    </>
  );
}