import { Box, Button, IconButton, ListItem, Toolbar } from "@mui/material";
import React from "react";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

import logotype from "../../img/logo.png";
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import "./head_elements.css";
type Anchor = "top" | "left" | "bottom" | "right";

export const Head = () => {
  const [clicked, setClicked] = React.useState<boolean>(false);
  const [active, setActive] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setActive(open);
    };

  const list = (anchor: Anchor) => (
    <Box
      width={210}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          height: 300,
        }}
      >
        <ListItem sx={{ width: 65, fontSize: 23 }} disablePadding>
          <a className="head_nav_link">Home</a>
        </ListItem>
        <ListItem sx={{ width: 65, fontSize: 23 }} disablePadding>
          <a className="head_nav_link">Tours</a>
        </ListItem>
        <ListItem sx={{ width: 65, fontSize: 23 }} disablePadding>
          <a className="head_nav_link">About</a>
        </ListItem>
        <ListItem sx={{ width: 65, fontSize: 23 }} disablePadding>
          <a className="head_nav_link">Help</a>
        </ListItem>
      </List>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          height: 100,
        }}
      >
        <Button
          variant="contained"
          sx={{
            height: 50,
            width: 200,
            background: "#D3EAFF",
            fontFamily: "Syne, sans-serif",
            fontWeight: 600,
            color: "black",
            ":hover": {
              background: "#acd5fa",
            },
          }}
        >
          SIGN IN
        </Button>
      </List>
    </Box>
  );

  return (
    <>
      <React.Fragment>
        <SwipeableDrawer
          anchor={"right"}
          open={active}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
          
        >
          <Box
            sx={{
              background: "#252933",
              width: "100%",
              height: "100%",
            }}
          >
            {list("right")}
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
      <Box height={80} width={"100%"} position={"absolute"} zIndex={2}>
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
            sx={{
              paddingLeft: {
                xs: 1,
                md: 10,
              },
              paddingRight: {
                xs: 1,
                md: 7,
              },
            }}
            alignItems={"center"}
            height={80}
          >
            <Box
              display={"block"}
              sx={{
                minWidth: 200,
                width: {
                  xs: 200,
                  md: 250,
                  lg: 300,
                },
                height: {
                  xs: 40,
                  md: 50,
                },
              }}
              className="head_logotype"
              onClick={() => (navigate("/spacexapp"), setClicked(false))}
            />

            <Box>
              <Toolbar
                sx={{
                  textTransform: " uppercase",
                  fontSize: 14,
                  justifyContent: "space-between",
                  width: 300,
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                }}
              >
                <a className="head_nav_link">Home</a>
                <a className="head_nav_link">Tours</a>
                <a className="head_nav_link">About</a>
                <a className="head_nav_link">Help</a>
              </Toolbar>
            </Box>

            <Box
              display={"flex"}
              flexDirection={"row"}
              sx={{
                width: {
                  xs: 120,
                  md: 300,
                },
              }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <IconButton
                onClick={() => (
                  setClicked(!clicked), navigate("/spacexapp/favorites")
                )}
                disabled={clicked ? true : false}
              >
                <FavoriteTwoToneIcon
                  sx={{ height: 45, width: 45 }}
                  color={clicked ? "secondary" : "info"}
                />
              </IconButton>

              <IconButton
                size="large"
                edge="start"
                color="info"
                aria-label="menu"
                sx={{
                  display: {
                    xs: "block",
                    md: "none",
                  },
                  height: 68,
                  width: 68,
                }}
                onClick={toggleDrawer("right", true)}
              >
                <MenuIcon sx={{ height: 45, width: 45 }} />
              </IconButton>

              <Button
                variant="contained"
                sx={{
                  height: 50,
                  background: "#D3EAFF",
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 600,
                  color: "black",
                  ":hover": {
                    background: "#acd5fa",
                  },
                  display: {
                    xs: "none",
                    md: "block",
                  },
                  width: {
                    md: 190,
                    lg: 230,
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
