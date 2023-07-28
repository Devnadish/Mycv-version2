import { Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { Box, Button } from "@mui/material";
import { navationBtnStyle, settings } from "./homeSliderSetting";
import { GrNext, GrPrevious } from "react-icons/gr";

export default function HomeSlider({ sectionColor }) {
  const slider = React.useRef(null);

  return (
    <Box id="slider" sx={{ backgroundColor: sectionColor, p: 1, }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          // margin:"auto",
          mb: 2
          ,mt:2
        }}
      >
       
        <Button
          fullWidth
          variant="contained"
          sx={navationBtnStyle}
          onClick={() => slider?.current?.slickPrev()}
        >
          <GrPrevious size={"1.5rem"} color={"white"} />
        </Button>
        <Button
          variant="contained"
          sx={{...navationBtnStyle}}
          onClick={() => slider?.current?.slickNext()}
        >
          <GrNext size={"1.5rem"} color={"white"} />
        </Button>
      </Box>

      <Slider ref={slider} {...settings}>
        {products?.map((item, index) => {
          return <BasicCard item={item} key={item.image} sectionColor={sectionColor} />;
        })}
      </Slider>
    </Box>
  );
}

function BasicCard({ item,sectionColor }) {
  return (
    <Box
      sx={{
        width: "100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        p:1,
        // border: "1px solid",
        borderColor:"borderColor.main",
        backgroundColor: sectionColor,
        borderRadius:2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mt: 2,
          borderRadius: 2,
        }}
      >
        <img className="slider-img" variant="top" src={item?.image} />
      </Box>
      {/* <Box>
        <Typography>Card {item.id}</Typography>
        <Typography>
          Some quick example text to build on the card title and make up the...
        </Typography>
      </Box> */}
    </Box>
  );
}

const products = [
  {
    id: 1,
    image: "website_image/jac.png",
  },
  {
    id: 2,
    image: "website_image/enap.png",
  },
  {
    id: 3,
    image: "website_image/qa.png",
  },
  {
    id: 4,
    image: "website_image/LenoRest.png",
  },
];
