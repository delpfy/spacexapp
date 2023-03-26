import {
  Box,

  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import Cardx from "./Card/Cardx";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import React, { useRef } from "react";

import card1_img from "../../../img/card1.png";
import card2_img from "../../../img/card2.png";
import card3_img from "../../../img/card3.png";
import Carousel from "react-material-ui-carousel";
import { useQuery } from "@apollo/client";
import { ALL_ITEMS } from "../../../apollo/items";

interface RocketItem {
  id: string;
  description: string;
  name: string;
}

export const Cards = () => {
  const ref = useRef<null | HTMLInputElement>(null);
  const scrollToElement = () => {
    console.log("CLICKED");
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { loading, error, data } = useQuery(ALL_ITEMS);
  if (error) {
    return <Typography variant="h1">{error.message}</Typography>;
  }

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        top={" 92%"}
        left={"43%"}
        position={"absolute"}
        sx={{ zIndex: 3 }}
      >
        <Typography
          variant="h1"
          component="h2"
          fontSize={30}
          color={"#fff"}
          sx={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => {
            scrollToElement();
          }}
        >
          Explore tours
        </Typography>
        <ArrowDownwardIcon
          color="info"
          sx={{ height: "35px", width: "45px" }}
        />
      </Box>

      <Box height={720} width={"100%"}>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Typography
            padding={10}
            paddingBottom={4}
            width={"95.5%"}
            variant="h2"
            component="h2"
            ref={ref}
          >
            Popular tours
          </Typography>
          <Carousel sx={{ width: "100%" }}>
            {data.rockets.map(
              (rocket: RocketItem, index: number, array: RocketItem[]) => {
                const RemainingCards = array.filter(
                  (elem) => elem.name !== rocket.name
                );
                
                return (
                  <Grid
                    container
                    spacing={1}
                    sx={{ padding: 10, paddingTop: 1 }}
                  >
                    <Grid
                      item
                      md={4}
                      sm={6}
                      xs={12}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Cardx
                        image={card1_img}
                        type={"main"}
                        id={
                          RemainingCards[0] === undefined
                            ? rocket.id
                            : RemainingCards[0].id
                        }
                        name={
                          RemainingCards[0] === undefined
                            ? rocket.name
                            : RemainingCards[0].name
                        }
                        description={
                          RemainingCards[0] === undefined
                            ? rocket.description
                            : RemainingCards[0].description
                        }
                      />
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
                      <Cardx
                        image={card2_img}
                        type={"main"}
                        id={
                          RemainingCards[1] === undefined
                            ? rocket.id
                            : RemainingCards[1].id
                        }
                        name={
                          RemainingCards[1] === undefined
                            ? rocket.name
                            : RemainingCards[1].name
                        }
                        description={
                          RemainingCards[1] === undefined
                            ? rocket.description
                            : RemainingCards[1].description
                        }
                      />
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
                      <Cardx
                        image={card3_img}
                        type={"main"}
                        id={
                          RemainingCards[2] === undefined
                            ? rocket.id
                            : RemainingCards[2].id
                        }
                        name={
                          RemainingCards[2] === undefined
                            ? rocket.name
                            : RemainingCards[2].name
                        }
                        description={
                          RemainingCards[2] === undefined
                            ? rocket.description
                            : RemainingCards[2].description
                        }
                      />
                    </Grid>
                  </Grid>
                );
              }
            )}
          </Carousel>
        </Box>
      </Box>
    </>
  );
};
