import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import React from 'react'

export const ScrollerDown = () => {
  
  return (
    <Box
    display={'flex'}
    alignItems = {'center'}
    top={" 92%"}
    left={"43%"}
    position = {'absolute'}
    sx = {{zIndex: 3}}

    >
        <Typography
          variant="h1"
          component="h2"
          fontSize={30}
          color={"#fff"}
          sx = {{textDecoration: 'underline', cursor: 'pointer'}}
          
        >
          Explore tours
        </Typography>
       <ArrowDownwardIcon 
       color='info'
       sx = {{height: '35px', width: '45px'}}

       />
    </Box>
    
  )
}
