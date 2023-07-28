import React, { useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { MdOutlineFavoriteBorder ,MdOutlineFavorite} from "react-icons/md";
import { RiEditLine } from "react-icons/ri";
import { useMutation,useQuery } from "@apollo/client";
import { ADD_FAVORATE } from "./Graphql/mutation/Quastion"  
import {FAV_IsExist} from "./Graphql/Query/Quastion"  

export function Qactions({
  id,
  user,
  Link,
}) {
  const [favoteOk,setFavoteOk]=useState(false)
  let userid = user;
  let quastionsid = id;
  let uuid=user+id

  const [createFavorite, { data, loading, error }] = useMutation(ADD_FAVORATE, {
    variables: { userid, quastionsid,uuid },
  });

  const  { data:isExist} = useQuery(FAV_IsExist, {
    variables: { uuid },
  });

console.log(isExist)
  
  

  const addToFaviotre = () => {
    createFavorite({ variables: { userid, quastionsid ,uuid} });
    setFavoteOk(true)
  };
  return (
    <>
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
        <IconButton onClick={addToFaviotre}>
        {!favoteOk ?
          <MdOutlineFavoriteBorder
            size={"1.2rem"}
            color={"rgba(255,255,255,.5)"}
          />
          :<MdOutlineFavorite
          size={"1.2rem"}
          color={"rgba(236, 23, 23, 0.5)"}
        />}
        </IconButton>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {/* <AiOutlineEye size={"1.2rem"} color={"rgba(255,255,255,.5)"} /> */}
          <Typography
            variant="h6"
            sx={{
              fontSize: ".5rem",
              color: "rgba(255,255,255,.8)",
            }}
          >
            {/* {viewer} */}
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="small"
          component={Link}
          to={`/`}
          sx={{ borderRadius: 0, boxShadow: 0, m: 0, height: "30px" }}
          color={"success"}
        >
          <RiEditLine color="white" size="1.5em" />
        </Button>
      </Box>
    </>
  );
}
