import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box } from "@mui/material";
import Modalme from "../../component/component/modal/Modalme";
import { Titlex } from "./Titlex";

export const ShowImagework = ({ imageArray, baseulr, typex }) => {
  const [openimage, setOpenimage] = useState(false);
  const [bigimage, setBigimage] = useState("");

  const handleShowImageDialog = (srcimg) => {
    setBigimage((presrc) => srcimg);
    setOpenimage((prev) => true);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems:"center"
        }}
      >
        <Titlex tit={typex} />
        <ImageList variant="masonry" cols={2} gap={18}>
          {imageArray.map((item, index) => {
            const src1 = `${baseulr}${item}.jpg`;
            return (
              <ImageListItem key={src1+index}>
                <img
                  src={`${src1}?w=248&fit=crop&auto=format`}
                  srcSet={`${src1}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={"برمجة مواقع متاجر الكترونية  تصميم مواقع"}
                  loading="lazy"
                  onClick={() => handleShowImageDialog(src1)}
                  style={{borderRadius:8,border:"1px solid",borderColor:"lightgray"}}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
      {openimage && (
        <Modalme open={openimage} setOpen={setOpenimage} title={typex}>
          <img
            src={bigimage}
            srcSet={bigimage}
            alt={"برمجة مواقع متاجر الكترونية  تصميم مواقع"}
            loading="lazy"
            onClick={() => handleShowImageDialog(src1)}
          />
        </Modalme>
      )}
    </>
  );
};
