import React from "react";

import { useInView, InView } from "react-intersection-observer";
import { Section1 } from "./Section1";
import { Sv2 } from "./Sv2";
import { Section2 } from "./Section2";

import "./slick.css";
import "./slick-theme.css";
import HomeSlider from "./HomeSlider";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section7 } from "./Section7";
import { Section8 } from "./Section8";
import { InspireSection } from "./InspireSection";
import { FaqSection } from "./FaqSection";
import MultiInview from "../../component/OnScrollView/MultiInview";
import { Box } from "@mui/material";

function Home() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width:"100%",
          gap:1,
          minHeight:"100%",
          height:"100vh",
          flex:1,
          flexWrap:"wrap",
          overflow:"auto"

          // backgroundColor:"red"
          
        }}
      >
        <Section1 sectionColor={"boxColor.main"}/>
        <Section2 sectionColor={"boxColor1.main"}/>
        <Section3 sectionColor={"boxColor.main"}/>
        <HomeSlider sectionColor={"boxColor1.main"} /> 
        <Section4 sectionColor={"boxColor.main"} />
        <Section5 sectionColor={"boxColor1.main"} />
        <Section7 sectionColor={"boxColor.main"} />
        <Section8 sectionColor={"boxColor1.main"} />
        <InspireSection sectionColor={"boxColor.main"} />
        <FaqSection sectionColor={"boxColor1.main"} />
      </Box>
      {/* <MultiInview>
      <Section1 />
    </MultiInview>

    <MultiInview>
      <Sv2 />
    </MultiInview>

    <MultiInview>
      <Section2 />
    </MultiInview>

    <MultiInview>
      <Section3 />
    </MultiInview>

    <MultiInview>
      <Sli />
    </MultiInview>

    <MultiInview>
      <Section4 />
    </MultiInview>
    <MultiInview>
      <Section5 />
    </MultiInview>
    <MultiInview>
      <Section6 />
    </MultiInview>
    <MultiInview>
      <Section7 />
    </MultiInview>
    <MultiInview>
      <Section8 />
    </MultiInview>
    <MultiInview>
      <Section9 />
    </MultiInview>
    <MultiInview>
      <Section10 />
    </MultiInview>
    <MultiInview>
      <Section11 />
    </MultiInview>
    <MultiInview>
      <Section12 />
    </MultiInview>
    <MultiInview>
      <Section13 />
    </MultiInview>
    <MultiInview>
      <Section14 />
    </MultiInview> */}

    
      
      
      {/* <Section5 /> */}
      {/* <Section6 /> */}
      {/* <Section7 /> */}
      {/* <Section8 /> */}

      {/* <Section9 /> */}
      {/* <Section10 /> */}
      {/* <Section11 /> */}
      {/* <Section12 /> */}
      {/* <Section13 /> */}
      {/* <Section14 />  */}
    </>
  );
}
export default Home;
