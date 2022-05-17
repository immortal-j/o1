import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid, Avatar } from "@material-ui/core";
import Lottie from "./lottie";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    color: "#8739f9",
    fontFamily: "Inter",
    fontSize: "52px",
    fontWeight: 800,
    marginTop: 90,
  },
  subtitle: {
    textAlign: "center",
    color: "#333",
    fontFamily: "Inter",
    fontSize: "20px",
    fontWeight: 400,
    marginTop: 7,
  },
  aboutus: {
    textAlign: "center",
    color: "#000",
    fontFamily: "Inter",
    fontSize: "44px",
    fontWeight: 800,
    marginTop: -80,
  },
  aboutdesc: {
    textAlign: "center",
    color: "#333",
    fontFamily: "Inter",
    fontSize: "20px",
    fontWeight: 400,
    marginRight: "7vw",
    marginLeft: "10vw",
    [theme.breakpoints.up("md")]: {
      marginRight: "30vw",
      marginLeft: "30vw",
    },
  },
  ftiles: {
    backgroundColor: "#8739f9",
    width: theme.spacing(8),
    height: theme.spacing(8),
    // marginLeft:'33vw',
    // [theme.breakpoints.up('md')]: {
    //   marginLeft:"14vw",
    // },
  },
  ftitle: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "24px",
    fontWeight: 800,
  },
  fdesc: {
    color: "#333",
    fontFamily: "Inter",
    fontSize: "18px",
    fontWeight: 400,
    textAlign: "center",
  },
  hr: {
    width: "75%",
  },
}));

function Landing() {
  const classes = useStyles();
  return (
    <div>
      <section id="Landing" style={{ marginTop: "5%", marginBottom: "5%" }}>
        <Box>
          <Typography className={classes.title}>O(1) Coding Club</Typography>
          <Typography className={classes.subtitle}>
            Closer to your AMBITIONS, <br />a step at a time.
          </Typography>
          <Lottie />
          <Typography className={classes.aboutus}>About Us</Typography>
          <Box>
            <Typography className={classes.aboutdesc}>
              Not just a coding school, but a complete placement ecosystem with
              strong emphasis on high quality placement training & support, not
              only equipping you with relevant job market skills but providing
              every help to land your dream job.
            </Typography>
          </Box>
        </Box>

        <Box m={5}>
          <Grid container justifyContent="center" spacing={5}>
            <Grid item xs={12} sm={5} container justifyContent="center">
              <Grid item container sm={12} justifyContent="center">
                <Avatar className={classes.ftiles}>
                  <img src={"f1.svg"}></img>
                </Avatar>
              </Grid>
              <Typography className={classes.ftitle}>
                Beginner Friendly
              </Typography>
              <Grid item container sm={12} justifyContent="center">
                <Typography className={classes.fdesc}>
                  Our programs are tailor made and are beginner friendly. We
                  want all to prosper and none to be left behind.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={5} container justifyContent="center">
              <Grid item container sm={12} justifyContent="center">
                <Avatar className={classes.ftiles}>
                  <img src={"f2.svg"}></img>
                </Avatar>
              </Grid>
              <Typography className={classes.ftitle}>Hands On</Typography>
              <Grid item container sm={12} justifyContent="center">
                <Typography className={classes.fdesc}>
                  Create from your learning. We focus on hands on. We believe
                  practical knowledge is as important as conceptual knowledge.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={5} container justifyContent="center">
              <Grid item container sm={12} justifyContent="center">
                <Avatar className={classes.ftiles}>
                  <img src={"f3.svg"}></img>
                </Avatar>
              </Grid>
              <Typography className={classes.ftitle}>Keep it Simple</Typography>
              <Grid item container sm={12} justifyContent="center">
                <Typography className={classes.fdesc}>
                  We believe in simplicity. Learning can be very simple if you
                  have the right approach. Keep simple, learn more.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={5} container justifyContent="center">
              <Grid item container sm={12} justifyContent="center">
                <Avatar className={classes.ftiles}>
                  <img src={"f4.svg"}></img>
                </Avatar>
              </Grid>
              <Typography className={classes.ftitle}>
                Domain Specialists
              </Typography>
              <Grid item container sm={12} justifyContent="center">
                <Typography className={classes.fdesc}>
                  We got experts in each domain to make your learning smooth and
                  get you equipped with the right skills, the right way.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </section>

      <hr className={classes.hr} />

      <section
        className="purplebg"
        style={{ marginBottom: "2%", marginTop: "2%", color: "white" }}
      >
        <Grid container justifyContent="center" spacing={6}>
          <Grid item xs={6} sm={3}>
            <p className="placedhead mar10 pcenter">100%</p>
            <p className="placedsub mar10 pcenter">Placements</p>
          </Grid>
          <Grid item xs={6} sm={3}>
            <p className="placedhead mar10 pcenter">50+</p>
            <p className="placedsub mar10 pcenter">Dream Companies Cracked</p>
          </Grid>
          <Grid item xs={6} sm={3}>
            <p className="placedhead mar10 pcenter">50+</p>
            <p className="placedsub mar10 pcenter">Placed in Amazon</p>
          </Grid>
          <Grid item xs={6} sm={3}>
            <p className="placedhead mar10 pcenter">500+</p>
            <p className="placedsub mar10 pcenter">students placed</p>
          </Grid>
        </Grid>
      </section>

      <hr className={classes.hr} />
    </div>
  );
}
export default Landing;
