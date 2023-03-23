import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";

interface CardProps {
  image: string;
}

export default function Cardx(props: CardProps) {
  const [clicked, setClicked] = React.useState<boolean>(false);

  return (
    <Card sx={{ maxWidth: 375, height: 500 }}>
      <CardMedia sx={{ height: 270 }} image={props.image} />
      <Box
        height={230}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign={"center"}
            textTransform={"uppercase"}
          >
            Extraordinary tour
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"center"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
              ":hover": {
                background: "#acd5fa",
              },
            }}
          >
            BUY
          </Button>
          <IconButton onClick={() => setClicked(!clicked)}>
            <FavoriteBorderIcon
              sx={{ height: 35, width: 35 }}
              color={clicked ? "secondary" : "disabled"}
            />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
}
