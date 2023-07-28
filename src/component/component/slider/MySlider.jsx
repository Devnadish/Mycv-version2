import React  from "react";
// import { useTheme } from "styled-components";
import { Box,Chip,Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
 

const MySlider=({data})=>{
  // const theme=useTheme()
    
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    
    return(<>
 
        
        <Slider {...settings}>
          {data.map((el, idx) => (
          <React.Fragment key={el.idx}>
            <img src={el.img}/>
            <Chip
              variant="outlined"
              label={
                <Typography sx={{ fontFamily: "NX",color:"white" }}>{el.catname}</Typography>
              }
              onClick={()=>{alert(el.catname)}}
            />
            
            {/* <CatArea>{el.catname}</CatArea> */}
          </React.Fragment>
        ))}
        </Slider>
     



</>)}



export default MySlider;



