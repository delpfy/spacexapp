import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";
import banner1 from "../../../img/banner_home.png";
import banner2 from "../../../img/card2.png";
import banner3 from "../../../img/card3.png";
import "./home_elems.css";
import Carousel from "react-material-ui-carousel";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";


export const Banner = () => {
  const currentRef = useRef<HTMLInputElement>(null)
  
  const scrollToElement = () => {
    currentRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div ref = {currentRef} style = {{position: 'absolute', bottom: '0'}}></div>
      <Carousel sx={{ width: "100%" }}>
        <Box height={700} width={"100%"}>
          <Box
            height={700}
            width={"100%"}
            sx={{ backgroundColor: "black" }}
            className="banner_shade"
            position={"absolute"}
          />

          <img src={banner1} alt="home_banner_img" className="banner_img" />

          <Typography
            variant="h1"
            component="h2"
            position={"absolute"}
            color={"#fff"}
            fontSize={48}
            top={" 28%"}
            left={"19%"}
            fontFamily={"Syne"}
          >
            THE SPACE IS WAITING FOR
          </Typography>
          <Typography
            variant="h1"
            component="h2"
            position={"absolute"}
            color={"#fff"}
            fontSize={300}
            top={" 30%"}
            left={"20%"}
            fontFamily={"Syne"}
          >
            YOU
          </Typography>

          <Box
            display={"flex"}
            alignItems={"center"}
            top={" 92%"}
            left={"45%"}
            position={"absolute"}
            sx={{ zIndex: 3 }}
          >
            <Typography
              variant="h1"
              component="h2"
              fontSize={30}
              fontFamily={"Lato"}
              color={"#fff"}
              sx={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => scrollToElement()}
            >
              Explore tours
            </Typography>
            <ArrowDownwardIcon
              color="info"
              sx={{ height: "33px", width: "43px" }}
            />
          </Box>
        </Box>

        <Box height={700} width={"100%"}>
          <Box
            height={700}
            width={"100%"}
            sx={{ backgroundColor: "black" }}
            className="banner_shade"
            position={"absolute"}
          />

          <img src={banner2} alt="home_banner_img" className="banner_img" />
        </Box>
        <Box height={700} width={"100%"}>
          <Box
            height={700}
            width={"100%"}
            sx={{ backgroundColor: "black" }}
            className="banner_shade"
            position={"absolute"}
          />

          <img src={banner3} alt="home_banner_img" className="banner_img" />
        </Box>
      </Carousel>
    </>
  );
};
