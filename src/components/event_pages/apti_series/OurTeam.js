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
    fontWeight: "bold",
    padding: "5px",
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
      <h2 className="lhead">Instructors</h2>
      <Grid container spacing={5} justifyContent="center">
        <Grid sm={6} item>
          <Avatar src="rajatagrawal.png" className={classes.photo} />
          <Typography className={classes.name}>R.S. Agrawal</Typography>
          <Typography className={classes.title}>
            Full Stack Engineer at Accenture
          </Typography>
          <Typography>
            Hi, I'm R.S. Agrawal, not only do I have the experience of training
            over 500 students for Aptitude tests of various IT companies but
            have myself aced through every aptitude test that I appeared for &
            ultimately landed a superdream job. I'm here to guide you for the
            same.
          </Typography>
          <a
            href="https://in.linkedin.com/in/rajat-agrawal-231273185"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className={classes.logo} />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}
