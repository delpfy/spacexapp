import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import React from "react";
import Cardx from "../../Home/Elements/Card/Cardx";

import card1_img from "../../../img/card1.png";
import card2_img from "../../../img/card2.png";
import card3_img from "../../../img/card3.png";
import { useQuery } from "@apollo/client";
import { ALL_ITEMS } from "../../../apollo/items";
import { favoriteItems } from "../../../recoil/favoritesAtom";
import { useRecoilValue } from "recoil";
interface RocketItem {
  id: string;
  description: string;
  name: string;
}

export const Cards = () => {
  const { loading, error, data } = useQuery(ALL_ITEMS);
  const favoritesId = useRecoilValue(favoriteItems);
  if (error) {
    return <Typography variant="h1">{error.message}</Typography>;
  }

  if (loading) {
    return <LinearProgress />;
  }
  return (
    <>
      <Box height={700} width={"100%"}>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Grid container spacing={1} sx={{ padding: 10, paddingTop: 10 }}>
            {favoritesId.map((fav) => {
              return (
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
                    image={fav.image}
                    type={"fav"}
                    id={fav.id}
                    name={fav.name}
                    description={fav.description}
                  />
                </Grid>
              );
            })}
          </Grid>

          {/* {
            
          favoritesId.map(id => {
            return({
              data.rockets.map(
                (rocket: RocketItem, index: number, array: RocketItem[])=>{
                  console.log(rocket.id)
                  if (rocket.id === id ){
                    return(
                    
                      <Cardx
                        image={card1_img}
                        type={"main"}
                        id={rocket.id}
                        name={rocket.name }
                        description={rocket.description}
                      />
                    
                  
                     )
                  }
                  else{
                    return null;
                  }
            })
          })
        } */}
        </Box>
      </Box>
    </>
  );
};
