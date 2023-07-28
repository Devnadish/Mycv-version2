import React from 'react'
import { Alert, AlertTitle, Snackbar, Stack } from '@mui/material';

function Snack({txt,setErr,type="error",err}) {
  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          open={err}
          onClose={() => {
            setErr(false);
          }}
          autoHideDuration={2000}
        >
          <Alert
            variant="filled"
            severity={type}
            sx={{ minWidth: "100%", display: "flex", gap: "1.5rem" }}
          >
            <AlertTitle>{txt}</AlertTitle>
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
}

export default Snack