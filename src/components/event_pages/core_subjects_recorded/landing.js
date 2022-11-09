import "../crlan.css";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";

import Navbar from "../navbar";
import Placedata from "../placeddata";
import Card from "../card";
import Footer from "../Footer";
import Carousel from "../carousel";
import RegisterSteps from "../registerSteps";

import IncomeAgreement from "./incomeAgreement";
import OurTeam from "./OurTeam";
import Arr from "./featuresdata";

const useStyles = makeStyles((theme) => ({
  mar: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: "40px",
    },
  },
  btn: {
    fontSize: "20px",
    color: "white",
    fontWeight: "800",
    borderRadius: "10px",
    backgroundColor: "#8739f9",
    padding: "15px",
    marginTop: "25px",
    textDecoration: "none",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
}));

function CoreSubjectsRecLanding() {
  const classes = useStyles();
  return (
    <div>
      <div className="navsection">
        <Navbar title={"Core Subjects"} />
      </div>

      <section className="section1">
        <h1 className="mhead white martop-35">Strengthen your Core Subjects</h1>
        <br />
        <p className="phead martop-15 white">
          Operating System <br />
          Database Management System <br />
          Computer Networks
        </p>
        <br />
        <p className="phead martop-15 white">Within just 15 days</p>
        <a href="#register">
          <Button className={classes.btn}>Register Now</Button>
        </a>
      </section>

      <section className="purplebg section2">
        <Grid container justifyContent="center" spacing={6}>
          <Grid item xs={3} sm={4}>
            <p className="placedhead mar10 pcenter">30+</p>
            <p className="placedsub mar10 pcenter">
              Hours of recorded sessions
            </p>
          </Grid>
          <Grid item xs={3} sm={4}>
            <p className="placedhead mar10 pcenter">25+</p>
            <p className="placedsub mar10 pcenter">Important topics</p>
          </Grid>
          <Grid item xs={3} sm={4}>
            <p className="placedhead mar10 pcenter">500+</p>
            <p className="placedsub mar10 pcenter">students placed</p>
          </Grid>
        </Grid>
      </section>

      <section className="section3" id="features">
        <div className="wave3">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            />
          </svg>
        </div>

        <Grid container justifyContent="center" spacing={6}>
          <Grid sm={12}>
            <p className="lhead black mar80">Features</p>
            <br />
            <Typography className="shead black padlr">
              Considering the very little amount of time left for placements,
              this crash course ensures to strengthen all the listed core
              subjects within just 15 days. All the subjects covered in this
              program are of utmost importance from the placements point of view
              as they are not only asked in interviews but technical section of
              most aptitude tests as well. Mastering these subjects is the key
              to crack placements.
            </Typography>
          </Grid>
          {Arr.map((x, i) => {
            return (
              <Grid key={i} item sm={4}>
                <Card x={x} />
              </Grid>
            );
          })}
        </Grid>
      </section>

      <hr />

      <section className="section4" id="plans">
        <Grid sm={12}>
          <p style={{ fontSize: "60px", fontWeight: "800" }}>Pricing</p>
        </Grid>

        <Grid sm={12}>
          <IncomeAgreement />
        </Grid>
      </section>

      <hr />

      <section className="section6" id="register">
        <p style={{ fontSize: "60px", fontWeight: "800" }}>How to Register?</p>
        <RegisterSteps
          googleForm={
            "https://docs.google.com/forms/d/e/1FAIpQLSefeoMFEB8EfKMSxNwnYrZLkVXc8sUvTSThLS6ydtmSJMGRRA/viewform"
          }
        />
      </section>

      <hr />

      <section className="section6">
        <Placedata />
      </section>

      <hr />

      <section className="section6">
        <OurTeam />
      </section>

      <section className="section5" id="testimonials">
        <div>
          <p
            style={{ fontSize: "40px", fontWeight: "800" }}
            className={classes.mar}
          >
            Success Stories
          </p>
          <br />
          <Carousel />
        </div>
      </section>

      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
}

export default CoreSubjectsRecLanding;