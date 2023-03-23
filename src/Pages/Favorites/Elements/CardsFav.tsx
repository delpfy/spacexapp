import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Cardx from "../../Home/Elements/Card/Cardx";

import card1_img from "../../../img/card1.png";
import card2_img from "../../../img/card2.png";
import card3_img from "../../../img/card3.png";

export const Cards = () => {
  return (
    <>
      <Box height={700} width={"100%"}>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Grid container spacing={1} sx={{ padding: 10, paddingTop: 10 }}>
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
