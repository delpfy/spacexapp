import { Box, Typography } from '@mui/material'
import Cardx from './Card/Cardx';
import React from 'react'

import card1_img from "../../../img/card1.png";
import card2_img from "../../../img/card2.png";
import card3_img from "../../../img/card3.png";

export const Cards = () => {
  return (
    <>
    
        <Box height={720} width={"100%"}  >
          <Box>
            <Typography padding={10} paddingBottom = {4} variant="h2" component="h2">
              Popular tours
            </Typography>
          <Box padding={10} paddingTop = {1} display={'flex'} flexDirection= {'row'} justifyContent = {'space-between'} alignItems={'center'}>
           <Cardx image = {card1_img}/>
           <Cardx image = {card2_img}/>
           <Cardx image = {card3_img}/>
          </Box>
          </Box>
          
          
        </Box>
    
    </>
  )
}
