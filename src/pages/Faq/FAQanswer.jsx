import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { BsPerson } from "react-icons/bs";
import { BiCalendarAlt } from "react-icons/bi";
import { shorDate } from "../../helper/utl";
import { ReadMore } from "./ReadMore";

function FAQanswer({id,
answer,
createAt,
userMail }) {

  const [readMore, setReadmore] = useState(false);
  useEffect(() => {
    if (answer.length > 100) {
      setReadmore(true);
    } else {
      setReadmore(false);
    }
  }, [answer]);


  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          justifySelf: "end",
          borderRadius: 1,
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            width: "95%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            justifySelf: "end",
            p: 1,
            borderRadius: 1,
            boxShadow: 3,
            flexDirection: "column",
            gap: "1rem",
          }}
        >
           
                <Box
                  sx={{
                    width: "100%",
                    p: 1,
                    backgroundColor: "rgba(0,0,0,.2)",
                    border: "1px solid",
                    borderColor: "rgba(255,255,255,.1)",
                    borderRadius: 1,
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontSize: { xs: ".8rem", sm: "1rem" }, px: 1 }}
                  >
                     {readMore ? <ReadMore txt={ answer.substring(0, 100) } id={id}/>: answer}
                    
                  </Typography>

                  <Box
                    sx={{
                      width: "100%",
                      px: 1,
                      py:.4,
                      backgroundColor: "rgba(255,255,255,.1)",
                      border: ".5px solid",
                      borderColor: "rgba(255,255,255,.01)",
                      borderRadius: 1,
                      display: "flex",
                      alignItems: {xs:"flex-start",sm:"center"},
                      justifyContent: "space-between",
                      mt:2,
                      flexDirection:{xs:"column",sm:"row"}


                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".3rem",
                      }}
                    >
                      <BsPerson color="rgba(255,255,255,.4)" />
                      <Typography
                        variant="h6"
                        color="rgba(255,255,255,.4)"
                        sx={{ fontSize: { xs: ".8rem", sm: ".7rem" }, px: 1 }}
                      >
                        {userMail}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".3rem",
                      }}
                    >
                    <BiCalendarAlt color="rgba(255,255,255,.4)" />
                    <Typography
                      variant="h6"
                      sx={{ fontSize: { xs: ".8rem", sm: ".7rem" }, px: 1 }}
                      color="rgba(255,255,255,.4)"
                    >

                      {shorDate(createAt)}
                    </Typography>
                    </Box>
                  </Box>
                </Box>
               
        </Box>
      </Box>
    </>
  );
}

export default FAQanswer;

 