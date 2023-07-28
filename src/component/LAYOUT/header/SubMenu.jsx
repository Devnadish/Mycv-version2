import React, { useContext } from "react";

import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ProfileDetail } from "../../../helper/context";
import { useNavigate } from "react-router-dom";
import { BsImages } from "react-icons/bs";
import { subMenuStyle } from "./style";

export default function SubMenu() {
  const goto = useNavigate();
  const { t } = useTranslation();
  const { activeLang } = useContext(ProfileDetail);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (menuId) => {
    // alert(menuId)
    switch (menuId) {
      case 1:
        goto("/تصميم-التواصل-الاجتماعي");
        break;
      case 2:
        goto("/تصميم-واجهات-المستخدم");
        break;
      case 3:
        goto("/تصميم-الهوية-البصرية");
        break;
      case 4:
        goto("/تصاميم-منوعة");
        break;
      case 5:
        goto("/تصاميم-لوحات-اعلانية");
        break;
      case 6:
        goto("/تصاميم-سي-ان-سي");
        break;
      default:
        break;
    }
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        fullWidth
        variant="contained"
        sx={{
          width: "100%",
          height: "100%",
          color: "menuTextColor.main",
          backgroundColor:"blueColor.main",
          borderRadius: 0,
          display: "flex",
          justifyContent: "space-around",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            ...subMenuStyle,
            fontFamily: activeLang === "arabic" ? "CB" : "latoBold",
          }}
        >
          {t("workgallaryBtn")}
        </Typography>
        <BsImages color={"white"} className="btn_class" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleMenuClick(1)}>
          <MenuTilte  title={t("smMenuTilte")} />
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick(2)}>
          <MenuTilte  title={t("uiUxMenuTitle")} />
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick(3)}>
          <MenuTilte  title={t("identityMenuTitle")} />
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick(4)}>
          <MenuTilte  title={t("mixedMenuTitl")} />
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick(5)}>
          <MenuTilte  title={t("singBoardMEnuTitle")} />
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick(6)}>
          <MenuTilte  title={t("cncMenuTitle")} />
        </MenuItem>
      </Menu>
    </>
  );
}

const MenuTilte = ({ title, activeLang }) => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mx: { xs: 0, md: 1 },
          textTransform: "capitalize",
        }}
      >
        {title}
      </Typography>
    </>
  );
};
