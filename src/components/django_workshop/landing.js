import "./django.css";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./navbar";
import Wave from "./wave";
import Lotie from "./lotie";
import Placedata from "./placeddata";
import { Grid, Typography, Button } from "@material-ui/core";
import Card from "./card";
import YouGet from "./youGet";
import OurTeam from "./OurTeam";
import Footer from "./Footer";
import Arr from "./featuresdata";
import RegisterSteps from "./registerSteps";
import Carousel from "./carousel";
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
    transition: "1s",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
    "&:hover": {
      backgroundImage: "linear-gradient(120deg,#3571a3 50%,#fed142 50%)",
    },
  },
}));
function DjangoLanding() {
  const classes = useStyles();
  return (
    <div>
      <div class="navsection">
        <Navbar />
      </div>

      <section class="section_django">
        <h1 class="lhead white martop-35">Django for All</h1>
        {/* <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/6NKTKU6TWOY"
          title="Coderun"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        /> */}
        {/* <div className="pos1">
          <Lotie />
        </div> */}
        {/* <div className="pos2">
          <Lotie />
        </div> */}
        <p className="phead martop-15 white bold">
          100% &nbsp;FREE &nbsp;EVENT
        </p>
        <br />
        <p className="phead martop-15 white bold">
          Upskill &nbsp;your &nbsp;resume &nbsp; with &nbsp; the&nbsp;
          most&nbsp; trending &nbsp; skill &nbsp; in &nbsp; the &nbsp; industry
        </p>
        <br />

        <p className="phead white ">Date : 11th - 13th November 2022</p>
        {/* <a href="https://t.me/+gLuvqwwQsfY5OTQ1">
          <Button className={classes.btn}>Register for Webinar</Button>
        </a> */}
        <a href="https://chat.whatsapp.com/FoSKjyATS4A9SOs84d00aY">
          <Button className={classes.btn}>Register</Button>
        </a>

        {/* <Wave /> */}
      </section>

      {/* <section class="purplebg section2">
        <Grid container justifyContent="center" spacing={6}>
          <Grid item xs={3} sm={3}>
            <p class="placedhead mar10 pcenter">6</p>
            <p class="placedsub mar10 pcenter">Hours of coding</p>
          </Grid>
          <Grid item xs={3} sm={3}>
            <p class="placedhead mar10 pcenter">400+</p>
            <p class="placedsub mar10 pcenter">Coding Questions</p>
          </Grid>
          <Grid item xs={3} sm={3}>
            <p class="placedhead mar10 pcenter">40+</p>
            <p class="placedsub mar10 pcenter">Coding Tests</p>
          </Grid>
          <Grid item xs={3} sm={3}>
            <p class="placedhead mar10 pcenter">500+</p>
            <p class="placedsub mar10 pcenter">students placed</p>
          </Grid>
        </Grid>
      </section> */}

      <section className="section3" id="features">
        {/* <div class="wave3">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            />
          </svg>
        </div> */}

        <Grid container justifyContent="center" spacing={6}>
          <Grid sm={12}>
            <p class="lhead black mar80">Features</p>
            {/* <Typography class="shead black mar30">
              Designed with an initiative to improve one's coding abilities,
              preparing them not only for high paying off-campus placement
              opportunities but also for coding rounds/interviews of campus
              companies. We assure to take one's coding skills to the next level
              & make you placement-ready.
            </Typography> */}
          </Grid>
          {Arr.map((x, i) => {
            return (
              <Grid key={i} item sm={6}>
                <Card x={x} />
              </Grid>
            );
          })}
        </Grid>
      </section>

      <section className="section4" id="plans">
        <Grid sm={12}>
          <p class="lhead">YOU GET !</p>
        </Grid>

        <Grid sm={12}>
          <YouGet />
        </Grid>
      </section>

      {/* <section className="section4" id="register">
        <p class="lhead">How to Register?</p>
        <RegisterSteps />
      </section> */}

      {/* <section className="section6">
        <Placedata />
      </section> */}

      <section className="section6">
        <OurTeam />
      </section>

      {/* <section className="section5" id="testimonials">
        <div>
          <p
            style={{ fontSize: "40px", fontWeight: "800" }}
            className={classes.mar}
          >
            Success Stories
          </p>
          <Carousel />
        </div>
      </section> */}

      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
}

export default DjangoLanding;
