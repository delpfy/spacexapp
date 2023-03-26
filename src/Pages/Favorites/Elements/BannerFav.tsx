import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import banner from "../../../img/banner_fav.png";

export const Banner = () => {
  return (
    <>
      <Box height={500} width={"100%"}>
        <Box
          height={500}
          width={"100%"}
          sx={{ backgroundColor: "black" }}
          className="banner_shade"
          position={"absolute"}
        />
        <img src={banner} alt="home_banner_img" className="banner_img"></img>
        <Typography
          variant="h1"
          component="h2"
          position={"absolute"}
          color={"#fff"}
          top={" 30%"}
          left={"25%"}
          fontFamily={'Syne'}
          fontSize={80}
        >
          FAVORITES
        </Typography>
      </Box>
    </>
  );
};
