import React, { lazy, Suspense } from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { MenuItemStyle, MenuItemStyleTypoGrap } from "./style";
import { AiTwotoneHome, AiOutlineFire } from "react-icons/ai";
import { AiOutlineBulb } from "react-icons/ai";
import { ImPriceTag } from "react-icons/im";
const Loader = lazy(() => import("../../component/loader/Loader"));
const SubMenu = lazy(() => import("./SubMenu"));

export function MenuButton({ t, activeLang }) {
  return (
    <div className="btn_contaenr">
      <div className="btn_css">
        <MenuItemBtn
          title={t("FAQmenu")}
          xcolor={"orangeColor.main"} // decodeURIComponent
          href={t("/اسئلة-مكررة")} // href={t("khalidUrl")}
          xicon={<AiOutlineFire color={"white"} className="btn_class" />}
          activeLang={activeLang}
        />
      </div>
      <div className="btn_css">
        <MenuItemBtn
          title={t("SiteSample")}
          xcolor={"greenColor.main"}
          href={"/تصميم-موقع-الكتروني"}
          xicon={<AiOutlineBulb color={"white"} className="btn_class" />} // type={1}
          activeLang={activeLang}
        />
      </div>
      <div className="btn_css">
        <Suspense fallback={<Loader />}>
          <SubMenu />
        </Suspense>
      </div>
      <div className="btn_css">
        <MenuItemBtn
          title={t("hiremeBtn")}
          xcolor={"darkPurpleColor.main"}
          // href={"/hireme"}
          href={"/اسعار-باقات-تصميم-وبرمجة-المواقع"}
          xicon={<ImPriceTag color={"white"} className="btn_class" />}
          activeLang={activeLang}
        />
      </div>
      <div className="btn_css">
        <MenuItemBtn
          xcolor={"lightPurpleColor.main"}
          href={"/"}
          xicon={
            <AiTwotoneHome
              color={"white"}
              size={"1.5rem"}
              className="btn_class"
            />
          }
          activeLang={activeLang}
        />
      </div>
    </div>
  );
}
/* --------------------------------------- */
export const MenuItemBtn = ({
  title,
  xcolor = "inherit",
  href,
  xicon,
  activeLang,
}) => {
  return (
    <>
      <Button
        variant="filled"
        component={Link}
        to={href}
        sx={{ ...MenuItemStyle, borderColor: xcolor, bgcolor: xcolor }}
      >
        <Typography
          variant="h3"
          sx={{
            ...MenuItemStyleTypoGrap,
           
          }}
        >
          {title}
        </Typography>
        {xicon}
      </Button>
    </>
  );
};
