import React from "react";
import { Box, Typography } from "@mui/material";
import { BsFillQuestionDiamondFill } from "react-icons/bs";
import { shorDate } from "../utl";
  

export const QCard = ({ el, answerData }) => {
  console.log(answerData);
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
          gap: "1rem",
          p: 1,
          alignItems: "center",
        }}
      >
        <Box>
          <BsFillQuestionDiamondFill
            size={"1.4rem"}
            color={"rgba(255,255,255,.1)"} />
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
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: "1rem",
                color: "rgba(255,255,255,.8)",
              }}
            >
              {el.Quastion}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              color: "rgba(255,255,255,.8)",
              backgroundColor: "rgba(255,255,255,.1)",
              borderRadius: 1,
              px: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: ".6rem",
              }}
            >
              {shorDate(el.createdAt)}
            </Typography>
            {/* <IconButton size="small">
              <GoReply color="white" />
            </IconButton> */}
          </Box>

        </Box>
      </Box>
    </>
  );
};
