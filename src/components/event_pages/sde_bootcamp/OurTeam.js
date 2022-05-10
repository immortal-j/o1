import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Grid, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  photo: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    margin: "auto",
  },
  name: {
    fontSize: "25px",
    fontWeight: "bold",
    padding: "5px",
  },
  title: {
    fontSize: "18px",
  },
  logo: {
    color: "#2962ff",
    fontSize: "30px",
    padding: "5px",
  },
}));

export default function OurTeam() {
  const classes = useStyles();

  return (
    <div>
      <h2 className="lhead">Our Team</h2>
      <Grid container spacing={5} justifyContent="center">
        <Grid sm={3} item>
          <Avatar src="" className={classes.photo} />
          <Typography className={classes.name}>Aditya Sharma</Typography>
          <Typography className={classes.title}>SDE at Persistent</Typography>
          <a
            href="https://in.linkedin.com/in/aditya-sharma-0b21a3197"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className={classes.logo} />
          </a>
        </Grid>

        <Grid sm={3} item>
          <Avatar src="eshaangupta.jpg" className={classes.photo} />
          <Typography className={classes.name}>Eshaan Gupta</Typography>
          <Typography className={classes.title}>
            Googler
            <br />
            Candidate master on codeforces
          </Typography>
          <a
            href="https://www.linkedin.com/in/eshaan-gupta-6b5b081b2/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className={classes.logo} />
          </a>
        </Grid>

        <Grid sm={3} item>
          <Avatar src="" className={classes.photo} />
          <Typography className={classes.name}>Rohit Doshi</Typography>
          <Typography className={classes.title}>
            SDE-T at ZS Associates
            <br /> 2x ICPC Regionalist
          </Typography>
          <a
            href="https://www.linkedin.com/in/rohit-bhavesh-doshi/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className={classes.logo} />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}
