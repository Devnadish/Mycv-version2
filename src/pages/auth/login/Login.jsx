import React from 'react'
import Modalme from "../../../component/component/modal/Modalme"
import { Box, Button, TextField } from '@mui/material'
import {AiOutlineUser} from "react-icons/ai"
import {HiOutlineMail} from "react-icons/hi"

function Login({open,setOpen}) {
  return (
    <>
      <Modalme
        open={open}
        setOpen={setOpen}
        title={"Login"}
        titleBackgroundColor={"#1565c0"}
        children={<RegisterForm />}
        color={"blue"}
        titleTextBackgroundColor={"#ffffff"}
      />
    </>
  );
}

export default Login


const RegisterForm=()=>{
  return (
    <>
      <form style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
        <Box sx={{ display: "flex", alignItems: "flex-end", gap: "1rem" }}>
          <TextField id="input-with-sx" label="User Name" variant="standard" />
          <AiOutlineUser size={"2rem"} color={"blue"} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end", gap: "1rem" }}>
          <TextField id="input-with-sx" label="Email" variant="standard" />
          <HiOutlineMail size={"2rem"} color={"blue"} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end", gap: "1rem" }}>
          <Button variant='contained' color={"primary"}> Login </Button>
        </Box>
      </form>
    </>
  );
} 

 