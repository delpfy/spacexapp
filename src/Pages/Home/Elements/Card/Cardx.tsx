import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useRecoilState} from 'recoil';
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import { favoriteItems } from "../../../../recoil/favoritesAtom";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";

interface CardProps {
  image: string;
  type: string;
  id: string;
  name: string;
  description: string
}



export default function Cardx({id, name, description, image, type}: CardProps) {
  const [clicked, setClicked] = React.useState<boolean>(false);

  const [favs, setFavs] = useRecoilState(favoriteItems);
  const favoritesId = useRecoilValue(favoriteItems);
  useEffect(() => {
    favoritesId.map((fav) =>{
      if(fav.id === id){
        console.log("eqation " + (fav.id === id));
        return setClicked(true);
  
      }
    })
  }, [])
  
  const handleClick = () =>{
    
    setClicked(!clicked)
    type === "fav" 
    ? 
    setFavs(favs.filter(elem => elem.id !== id))
    :
    !clicked ? setFavs([...favs,{id, name, description, image}]) : setFavs(favs.filter(elem => elem.id !== id)) ;
    
    console.log("FAVS " + favs);
    
  }

  return (
    <Card sx={{ maxWidth: 375, minWidth: 345, height: 550 }}>
      <CardMedia sx={{ height: 270 }} image={image} />
      <Box
        height={230}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        minHeight={270}
        maxHeight={270}
        alignItems={"center"}
      >
        <CardContent
        sx = {{paddingTop: "5%"}}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign={"center"}
            textTransform={"uppercase"}
            fontFamily={'Syne'}
            fontWeight={700}
            fontSize={18}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"center"}
            fontFamily={'Lato'}
            fontWeight={300}
            fontSize={15}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            sx={{
              width: 230,
              height: 50,
              background: "#D3EAFF",
              color: "black",
              fontFamily: 'Syne, sans-serif',
                  fontWeight: 600,
              ":hover": {
                background: "#acd5fa",
              },
            }}
          >
            BUY
          </Button>
          <IconButton onClick={() => handleClick()}>
            {type === "main" ? 
             (
              <FavoriteBorderIcon
              sx={{ height: 35, width: 35 }}
              color={clicked ? "secondary" : "disabled"}
            />
            ) 
            :
            (
              <DeleteForeverIcon
              sx={{ height: 35, width: 35 }}
              color={clicked ? "secondary" : "disabled"}
            />
            ) 
            }
            
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
}
