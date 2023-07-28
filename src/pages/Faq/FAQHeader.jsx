import React from "react";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";
import { RiDatabase2Fill } from "react-icons/ri";
import { IoAddCircleOutline } from "react-icons/io5";


export function FAQHeader({ rowCount, Link }) {
  return (
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
      <Button
      
        
        variant="contained"
        color="secondary"
      >
        <IoAddCircleOutline size={"1.2rem"}/>
        <Typography sx={{ display:{xs:"none",sm:"block"},fontSize: { xs: ".7rem", sm: ".9rem" }, px: 1 }}>
          Add Quastion
        </Typography>
      </Button>

      <Box sx={{ display: "flex", gap: 1 }}>
        <Button
          variant="contained"
          color="warning"
          sx={{ display: "flex", gap: 1 }}
        >
          <MdOutlineFavorite />
          <Typography sx={{ fontSize: ".7rem" }}>{rowCount}</Typography>
        </Button>
         
        <Button variant="contained" component={Link} to={"/"} color="error">
          <AiFillHome />
        </Button>
      </Box>
    </Box>
  );
}
