import "../crlan.css";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";

import Navbar from "../navbar";
import Placedata from "../placeddata";
import Card from "../card";
import Footer from "../Footer";
import Carousel from "../carousel";
import Webinar from "../webinar";
import Combo from "../combo";

import IncomeAgreement from "./incomeAgreement";
import OurTeam from "./OurTeam";
import Arr from "./featuresdata";
import RegisterSteps from "./registerSteps";

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

function OfflineCoursesLanding() {
  const classes = useStyles();
  return (
    <div>
      <div className="navsection">
        <Navbar title={"Programming Course"} />
      </div>

      <section className="section1">
        <h1 className="mhead white martop-35">Catalysing Dreams And Beyond</h1>
        <br />
        <p className="phead martop-15 white">
          Get trained by Experts with <br />
          our highly rated training program
        </p>
        <br />
        <p className="phead white ">Next Batch : August</p>
        {/* <a href="https://t.me/+gLuvqwwQsfY5OTQ1">
          <Button className={classes.btn}>Register for Webinar</Button>
        </a> */}
        <a href="#register">
          <Button className={classes.btn}>Register Now</Button>
        </a>
      </section>

      <section className="purplebg section2">
        <Grid container justifyContent="center" spacing={6}>
          <Grid item xs={6} sm={3}>
            <p className="placedhead mar10 pcenter">45+</p>
            <p className="placedsub mar10 pcenter">Hours of offline sessions</p>
          </Grid>
          <Grid item xs={6} sm={3}>
            <p className="placedhead mar10 pcenter">10+</p>
            <p className="placedsub mar10 pcenter">Programming Assignments</p>
          </Grid>
          <Grid item xs={6} sm={3}>
            <p className="placedhead mar10 pcenter">15+</p>
            <p className="placedsub mar10 pcenter">Important Concepts</p>
          </Grid>
          <Grid item xs={6} sm={3}>
            <p className="placedhead mar10 pcenter">500+</p>
            <p className="placedsub mar10 pcenter">Students Placed </p>
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
            <Typography className="shead black mar30"></Typography>
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
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: "600",
              margin: "50px",
              marginTop: "-35px",
            }}
          >
            {/* Register fast to get our course at a flat{" "}
            <font color="red"> 50% </font> discount */}
          </Typography>
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
            "https://docs.google.com/forms/d/e/1FAIpQLSfDqkv--n0gaKm0QkuK1OrKcRQlB_gXkPgqbECmeJyHTEzJBQ/viewform?usp=sf_link"
          }
        />
      </section>

      <hr />

      <section className="section6">
        <Placedata />
      </section>

      <hr />

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

export default OfflineCoursesLanding;
