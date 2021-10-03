import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0.05,
    fontWeight: 400,
    fontSize: "25px",
  },
  username: {
    flexGrow: 0.7,
  },
  btn: {
    color: "black",
  },
  abar: {
    backgroundColor: "#fff",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const handledash = (value) => {
    history.push(value);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.abar}>
        <Toolbar>
          <div className={classes.title}></div>
          <Button
            color="inherit"
            onClick={() => {
              handledash("/home");
            }}
            className={classes.btn}
          >
            Dashboard
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              handledash("/practice");
            }}
            className={classes.btn}
          >
            Practice
          </Button>
          <div className={classes.username}></div>
          {/* <Typography className={classes.title}>
              Hello Username!!!!!
            </Typography> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
