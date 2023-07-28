import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {GoLinkExternal} from "react-icons/go"

export const WebLink = ({ Eldata}) => {
  return (
    <>
      <Button
        fullWidth
        sx={{
          borderRadius: 0,
          minWidth: 0,
          width: "50px",
          margin: 0,
          padding: 0,
        }}
        variant="contained"
        component={Link}
        to={`${Eldata}`}
        target="_blank"
      >
        <GoLinkExternal size={"1.2rem"} />
        {/* <Typography variant="h6" sx={{fontSize:".7rem"}}>
          {Eldata}
        </Typography> */}
      </Button>
    </>
  );
};
