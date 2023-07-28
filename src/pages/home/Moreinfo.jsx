import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { ProfileDetail } from "../../helper/context";
import { Box } from "@mui/material";
import remarkGfm from "remark-gfm";

import { arEcommerce, enEcommerce } from "./MDdocument/eCommerceData";
import { arBlogData, enBlogData } from "./MDdocument/blogData";
import { arDomainAndhosting, enDomainAndhosting } from "./MDdocument/domainHosting";
import { arPortofolio, enPortofolio } from "./MDdocument/portoFolio";
import { arSchdule, enSchdule } from "./MDdocument/sechduleSoftWare";
import { arVisualIdentity, enVisualIdentity } from "./MDdocument/visualIdentity";

const checkInofToDisplay = (sectionName, activeLang) => {
  let showData;
  switch (sectionName) {
    case "ecommerce":
      activeLang === "arabic"
        ? (showData = arEcommerce)
        : (showData = enEcommerce);
      break;
    case "blogData":
      activeLang === "arabic"
        ? (showData = arBlogData)
        : (showData = enBlogData);
      break;
    case "sechduleSoftWare":
      activeLang === "arabic"
        ? (showData = arSchdule)
        : (showData = enSchdule);
      break;
    case "domainHosting":
      activeLang === "arabic"
        ? (showData = arDomainAndhosting)
        : (showData = enDomainAndhosting);
      break;
    case "visualIdentity":
      activeLang === "arabic"
        ? (showData = arVisualIdentity)
        : (showData = enVisualIdentity);
        case "portoFolio":
      activeLang === "arabic"
        ? (showData = arPortofolio)
        : (showData = enPortofolio);
      break;
  }
  return showData;
};

function Moreinfo(props) {
  const { linkurl } = useParams();
  const location = useLocation();
  const { activeLang } = useContext(ProfileDetail);
  const data = location.state?.data;
  const displayData = checkInofToDisplay(data, activeLang);
console.log(displayData)
  return (
    <Box sx={{p:2,overflow:"auto"}} className="mdFile">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{displayData}</ReactMarkdown>
    </Box>
  );
}

export default Moreinfo;
