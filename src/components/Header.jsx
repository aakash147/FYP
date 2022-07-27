import React from "react";
import Container from "@mui/material/Container";
import Hidden from "@mui/material/Hidden";
import useMediaQuery from "@mui/material/useMediaQuery";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { makeStyles } from "@mui/styles";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import clsx from "clsx";
import { Paper, Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const useStyles = makeStyles({
  list: {
    width: 250,
  },

  paper: {
    background: "#FFFFFF !important",
  },
});

export default function Header() {
  const { totalItems } = useCart();

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const matches = useMediaQuery("(max-width:550px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Box mt={7} mb={5} display="flex" justifyContent="center">
          <img src="/logo.png" alt="Logo" width="160px" height="65px" />
        </Box>
      </Link>
      <List>
        <ListItem button>
          <Link to="/soft-room" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                textAlign: "center",
                cursor: "pointer",
                color: "#000000",
              }}
            >
              Soft-Room
            </Typography>
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/t-shirts" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                textAlign: "center",
                cursor: "pointer",
                color: "#000000",
              }}
            >
              T-shirts
            </Typography>
          </Link>
        </ListItem>

        <ListItem button>
          <Link to="/polo-shirts" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                textAlign: "center",
                cursor: "pointer",
                color: "#000000",
              }}
            >
              Polo
            </Typography>
          </Link>
        </ListItem>
        <Box mt={2} textAlign="center">
          <Link to="/registeration" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "#ffffff",
                background: "#D01345",
                fontSize: "16px",
                textTransform: "capitalize",
                width: "180px",
                paddingY: "10px",
                "&:hover": {
                  background: "#D01345a1",
                },
              }}
            >
              Sign up
            </Button>
          </Link>
        </Box>
      </List>
    </div>
  );
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
          background: "transparent",
          zIndex: 100,
        }}
        py={0.5}
        width="100%"
      >
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={4}>
              <Box height="100%">
                <Box display="flex" alignItems="center">
                  <Hidden mdDown>
                    <Link to="/soft-room" style={{ textDecoration: "none" }}>
                      <Box
                        mr={5}
                        fontSize="18px"
                        sx={{
                          textDecoration: "none",
                          cursor: "pointer",
                          color: "#000000",
                          "&:hover": {
                            color: "#D01345",
                          },
                        }}
                      >
                        Soft-Room
                      </Box>
                    </Link>
                    <Link to="/t-shirts" style={{ textDecoration: "none" }}>
                      <Box
                        mr={5}
                        fontSize="18px"
                        sx={{
                          textDecoration: "none",
                          cursor: "pointer",
                          color: "#000000",
                          "&:hover": {
                            color: "#D01345",
                          },
                        }}
                      >
                        T-Shirts
                      </Box>
                    </Link>

                    <Link to="/polo-shirts" style={{ textDecoration: "none" }}>
                      <Box
                        fontSize="18px"
                        sx={{
                          textDecoration: "none",
                          cursor: "pointer",
                          color: "#000000",
                          "&:hover": {
                            color: "#D01345",
                          },
                        }}
                      >
                        Polo
                      </Box>
                    </Link>
                  </Hidden>
                </Box>

                <Hidden mdUp>
                  {["left"].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Button
                        disableRipple={true}
                        onClick={toggleDrawer(anchor, true)}
                        style={{ zIndex: 1 }}
                      >
                        <MenuOpenIcon
                          style={{
                            fontSize: "38px",
                            cursor: "pointer",
                            color: "#000000",
                          }}
                        ></MenuOpenIcon>
                      </Button>
                      <Paper style={{ background: "#ffffff" }}>
                        <SwipeableDrawer
                          classes={{ paper: classes.paper }}
                          anchor={anchor}
                          open={state[anchor]}
                          onClose={toggleDrawer(anchor, false)}
                          onOpen={toggleDrawer(anchor, true)}
                        >
                          {list(anchor)}
                        </SwipeableDrawer>
                      </Paper>
                    </React.Fragment>
                  ))}
                </Hidden>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Box height="100%" textAlign={{ xs: "left", md: "center" }}>
                  <img
                    src="/logo.png"
                    alt="Logo"
                    width={matches ? "115%" : "230px"}
                    // height={matches ? "60px" : "75px"}
                  />
                </Box>
              </Link>
            </Grid>

            <Grid item xs={4}>
              <Box height="100%" textAlign="right" position="relative">
                <Hidden smDown>
                  <Link to="/registeration" style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        color: "#ffffff",
                        background: "#D01345",
                        fontSize: "16px",
                        textTransform: "capitalize",
                        width: "100px",
                        paddingY: "5px",
                        marginRight: "15px",
                        verticalAlign: "7px",
                        "&:hover": {
                          background: "#D01345a1",
                        },
                      }}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </Hidden>

                <Link to="/shopping-cart" style={{ textDecoration: "none" }}>
                  <LocalMallOutlinedIcon
                    style={{ color: "#D01345", cursor: "pointer" }}
                  />
                </Link>
                <Typography
                  sx={{
                    position: "absolute",
                    right: "-5px",
                    top: { xs: "-10px", sm: "-4px" },
                    fontSize: "12px",
                    color: "#ffffff",
                    background: "#000000",
                    px: "6px",
                    py: "1px",
                    width: "fit-content",
                    borderRadius: "50%",
                  }}
                >
                  {totalItems}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
