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
  large: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    marginLeft:'55px',
    [theme.breakpoints.down('xs')]: {
      marginLeft:'0px',
    },
  },
  mar:{
    marginLeft:'-30px',
    [theme.breakpoints.down('xs')]: {
      marginLeft:'0px',
    },
  }
}));

export default function OurTeam() {
  const classes = useStyles();

  return (
    <div>
      <h2 className="lhead">Our Team</h2>
      <Grid container spacing={5} justifyContent="center">
        {/* <Grid sm={4} item>
          <Avatar src="eshaangupta.jpg" className={classes.large} />
          <Typography style={{ fontSize: "18px" }} className={classes.mar}>Eshaan Gupta</Typography>
          <Typography style={{ fontSize: "12px"}} className={classes.mar}>
            Upcoming Googler | Cracked Goldman Sachs Cisco etc | Candidate master
            on codeforces
          </Typography>
          <a href="https://www.linkedin.com/in/eshaan-gupta-6b5b081b2/" target="_blank"  className={classes.mar}>
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#2962ff", fontSize: "20px" }}
            ></FontAwesomeIcon>
          </a>
        </Grid> */}
        <Grid sm={4} item>
          <Avatar src="rishabh.jpg" className={classes.large} />
          <Typography style={{ fontSize: "18px" }} className={classes.mar}>Rishabh Rathi</Typography>
          <Typography style={{ fontSize: "12px"}} className={classes.mar}>MTS at VMware |
World Rank 3 at Code Gladiators</Typography>
          <a href="https://www.linkedin.com/in/rishabhrathi22/" target="_blank"  className={classes.mar}>
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#2962ff", fontSize: "20px" }}
            ></FontAwesomeIcon>
          </a>
        </Grid>
        <Grid sm={4} item>
          <Avatar src="aditya.jpeg" className={classes.large} />
          <Typography style={{ fontSize: "18px"}} className={classes.mar}>Aditya Sharma</Typography>
          <Typography style={{ fontSize: "12px"}}>SDE at Amazon |
3x ICPC Regionalist</Typography>
          <a href="https://www.linkedin.com/in/saurabh-talmale-639861157/" target="_blank"  className={classes.mar}>
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#2962ff", fontSize: "20p className={classes.mar}x" }}
            ></FontAwesomeIcon>
          </a>
        </Grid>
        {/* <Grid sm={4} item>
          <Avatar src="monica.jpeg" className={classes.large} />
          <Typography style={{ fontSize: "18px" }} className={classes.mar}>Monica Dholwani</Typography>
          <Typography style={{ fontSize: "12px"}} className={classes.mar}>SDE at Fivetran</Typography>
          <a href="https://www.linkedin.com/in/monica-dholwani/" target="_blank"  className={classes.mar}>
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#2962ff", fontSize: "20px" }}
            ></FontAwesomeIcon>
          </a>
        </Grid> */}
      </Grid>
    </div>
  );
}
