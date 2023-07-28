import React from "react";
import { Box, Button } from "@mui/material";

export const PakageAction = ({ detal }) => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    flexDirection: "column",
                    // width: "fit-content",
                    gap: "1rem",
                    py: 1,
                    width: "100%",
                }}
            >
                <Button variant="contained" fullWidth sx={{backgroundColor:"warning.main"}}>
                    Oreder
                </Button>
            </Box>
        </>
    );
};
