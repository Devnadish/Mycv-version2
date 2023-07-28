import React from "react";
import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import { BiCalendarAlt } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";


export const Qheader = ({ el }) => {
  const twoDaysAgo = dayjs(el.createdAt).fromNow();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <BsFillPersonFill size={"1rem"} color={"rgba(255,255,255,.3)"} />
          <Typography
            variant="h6"
            sx={{
              fontSize: ".6rem",
              color: "rgba(255,255,255,.3)",
            }}
          >
            {el.user.data.attributes.email}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <BiCalendarAlt size={"1rem"} color={"rgba(255,255,255,.3)"} />
          <Typography
            variant="h6"
            sx={{
              fontSize: ".6rem",
              color: "rgba(255,255,255,.3)",
            }}
          >
            {twoDaysAgo}
          </Typography>
        </Box>
        {/* <FAQanswer  answerData={el.attributes.answers.data} /> */}
      </Box>
    </>
  );
};
