import React from "react";
import { Box, Typography, Grid, makeStyles, Button } from "@material-ui/core";

import TrophyMake from "./TrophyMake";
import InternshipMake from "./InternshipMake";
import BootcampMake from "./BootcampMake";
import AptiMake from "./AptiMake";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    color: "#000",
    fontFamily: "Inter",
    fontSize: "35px",
    fontWeight: 800,
  },
  ncroot: {
    maxWidth: 450,
  },
  hname: {
    fontSize: 25,
    // marginLeft: -20,
  },
  coursecontainer: {
    maxWidth: 350,
    [theme.breakpoints.up("sm")]: {
      maxWidth: 600,
    },
  },
  course: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)",
    display: "flex",
    minHeight: 200,
    minWidth: 350,
    margin: "2%",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      minHeight: 400,
    },
  },
  coursepreview: {
    backgroundColor: "#2A265F",
    color: "#fff",
    padding: "30px",
    minWidth: "150px",
    minHeight: "300px",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      minWidth: "100px",
    },
  },
  courseinfo: {
    padding: "30px",
    position: "relative",
    width: "100%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {},
  },
  desfont: {
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
    },
  },
  btn: {
    borderRadius: 25,
    fontSize: 9,
    [theme.breakpoints.up("sm")]: {
      fontSize: 12,
    },
  },
  dlgtitle: {
    backgroundColor: "#000",
    flex: 1,
    textAlign: "center",
    color: "#fff",
    fontSize: "35px",
    marginBottom: "2px",
    fontFamily: "Roboto,sans-serif",
    fontWeight: 600,
  },
  dlgcontent: {
    margin: "15px 8px 8px 8px",
    fontFamily: "Roboto,sans-serif",
    fontSize: "25px",
  },
  dlg: {},
}));

function OurEvents() {
  const classes = useStyles();

  return (
    <section id="Events">
      <div>
        <Box m={10}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item container xs={12} justifyContent="center">
              <Typography className={classes.title}>Our Events</Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              justifyContent="center"
              spacing={0}
            >
              <Grid item container xs={12} sm={6} justifyContent="center">
                <div>
                  <div className={classes.coursecontainer}>
                    <div className={classes.course}>
                      <div className={classes.coursepreview}>
                        <Typography className={classes.hname}>
                          Aptitude Series
                        </Typography>
                        <div>
                          <br />
                          <AptiMake />
                        </div>
                      </div>
                      <div className={classes.courseinfo}>
                        <Typography className={classes.desfont}>
                          <p style={{ color: "red", fontWeight: "bold" }}>
                            Afraid of aptitude tests?
                          </p>
                          Our test series offers company specific tests designed
                          by experts, consisting of all previous years questions
                          with the latest test format.
                        </Typography>
                        <br />
                        <a href="/aptitude">
                          <Button
                            className={classes.btn}
                            variant="contained"
                            color="secondary"
                          >
                            Details
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item container xs={12} sm={6} justifyContent="center">
                <div>
                  <div className={classes.coursecontainer}>
                    <div className={classes.course}>
                      <div className={classes.coursepreview}>
                        <Typography className={classes.hname}>
                          Python Bootcamp
                        </Typography>
                        <div>
                          <br />
                          <TrophyMake />
                          <br />
                        </div>
                      </div>
                      <div className={classes.courseinfo}>
                        <Typography className={classes.desfont}>
                          <p style={{ color: "red", fontWeight: "bold" }}>
                            Not confident about coding?
                          </p>
                          Start Learning Python with us. Get trained by Industry
                          Experts with our highly rated training program. This
                          bootcamp is for beginners in coding wanting to grab
                          high paying IT jobs
                        </Typography>
                        <br />
                        <a href="/python-bootcamp">
                          <Button
                            className={classes.btn}
                            variant="contained"
                            color="secondary"
                          >
                            Details
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item container xs={12} sm={6} justifyContent="center">
                <div>
                  <div className={classes.coursecontainer}>
                    <div className={classes.course}>
                      <div className={classes.coursepreview}>
                        <Typography className={classes.hname}>
                          The Complete SDE Bootcamp
                        </Typography>
                        <div>
                          <br />
                          <InternshipMake />
                        </div>
                      </div>
                      <div className={classes.courseinfo}>
                        <Typography className={classes.desfont}>
                          <p style={{ color: "red", fontWeight: "bold" }}>
                            Stuck on DSA?
                          </p>
                          DSA & Problem Solving is the most important skill when
                          it comes to placements in the IT industry. Master it
                          in just 45 days and get even closer to your Super
                          Dream Placement.
                        </Typography>
                        <br />
                        <a href="/sde-bootcamp">
                          <Button
                            className={classes.btn}
                            variant="contained"
                            color="secondary"
                          >
                            Details
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item container xs={12} sm={6} justifyContent="center">
                <div>
                  <div className={classes.coursecontainer}>
                    <div className={classes.course}>
                      <div className={classes.coursepreview}>
                        <Typography className={classes.hname}>
                          Core Subjects Crash Course
                        </Typography>
                        <div>
                          <br />
                          <BootcampMake />
                        </div>
                      </div>
                      <div className={classes.courseinfo}>
                        <Typography className={classes.desfont}>
                          <p style={{ color: "red", fontWeight: "bold" }}>
                            Placements starting soon?
                          </p>
                          Strengthen all your core subjects within just 15 days
                          with the help of our Superdream placed experts & be
                          ready to ace through placements
                        </Typography>
                        <br />
                        <a href="/core-subjects">
                          <Button
                            className={classes.btn}
                            variant="contained"
                            color="secondary"
                          >
                            Details
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
      <hr className={classes.hr} />
    </section>
  );
}

export default OurEvents;
