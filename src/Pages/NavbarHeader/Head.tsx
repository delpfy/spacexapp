import { Box, Button, IconButton } from "@mui/material";
import React from "react";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { useNavigate } from "react-router-dom";

import logotype from "../../img/logo.png";
import "./head_elements.css";

export const Head = () => {
  const [clicked, setClicked] = React.useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <>
      <Box height={80} width={"100%"} position={"absolute"}>
        <Box
          height={"100%"}
          width={"100%"}
          position={"absolute"}
          sx={{ backgroundColor: "black" }}
          className="head_shade"
        />
        <Box position={"absolute"} className="head">
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            height={80}
            paddingLeft={10}
            paddingRight={7}
          >
            <img
              src={logotype}
              alt="header_logotype_img"
              className="head_logotype"
              onClick={() => (navigate("/spacexapp"), setClicked(false))}
            />

            <Box>
              <nav className="head_nav">
                <a className="head_nav_link">Home</a>
                <a className="head_nav_link">Tours</a>
                <a className="head_nav_link">About</a>
                <a className="head_nav_link">Help</a>
              </nav>
            </Box>

            <Box
              display={"flex"}
              flexDirection={"row"}
              width={300}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <IconButton
                onClick={() => (setClicked(!clicked), navigate("/spacexapp/favorites"))}
                disabled={clicked ? true : false}
              >
                <FavoriteTwoToneIcon
                  sx={{ height: 45, width: 45 }}
                  color={clicked ? "secondary" : "info"}
                  
                />
              </IconButton>

              <Button
                variant="contained"
                
                sx={{
                  width: 230,
                  height: 50,
                  background: "#D3EAFF",
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 600,
                  color: "black",
                  ":hover": {
                    background: "#acd5fa",
                  },
                }}
              >
                SIGN IN
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
