import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { BsFillQuestionDiamondFill } from "react-icons/bs";
import FAQanswer from "./FAQanswer";
import { Qheader } from "./Qheader";
import { ReadMore } from "./ReadMore";
import { Qactions } from "./Qactions";

export const QCard = ({ el, answerData, elId, viewer = 1500 }) => {
  const [readMore, setReadmore] = useState(false);
  useEffect(() => {
    if (el.quastion.length > 100) {
      setReadmore(true);
    } else {
      setReadmore(false);
    }
  }, [el.quastion]);

  return (
    <>
      <Box
        sx={{
          border: "1.5px solid",
          display: "flex",
          gap: 1,
          width: "100%",
          borderColor: "rgba(255, 115, 0, 0.2)",
          borderRadius: 1,
          p: 1,
          alignItems: "center",
          boxShadow: 3,
        }}
      >
        <Box>
          <BsFillQuestionDiamondFill
            size={"1.4rem"}
            color={"rgba(255,255,255,.1)"}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            width: "100%",
            borderColor: "rgba(255,255,255,.1)",
            borderRadius: 1,
            p: 1,
            flexDirection: "column",
          }}
        >
        
          <Qactions id={elId} user={"330"} />
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: "1rem",
                color: "rgba(255,255,255,.8)",
              }}
            >
              {readMore ? <ReadMore txt={ el.quastion.substring(0, 100) } id={el.id}/>: el.quastion}
             
            </Typography>
            {answerData?.data?.map((elAns) => {
              return (
                <React.Fragment key={elAns.id}>
                  <FAQanswer
                    id={elAns.id}
                    answer={elAns.attributes.answer}
                    createAt={elAns.attributes.createdAt}
                    userMail={elAns.attributes.user.data.attributes.email}
                  />
                </React.Fragment>
              );
            })}
          </Box>
          <Qheader el={el} />
        </Box>
      </Box>
    </>
  );
};



