import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mar: {
    marginTop: "2%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mar2: {
    marginTop: "6%",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  imgBig: {
    width: "80%",
  },
  imgSmall: {
    width: "85%",
  },
}));

export default function Combo() {
  const classes = useStyles();

  return (
    <div onClick={() => window.open("combo", "_blank")}>
      <div className={classes.mar}>
        <img src="banner.png" className={classes.imgBig} />
      </div>

      <div className={classes.mar2}>
        <img src="combo_mid.png" className={classes.imgSmall} />
        <img src="combo_left.png" className={classes.imgSmall} />
        <img src="combo_right.png" className={classes.imgSmall} />
      </div>
    </div>
  );
}
