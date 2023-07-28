import React, { useState } from "react";
import { Alert, Box, Snackbar, Stack } from "@mui/material";
 

import Snack from "../../component/component/alert/Snack";
import { QuationsForm } from "./QuationsForm";

export function QuationArea() {
   
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState(false);
  const [errmsg, setErrmsg] = useState("");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <QuationsForm setErr={setErr} setErrmsg={setErrmsg}/>
      </Box>
      <Snackbar
        open={ok}
        onClose={() => {
          setOk(false);
        }}
        autoHideDuration={3000}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: "100%", display: "flex", gap: "1.5rem" }}
        >
          تم الحفظ
        </Alert>
      </Snackbar>
      {err ? (
        <Snack txt={errmsg} setErr={setErr} type={"error"} err={err} />
      ) : null}
    </>
  );
}


