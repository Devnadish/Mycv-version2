import { Box, Typography } from "@mui/material";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { shorDate } from "../../component/utl";

function Answer({ Qid, AnsweData }) {
  const newData = AnsweData.data;
  const QidArray = newData.filter((value) => {
    return value.attributes.qid === Qid;
  });

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
          boxShadow: 3,
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
          {QidArray.map((el) => {
            return (
              <React.Fragment key={el.id}>
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
                    {el.attributes.answer}
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
                      alignItems: "center",
                      justifyContent: "space-between",
                      mt:2

                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".3rem",
                        // mt: "1rem",
                      }}
                    >
                      <BsPerson color="rgba(255,255,255,.4)" />
                      <Typography
                        variant="h6"
                        color="rgba(255,255,255,.4)"
                        sx={{ fontSize: { xs: ".8rem", sm: ".7rem" }, px: 1 }}
                      >
                        {el.attributes.email}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: ".6rem",
                      }}
                      color="rgba(255,255,255,.4)"
                    >
                      {shorDate(el.attributes.createdAt)}
                    </Typography>
                  </Box>
                </Box>
              </React.Fragment>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default Answer;
