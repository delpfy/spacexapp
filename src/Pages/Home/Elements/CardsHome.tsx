import { Box, Grid, Typography } from "@mui/material";
import Cardx from "./Card/Cardx";
import React from "react";

import card1_img from "../../../img/card1.png";
import card2_img from "../../../img/card2.png";
import card3_img from "../../../img/card3.png";

export const Cards = () => {
  return (
    <>
      <Box height={720} width={"100%"}>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Typography
            padding={10}
            paddingBottom={4}
            width={"95.5%"}
            variant="h2"
            component="h2"
          >
            Popular tours
          </Typography>

          <Grid container spacing={1} sx={{ padding: 10, paddingTop: 1 }}>
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Cardx image={card1_img} />
            </Grid>
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Cardx image={card2_img} />
            </Grid>
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Cardx image={card3_img} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
