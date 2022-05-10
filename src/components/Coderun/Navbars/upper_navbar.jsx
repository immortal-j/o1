import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Menuitem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { delete_cookie } from "sfcookies";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "white",
    padding: "10px",
    background: "#261C2C",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 40,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    background: "#3E2C41",
    padding: "25px",
  },
  title: {
    alignSelf: "flex-end",
    fontSize: "250%",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logo: {
    width: "auto",
    height: "40px",
    marginRight: "20px",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logo1: {
    width: "auto",
    height: "40px",
    marginRight: "20px",
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  space: {
    flexGrow: 1,
  },
  logbtn: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: 600,
    "&:hover": {
      color: "#C400FF",
    },
  },
}));

export default function MenuAppBar(props) {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    delete_cookie("loggedin");
    delete_cookie("uid");
    delete_cookie("conteststatus")
    delete_cookie("div");
    props.handleLogout();
    props.uidnull();
    history.push("/");
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <img src={"Logo_purple.png"} className={classes.logo} />
          <img src={"logo2.svg"} className={classes.logo1} />
          <div className={classes.space}></div>
          <Button className={classes.logbtn} onClick={logout}>
            LOG OUT
          </Button>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <Menuitem onClick={handleClose}>Profile</Menuitem>
            <Menuitem onClick={handleClose}>Logout</Menuitem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
