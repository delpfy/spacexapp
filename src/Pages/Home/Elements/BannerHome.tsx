import { Box, Typography, styled } from "@mui/material";
import React, { useRef } from "react";

import "./home_elems.css";
import Carousel from "react-material-ui-carousel";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Banner = () => {
  const currentRef = useRef<HTMLInputElement>(null);

  const scrollToElement = () => {
    currentRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const Scroll = () => {
    return (
      <>
        <Box
          display={"flex"}
          alignItems={"center"}
          top={" 92%"}
          left={"45%"}
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
      </>
    );
  };

 
  return (
    <>
      <div ref={currentRef} style={{ position: "absolute", bottom: "0" }}></div>
      <Carousel sx={{ width: "100%" }} height={700}>
        <Box height={700}>
          <Box
            height={700}
            width={"100%"}
            className="banner_img1"
            position={"absolute"}
          />
          <Box
            height={700}
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              className="banner_content"
              height={400}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              
              <Typography
                variant="h1"
                component="h2"
                color={"#fff"}
                fontSize={48}
                paddingTop={20}
                sx={{
                  fontSize:{
                    xs: 15.5,
                    sm: 26,
                    md: 38,
                    lg : 48
                  }
                }}
                
                fontFamily={"Syne"}
              >
                THE SPACE IS WAITING FOR
              </Typography>
              <Typography
                variant="h3"
                component="h3"
                color={"#fff"}
                
                sx={{
                  fontSize:{
                    xs: 99.5,
                    sm: 165,
                    md: 240,
                    lg : 300
                  }
                }}
                
                fontFamily={"Syne"}
              >
                YOU
              </Typography>

              
            </Box>
            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={'center'}
                width={220}
                paddingTop={22}
                className="banner_content"
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
        </Box>

        <Box height={700}>
          <Box
            height={700}
            width={"100%"}
            className="banner_img2"
            position={"absolute"}
          />
          
            
        </Box>
        <Box height={700}>
          <Box
            height={700}
            width={"100%"}
            className="banner_img3"
            position={"absolute"}
          />
          
            
        </Box>
        
        
      </Carousel>
    </>
  );
};
