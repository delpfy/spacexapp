import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import banner from "../../../img/banner_fav.png";

export const Banner = () => {
  return (
    <>
      <Box height={500}>
        <Box
          height={500}
          width={"100%"}
          className="banner_fav"
          position={"absolute"}
        />
        <Box
          height={500}
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box className="banner_content">
            <Typography
              variant="h1"
              component="h2"
              color={"#fff"}
              fontSize={63}
              paddingTop={23}
              fontFamily={"Syne"}
            >
              FAVORITES
            </Typography>
            
          </Box>

          
         
        </Box>
      </Box>
    </>
  );
};
