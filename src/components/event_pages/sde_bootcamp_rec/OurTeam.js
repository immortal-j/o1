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
    fontSize: "16px",
    fontWeight: "bold",
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
      <h2 className="lhead">Instructor</h2>
      <Grid container spacing={5} justifyContent="center">
        <Grid sm={3} item></Grid>

        <Grid sm={6} item>
          <Avatar src="rohitdoshi.jpg" className={classes.photo} />
          <Typography className={classes.name}>Rohit Doshi</Typography>
          <Typography className={classes.title}>
            SDE at Amazon | 2x ICPC Regionalist
          </Typography>
          <Typography>
            Hi, I'm Rohit Doshi, and I had recieved multiple dream and super
            dream offers because of my DSA and problem solving skills. Also I
            have a great passion for teaching and making other people good at
            problem solving skills. I am here to help you develop one of the
            most important skills in acing any interviews.
          </Typography>
          <a
            href="https://www.linkedin.com/in/rohit-bhavesh-doshi/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className={classes.logo} />
          </a>
        </Grid>

        <Grid sm={3} item></Grid>
      </Grid>
    </div>
  );
}
