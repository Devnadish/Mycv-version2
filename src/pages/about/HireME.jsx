import React, { useContext } from "react";
import { MdWorkOutline } from "react-icons/md";
import { ProfileDetail } from "../../helper/context";
import { Button,Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import mycv from "../../assets/aboutimg/mycv.jpg"
import { FiDownload } from "react-icons/fi";
import { useTranslation } from "react-i18next";


export const HireME = () => {
  const { setActiveLink } = useContext(ProfileDetail);
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          gap: "1rem",
          px: 3,
        }}
      >
        <Button
          component={Link}
          fullWidth
          to={"/hireme"}
          variant="contained"
          onClick={() => setActiveLink("/hire")}
          sx={{ backgroundColor: "darkPurpleColor.main" }}
        >
                    <MdWorkOutline size ={"1rem"} color="white" className={"hireBtn"} />
          <Typography>
          {t("waitingForyou")}
          </Typography>


        </Button>
        <Button
          fullWidth
          href={mycv}
          download="khalidnadish.jpg"
          variant="contained"
          sx={{
            backgroundColor: "lightPurpleColor.main",
            display: "flex",
            alignItems: "center",
            gap:"1rem"
          }}
        >
          <FiDownload size ={"1rem"} color="white" className={"hireBtn"} />
          <Typography>
          {t("download")}
          </Typography>
        </Button>
      </Box>
    </>
  );
};
