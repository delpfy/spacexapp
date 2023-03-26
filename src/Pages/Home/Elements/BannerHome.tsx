import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";
import Switcher from "./Switcher/Switcher";

import banner1 from "../../../img/banner_home.png";
import banner2 from "../../../img/card2.png";
import banner3 from "../../../img/card3.png";
import "./home_elems.css";
import Carousel from "react-material-ui-carousel";



export const Banner = () => {
  

  return (
    <>
    <Carousel 
    sx={{ width: "100%" }}
    
    >
          
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
          left={"14%"}
          
          fontFamily={'Syne'}
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
          left={"15%"}
          

          fontFamily={'Syne'}
        >
          YOU
        </Typography>
        


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
