import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
 
import { Box, IconButton, Typography } from "@mui/material";
import useGetData from "../../component/hooks/useGetData";
import { AiFillHome } from "react-icons/ai";
import { GoReply } from "react-icons/go";
import Answer from "./Answer";
import { QCard } from "../../component/faqCARD/QCard";

function PersonalQ() {
  const Person = useParams();

  const { loading, error, data, rowCount } = useGetData(
    `http://localhost:1337/api/cliend-queries?filters[email][$eq]=${Person.mailq}&sort[0]=id%3Adesc`
  );
  const {
    loading: answerLodaing,
    error: answerError,
    data: answerData,
    rowCount: answerRowCont,
  } = useGetData(
    `http://localhost:1337/api/answers?filters[qemail][$eq]=${Person.mailq}&sort[0]=id%3Adesc`
  );

  if (loading) return <p> Loading....</p>;
  if (error) return <p> error</p>;

  if (answerLodaing) return <p> Loading Answers....</p>;
  if (answerError) return <p> answerError</p>;
  console.log(answerData);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "95%",
            display: "flex",
            backgroundColor: "rgba(0,0,0,.2)",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
            borderRadius: 1,
            boxShadow: 3,
          }}
        >
          <Typography>{Person.mailq}</Typography>
          <Typography>{rowCount}</Typography>
          <IconButton color="secondary" component={Link} to={"/"}>
            <AiFillHome />
          </IconButton>
        </Box>
        <Box
          sx={{
            width: "95%",
            display: "flex",
            //   backgroundColor: "warning.main",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 1,

            mb: 5,
          }}
        >
          {data.data?.map((el) => (
            <>
            <QCard key={el.id} el={el.attributes} answerData={answerData} />
            <Answer Qid={el.id} AnsweData={answerData} />
            </>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default PersonalQ;


