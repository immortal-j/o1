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
      <h2 className="lhead">Instructors</h2>
      <Grid container spacing={5} justifyContent="center">
        <Grid sm={6} item>
          <Avatar src="" className={classes.photo} />
          <Typography className={classes.name}>Aditya Sharma</Typography>
          <Typography className={classes.title}>SDE at Persistent</Typography>
          <Typography>
            Hi, I am Aditya Sharma. I have experience of training more than 200
            students for python language. We all know how important is a command
            over programming language for IT placements. I cracked multiple
            dream and superdream offers using python and I am here to guide you
            for the same.
          </Typography>
          <a
            href="https://in.linkedin.com/in/aditya-sharma-0b21a3197"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className={classes.logo} />
          </a>
        </Grid>

        <Grid sm={6} item>
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
