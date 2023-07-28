import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../component/loader/Loader";
import VisualId from "../../pages/gallery/VisualId";
import MixDesign from "../../pages/gallery/MixDesign";
import SignBoard from "../../pages/gallery/SignBoard";
import CncDesigen from "../../pages/gallery/CncDesigen";
import { useTranslation } from "react-i18next";
import Home from "../../pages/home/Home";
import { Box } from "@mui/material";
const Aboutme = lazy(() => import("../../pages/about/Aboutme"));
const Hireme = lazy(() => import("../../pages/hireme/Hireme"));
const Website = lazy(() => import("../../pages/website/Website"));
const UiUx = lazy(() => import("../../pages/gallery/UiUx"));
const Sm = lazy(() => import("../../pages/gallery/Sm"));
const Sec2page = lazy(() => import("../../pages/sec2/Section2Page"));
const PersonalQ = lazy(() => import("../../pages/personalQ/PersonalQ"));
const FAQ = lazy(() => import("../../pages/Faq/FAQ"));
const Replay = lazy(() => import("../../pages/reaply/Replay"));
const Price = lazy(() => import("../../pages/price/Price"));
const MoreInfo = lazy(() => import("../../pages/home/Moreinfo"));

function MyRoutes() {
  const { t } = useTranslation();
  return (
    <Suspense fallback={<Loader />}>
      <Box
      id="bodyarea"
        sx={{
         display:"flex",
         alignItems:"center",
         justifyContent:"center",
         flexDirection:"column",
          minHeight:"70%",
          height: "100%",
          width: "100%",
          backgroundImage: 'url("/assets/bg1.png")',
          overflow: "auto",
         
        }}
      >
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/خالد-نديش-khalid-nadish" element={<Aboutme />} />
            <Route path="/اسعار-باقات-تصميم-وبرمجة-المواقع" element={<Price />} />
            {/* <Route path="/hireme" element={<Hireme />} /> */}
            <Route path="/تصميم-التواصل-الاجتماعي" element={<Sm />} />
            <Route path="/تصميم-موقع-الكتروني" element={<Website />} />
            <Route path="/تصميم-واجهات-المستخدم" element={<UiUx />} />
            <Route path="/تصميم-الهوية-البصرية" element={<VisualId />} />
            <Route path="/تصاميم-منوعة" element={<MixDesign />} />
            <Route path="/تصاميم-لوحات-اعلانية" element={<SignBoard />} />
            <Route path="/تصاميم-سي-ان-سي" element={<CncDesigen />} />
            <Route path="/منصة-واحدة/:linkname" element={<Sec2page />} />
            <Route path="/xx/:mailq" element={<PersonalQ />} />
            <Route path="/اسئلة-مكررة" element={<FAQ />} />
            <Route path="/معلومات-عامة/:linkurl" element={<MoreInfo />} />
            <Route path="/replay/:replay" element={<Replay />} />
          </Route>
        </Routes>
      </Box>
    </Suspense>
  );
}
export default MyRoutes;
