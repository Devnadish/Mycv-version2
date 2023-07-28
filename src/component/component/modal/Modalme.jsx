import React from 'react'
import Button from '@mui/material/Button';
import { Box, Dialog, DialogActions, DialogContent, DialogContentText,  Typography } from '@mui/material';
import {AiOutlineCloseCircle} from "react-icons/ai"
function Modalme({
  open,
  setOpen,
  title,
  children,
  titleBackgroundColor = "transperent",
  titleTextBackgroundColor = "black",
}) {
  const handleClose = () => setOpen(false);
  console.log("Modal render");

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        keepMounted
      >
        <DialogActions
          sx={{
            padding: "5px",
            justifyContent: "space-between",
            boxShadow: 12,
            backgroundColor: titleBackgroundColor,
            color: titleTextBackgroundColor,
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ margin: "5px", fontWeight: "bold",  color: titleTextBackgroundColor }}>
           
              {title}
            </Typography>
          </Box>
          <Button
            size="small"
            variant="contained"
            onClick={handleClose}
            color="error"
            autoFocus
            sx={{ minWidth: 0, borderRadius: 0 }}
          >
            <AiOutlineCloseCircle size={"1.2rem"} />
          </Button>
        </DialogActions>
        {/* <DialogTitle sx={{paddingBottom: "10px"}}>
        

         {title}
           
        </DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"></DialogContentText>

          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}



export default Modalme
