import { Box, Typography } from "@mui/material";
import React from "react";

export const NotFound = () => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100%"}
        width={"100%"}
        position={"fixed"}
      >
        <Typography variant="h1" component="h2">
          Not Found :(
        </Typography>
      </Box>
    </>
  );
};
