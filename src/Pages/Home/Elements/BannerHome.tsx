import { Box, Typography } from "@mui/material";
import React from "react";
import Switcher from "../../Switcher/Switcher";

import banner from "../../../img/banner_home.png";
import "./home_elems.css";
export const Banner = () => {
  return (
    <>
      <Box height={700} width={"100%"}>
        <Box
          height={700}
          width={"100%"}
          sx={{ backgroundColor: "black" }}
          className="banner_shade"
          position={"absolute"}
        />
        <img src={banner} alt="home_banner_img" className="banner_img" />
        <Typography
          variant="h1"
          component="h2"
          position={"absolute"}
          color={"#fff"}
          top={" 25%"}
          left={"12%"}
        >
          THE SPACE IS WAITING FOR
        </Typography>
        <Typography
          variant="h1"
          component="h2"
          position={"absolute"}
          color={"#fff"}
          fontSize = {400}
          top={" 30%"}
          left={"25%"}
        >
          YOU
        </Typography>
        <Switcher />
      </Box>
    </>
  );
};
