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
        <Grid sm={4} item>
          <Avatar src="" className={classes.photo} />
          <Typography className={classes.name}>Nikeshsingh Baghel</Typography>
          <Typography className={classes.title}>
            SDE-T at ZS Associates
          </Typography>
          <Typography>
            Hi, I'm Nikeshsingh Baghel, I have appeared and cracked the
            Interviews for various IT companies, and this experience has landed
            me a super dream Job. According to my experience, acing the
            interview requires an in-depth knowledge of Core Subjects, and to
            get that knowledge we need to enjoy learning.
          </Typography>
          <a
            href="https://www.linkedin.com/in/nikeshsingh-baghel-2b2788187/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className={classes.logo} />
          </a>
        </Grid>

        <Grid sm={4} item>
          <Avatar src="monica.jpeg" className={classes.photo} />
          <Typography className={classes.name}>Monica Dholwani</Typography>
          <Typography className={classes.title}>SDE at Fivetran</Typography>
          <Typography></Typography>
          <a
            href="https://www.linkedin.com/in/monica-dholwani/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className={classes.logo} />
          </a>
        </Grid>

        <Grid sm={4} item>
          <Avatar src="" className={classes.photo} />
          <Typography className={classes.name}>Rohit Doshi</Typography>
          <Typography className={classes.title}>
            SDE at ZS Associates |<br /> 2x ICPC Regionalist
          </Typography>
          <Typography></Typography>
          <a
            href="https://www.linkedin.com/in/rohit-bhavesh-doshi/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className={classes.logo} />
          </a>
        </Grid>

        {/* <Grid sm={3} item>
          <Avatar src="monica.jpeg" className={classes.photo} />
          <Typography className={classes.name}>Monica Dholwani</Typography>
          <Typography className={classes.title}>SDE at Fivetran</Typography>
          <a
            href="https://www.linkedin.com/in/monica-dholwani/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className={classes.logo} />
          </a>
        </Grid> */}
      </Grid>
    </div>
  );
}
