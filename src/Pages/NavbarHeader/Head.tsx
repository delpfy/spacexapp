import { Box } from "@mui/material";
import React from "react";

import logotype from "../../img/logo.png";
import "./head_elements.css";
export const Head = () => {
  return (
    <>
      <Box
        height={80}
        width={"100%"}
        position={"absolute"}
        sx={{ backgroundColor: "black" }}
        className="head"
      >
        <img src={logotype} alt="header_logotype_img" />

        
      </Box>
    </>
  );
};
