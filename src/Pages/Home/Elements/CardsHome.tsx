import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import Cardx from "./Card/Cardx";

import React from "react";

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
  const { loading, error, data } = useQuery(ALL_ITEMS);
  if (error) {
    return <Typography variant="h1">{error.message}</Typography>;
  }

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <>
      <Box height={820} width={"100%"}>
        {/* <Box
        display={"flex"}
        alignItems={"center"}
        
        left={"43%"}
        position={"absolute"}
        sx={{ zIndex: 3 }}
      >
        <Typography
          variant="h1"
          component="h2"
          fontSize={30}
          fontFamily={'Lato'}
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
          sx={{ height: "33px", width: "43px" }}
        />
      </Box> */}
        <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
          <Box
          padding={10}
          paddingBottom={4}
         
          sx = {{
            paddingLeft: {
              xs :'9%',
              md : '7%',
            }
          }}
          width={'100%'}
          
          >
          <Typography
            
            
            variant="h2"
            component="h2"
            fontFamily={"Syne"}
            sx = {{
              fontSize: {
                xs : 21,
                md : 36,
              }
            }}
            
            
          >
            POPULAR TOURS
          </Typography>
          </Box>
          

          <Carousel sx={{ width: "100%" }}>
            {data.rockets.map(
              (rocket: RocketItem, index: number, array: RocketItem[]) => {
                const RemainingCards = array.filter(
                  (elem) => elem.name !== rocket.name
                );

                return (
                  <Grid
                    container
                    
                    sx={{ padding: 10, paddingTop: 1 }}
                    spacing={{ xs: 1, sm: 4, md: 4, lg: 4, xl: 4  }}
          columns={{ xs: 2, sm: 4, md: 8, lg: 12, xl: 12 }}
                  >
                    <Grid
                      item
                      xs={2}
                sm={4}
                md={4}
                lg={4}
                xl={4}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      padding={0}
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
                      xs={2}
                sm={4}
                md={4}
                lg={4}
                xl={4}
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
                      xs={2}
                      sm={4}
                       md={4}
                      lg={4}
                      xl={4}
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
