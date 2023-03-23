import { Box } from "@mui/material";
import React from "react";

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
        ></Box>
        <img src={banner} alt="home_banner_img" className="banner_img" />
      </Box>
    </>
  );
};
