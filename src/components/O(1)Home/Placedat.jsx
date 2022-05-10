import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { ResponsiveImage, ResponsiveImageSize } from "react-responsive-image";
const useStyles = makeStyles((theme) => ({
  center: {
    textAlign: "center",
    color: "#000",
    fontFamily: "Inter",
    fontSize: "35px",
    fontWeight: 800,
  },
  title: {
    width: 60,
    [theme.breakpoints.up("sm")]: {
      width: 125,
    },
    allphotos: {
      marginLeft: -10,
      [theme.breakpoints.up("sm")]: {
        MarginLeft: -15,
      },
    },
  },
}));

export default function Placedat() {
  const classes = useStyles();
  return (
    <div>
      <br />
      <br />
      <Box m={2} p={1}>
        <h1 className={classes.center}>Our students are placed at</h1>
        <br />
        <br />
        <Grid
          container
          className={classes.allphotos}
          justifyContent="center"
          spacing={3}
        >
          <Grid container item xs={4} md={2} justifyContent="center">
            <img src={"amazon-2.svg"} className={classes.title} height="100" />
          </Grid>
          <Grid container item xs={4} md={2} justifyContent="center">
            <img src={"vmware.svg"} className={classes.title} height="100" />
          </Grid>
          <Grid container item xs={4} md={2} justifyContent="center">
            <img
              src={"bny-mellon.svg"}
              className={classes.title}
              height="100"
            />
          </Grid>
          <Grid container item xs={4} md={2} justifyContent="center">
            <img src={"he.svg"} className={classes.title} height="50" />
          </Grid>
          <Grid container item xs={4} md={2} justifyContent="center">
            <img src={"fivetran.svg"} className={classes.title} height="100" />
          </Grid>
          <Grid container item xs={4} md={2} justifyContent="center">
            <img src={"ps.svg"} className={classes.title} height="100" />
          </Grid>
          <Grid container item xs={4} md={2} justifyContent="center">
            <img src={"ori_sahaj.jpg"} className={classes.title} height="100" />
          </Grid>
          <Grid container item xs={4} md={2} justifyContent="center">
            <img
              src={"ori_principal_global.png"}
              className={classes.title}
              height="100"
            />
          </Grid>
          <Grid container item xs={4} md={2} justifyContent="center">
            <img src={"tcs.svg"} className={classes.title} height="100" />
          </Grid>
          <Grid container item xs={4} md={2} justifyContent="center">
            <img src={"info.svg"} className={classes.title} height="100" />
          </Grid>
          <Grid container item xs={4} md={2} justifyContent="center">
            <img src={"lti.svg"} className={classes.title} height="100" />
          </Grid>
          <Grid container item xs={4} md={2} justifyContent="center">
            <img src={"cg.svg"} className={classes.title} height="100" />
          </Grid>
          <Grid container item xs={4} md={2} justifyContent="center">
            <img src={"cog.svg"} className={classes.title} height="100" />
          </Grid>
          <Grid container item xs={4} md={2} justifyContent="center">
            <img src={"Ac.PNG"} className={classes.title} height="60" />
          </Grid>
        </Grid>
      </Box>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
