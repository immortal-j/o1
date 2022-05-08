import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Menu, Typography } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    color: "#8739f9",
    fontFamily: "Inter",
    fontSize: "30px",
    fontWeight: 800,
    marginLeft: "15px",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  root: {
    flexGrow: 1,
    padding: -1,
  },
  menuSpace1: {
    flexGrow: 0.17,
  },
  menuSpace2: {
    flexGrow: 0.66,
  },
  btn: {
    fontFamily: "Inter,sans-serif",
    // backgroundColor:'#8739f9',
    color: "#8739f9",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 1,
    margin: 8,
    padding: "10px 20px",
    textTransform: "none",
    "&:hover": {
      color: "#FF2442",
      // backgroundColor: '#ad41dc',
    },
  },
  menuitm: {
    fontSize: "18px",
    fontFamily: "Inter",
    fontWeight: 600,
  },
  anchor: {
    textDecoration: "none",
    color: "#8739f9",
    "&:hover": {
      color: "#FF2442",
    },
  },
  desktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  mobile: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar
        style={{ marginTop: 0, backgroundColor: "#f9f3f3" }}
        position="fixed"
        color="#000"
      >
        <Toolbar>
          <div className={classes.menuSpace1}></div>

          <a href="/">
            <img src={"logo2.svg"} height="50px" />
          </a>
          <Typography className={classes.title}>O(1) Coding Club</Typography>
          <div className={classes.menuSpace2}></div>
          <div className={classes.desktop}>
            <Button href="#Landing" className={classes.btn}>
              Home
            </Button>
            <Button href="#Events" className={classes.btn}>
              Events
            </Button>
            <Button href="#Alumni" className={classes.btn}>
              Stories
            </Button>
            <Button href="/coderun" target="__blank" className={classes.btn}>
              CodeRun
            </Button>
            <Button href="/django" target="__blank" className={classes.btn}>
              Django Workshop
            </Button>
          </div>
          <Button
            className={classes.mobile}
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <FontAwesomeIcon
              className={classes.btn}
              icon={faBars}
              size="2x"
              color="#8739f9"
            />
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <Button onClick={handleClose}>
              <FontAwesomeIcon icon={faTimes} size="2x" color="#8739f9" />
            </Button>
            <a className={classes.anchor} href="#Landing">
              <MenuItem className={classes.menuitm} onClick={handleClose}>
                Home
              </MenuItem>
            </a>
            <a className={classes.anchor} href="#Events">
              <MenuItem className={classes.menuitm} onClick={handleClose}>
                Events
              </MenuItem>
            </a>
            <a className={classes.anchor} href="#Alumni">
              <MenuItem className={classes.menuitm} onClick={handleClose}>
                Stories
              </MenuItem>
            </a>
            <a className={classes.anchor} href="/coderun" target="__blank">
              <MenuItem className={classes.menuitm} onClick={handleClose}>
                CodeRun
              </MenuItem>
            </a>
            <a className={classes.anchor} href="/django" target="__blank">
              <MenuItem className={classes.menuitm} onClick={handleClose}>
                Django Workshop
              </MenuItem>
            </a>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
