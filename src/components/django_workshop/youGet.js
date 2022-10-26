import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core/";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import Lotie from "./lotie";
const useStyles = makeStyles({
  root: {
    minWidth: 250,
    marginBottom: "50px",
    minHeight: "450px",
    textAlign:'left',
    transition:'0.5s',
    "&:hover":{
      marginTop: "-10px",
      border: "3px solid transparent",
     
      borderImageSlice: "1",
      animation: "$myEffect 3000ms linear infinite",
    }
     
  },
  "@keyframes myEffect": {
    "0%": {
      borderImage:
        "linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)",
      borderImageSlice: "1",
    },
    "50%": {
      borderImage:
        "linear-gradient(45deg,#fb0094,#00f,#0f0,#ff0,#f00,#fb0094,#00f,#0f0,#ff0,#f00)",
      borderImageSlice: "1",
    },
    "100%": {
      borderImage:
        "linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)",
      borderImageSlice: "1",
    },
  },
  title: {
    fontSize: 40,
    fontWeight: 600,
  },
  pos: {
    marginTop: "10px",
    marginBottom: "20px",
    fontSize: "15px",
  },
  text:{
    marginTop: "25px",
     fontSize: "25px",
      fontWeight: "550",
      marginLeft:'7vw',
  },
  tick:{
    backgroundColor:'#32cd32',
    borderRadius:'50%'
  }
});

export default function YouGet() {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" spacing={9}>
      <Grid item sm={6}>
        <Card className={classes.root}>
          <CardContent>
          
            <Lotie  />
            <Typography
             className={classes.text}
              variant="h5"
              component="h2"
            >
              <DoneOutlineIcon className={classes.tick} fontSize="medium"/> An impressive project on your resume
            </Typography>
            <Typography
              className={classes.text}
              variant="h5"
              component="h2"
            >
              <DoneOutlineIcon className={classes.tick} fontSize="medium"/> A trending skill to enhance your resume
            </Typography>
            <Typography
              className={classes.text}
              variant="h5"
              component="h2"
            >
              <DoneOutlineIcon className={classes.tick} fontSize="medium"/> Course Certification
            </Typography>
            <Typography
              className={classes.text}
              variant="h5"
              component="h2"
            >
              <DoneOutlineIcon className={classes.tick} fontSize="medium"/> Lifetime Access
            </Typography>
            <Typography
              className={classes.text}
              variant="h5"
              component="h2"
            >
              <DoneOutlineIcon className={classes.tick} fontSize="medium"/>   Internship offer to top performers
            </Typography>

          </CardContent>
        </Card>
      </Grid>

      
    </Grid>
  );
}
