import React,{useState} from 'react'
import Modalme from "../../../component/component/modal/Modalme"
import { Box, Button, TextField } from '@mui/material'
import {AiOutlineUser} from "react-icons/ai"
import {HiOutlineMail} from "react-icons/hi"
import {NEW_user} from "../../Faq/Graphql/mutation/users"
 import axios from 'axios'
import { useMutation } from '@apollo/client'

function Register({open,setOpen}) {
  return (
    <>
      <Modalme
        open={open}
        setOpen={setOpen}
        title={"Register"}
        titleBackgroundColor={"#2e7d32;"}
        titleTextBackgroundColor={"#ffffff"}
        children={<RegisterForm />}
      />
    </>
  );
}
export default Register

const RegisterForm=()=>{
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState([]);
  // const [registerUser, { data, loading, error }] = useMutation(NEW_user, {
    // variables: { username, email },
  // });
  //  if (!loading){console.log(data)}
  // if (error) { alert(error)   }

  const registerUserTOdb = () => {
    let body = {
      username: username,
      email: email,
      password: "password",
    };
    // registerWithFech(body,setIsError,setErrMsg);
    // useAxi(body)
    axi(body,setIsError,setErrMsg)
  };

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem",width:"100%" }}>
        <Box sx={{ display: "flex", alignItems: "flex-end", gap: "1rem" }}>
          <TextField
            id="input-with-sx"
            label="User Name"
            variant="standard"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <AiOutlineUser size={"2rem"} color={"green"} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end", gap: "1rem" }}>
          <TextField
            id="input-with-sx"
            label="Email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <HiOutlineMail size={"2rem"} color={"green"} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end", gap: "1rem" }}>
          <Button
            variant="contained"
            color={"success"}
            onClick={registerUserTOdb}
          >
            Register
          </Button>
        </Box>
        
      </form>
      {isError ? <ErrorBox errMsg={errMsg}/> : null}
    </>
  );
} 
 
 
 const ErrorBox=({errMsg})=>{return (
   <>
     <Box
       sx={{
         display: "flex",
         justifyContent: "center",
         alignItems: "flex-end",
         flexDirection:"column",
         width: "100%",
         backgroundColor: "rgba(255, 0, 0, .9)",
         color: "white",
         minHeight: "30px",
         borderRadius: 2,
         boxShadow: 3,
         m: 1,
       }}
     >
       {errMsg.map((msg) => {
         return (
           <>
             <p>{msg}</p>
           </>
         );
       })}
     </Box>
   </>
 );}

const registerWithFech=async (body,setIsError,setErrMsg)=>{
  
  try{

    const url='http://localhost:1337/api/auth/local/register'
    const response = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json", },
      body: JSON.stringify(body),
    })
  
    const data = await response.json();
    if (data?.error) {
       console.log(data?.error.message)
      setIsError(true)
      setErrMsg(data?.error.message)
      if (data?.error.message === "2 errors occurred") {
        const MultiError = data?.error?.details?.errors;
        MultiError.map((err) => console.log(err?.message));
        // setErrMsg(MultiError)
        return;
      } else {
        setErrMsg(data?.error.message)
        return
       
      
      }
    
    } 
    console.log("Well done!");
    console.log("User profile",data);
    console.log("User token", data.jwt);

  }catch(err){console.log(err.response.data.errors)}


    
}


const axi=async(reqBody,setIsError,setErrMsg)=>{
console.log(reqBody)
 await axios
.post("http://localhost:1337/api/auth/local/register", {
     
       username: reqBody.username,
       email: reqBody.email,
       password: reqBody.password,
     
   })
  //  .post({
  //   method: 'post',
  //   url: '"http://localhost:1337/api/auth/local/register"',
  //   data: reqBody
  // })
   .then((response) => {
   
   })
   .catch((err) => {
    setIsError(true)

    if(err.response && err.response.status === 400) {
      console.clear();
      //  check if one error
      const errNow1 = err.response?.data?.error.message;
      console.log(errNow1);
      //  check if more then one error
      const errNow = err.response?.data?.error?.details?.errors;
      /* extract from array error */
      let result = errNow?.map((a) => a.message);
      console.log(result);
      // console.log(errNow);
      /* pass to array */
      result.unshift(errNow1)
      setErrMsg(result)
      // console.log(err.response?.data?.error?.details?.errors);
    }
    if(err.response && err.response.status === 429) {
      console.clear();
      console.log("too many try after 5 minutes")
     
     
    }
    // console.clear() 
 
    
   });
 
}
 



/* need recheck */
 const useAxi=async (body)=>{
   const response= await axios
    .post("http://localhost:1337/api/auth/local/register", {
      username: body.username,
      email: body.email,
      password: body.password,
    },
   )
    // .then(async (response) => {
    //   const data =  response;
    //   console.log(data)
    //   if (data?.error) {
    //     //  console.log(data?.error.message)
    //     if (data?.error.message === "2 errors occurred") {
    //       const MultiError = data?.error?.details?.errors;
    //       MultiError.map((err) => console.log(err?.message));
    //       return;
    //     } else {
    //       console.log(data?.error.message);
    //       return;
    //     }
    //   } else {
    //   }
    
  
      // const data = await response.json();
      // if (data?.error) {console.log(data?.error)}
      
      // if (data?.error) {
      //   //  console.log(data?.error.message)
      //   if (data?.error.message === "2 errors occurred") {
      //     const MultiError = data?.error?.details?.errors;
      //     MultiError.map((err) => console.log(err?.message));
      //     return;
      //   } else {
      //     console.log(data?.error.message);
      //     return;
      //   }
      // } else {
      // }

    console.log("Well done!");
      console.log("User profile", response.data.user);
      console.log("User token", response.data.jwt);
    // })
    // .catch((error) => {
    //   console.log("An error occurred:", error);
    // });
}