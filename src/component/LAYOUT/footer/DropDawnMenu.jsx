import React from "react";
import { FaBehance, FaLinkedin } from "react-icons/fa";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
export function DropDawnMenu(props) {
  const gotoHref = useNavigate();
  const externalLink = (linkUrl) => {
    window.open(linkUrl, "_blank");
  };

  return (
    <Menu
      id="contactMenu"
      anchorEl={props.anchorEl}
      open={props.open1}
      onClose={props.handleClose}
      MenuListProps={{
        "aria-labelledby": "contactMenu",
        style: {
          padding: 0,
          margin: 0,
        },
      }}
      disableAutoFocusItem
      PaperProps={{
        style: {
          left: "50%",
          transform: "translateX(10%) translateY(-5%)",
        },
      }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <MenuItem
        divider
        // dense
        onClick={() => externalLink("https://www.behance.net/khalidnadish")}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FaLinkedin />
      </MenuItem>

      <MenuItem
        divider
        // dense
        onClick={() => externalLink("https://www.behance.net/khalidnadish")}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FaBehance />
      </MenuItem>
      <MenuItem
        divider
        // dense
        onClick={() => gotoHref("/خالد-نديش-khalid-nadish")}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        <Avatar src={"/myPhoto.png"} alt="khalid nadish" sx={{width:"25px",height:"25px"}} />
      </MenuItem>
    </Menu>
  );
}

export default DropDawnMenu;
