import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    transition: "0.5s",
    textAlign: "left",
    "&:hover": {
      marginTop: "-10px",
      border: "2px solid transparent",
      borderImageSlice: "1",
      animation: "$myEffect 3000ms linear infinite",
    },
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
    fontSize: "25px",
    fontWeight: 600,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  pos: {
    marginTop: 12,
    marginBottom: 12,
    fontSize: "18px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  step: {
    margin: "auto",
  },
  image: {
    width: 200,
    height: 200,
    [theme.breakpoints.down("sm")]: {
      width: 150,
      height: 200,
    },
  },
  btn: {
    backgroundColor: "#8739f9",
    color: "white",
    margin: "2%",
  },
}));

export default function Webinar() {
  const classes = useStyles();

  return (
    <div>
      <Grid sm={12} container justifyContent="center" spacing={3}>
        <Grid sm={6} item>
          <Card className={classes.root}>
            <CardContent>
              <Grid container spacing={3}>
                <Grid
                  container
                  justifyContent="center"
                  item
                  sm={4}
                  xs={5}
                  className={classes.step}
                >
                  <img src="doubts.png" className={classes.image} />
                </Grid>

                <Grid item sm={8} xs={7}>
                  <Typography
                    variant="h5"
                    component="h2"
                    className={classes.title}
                  >
                    Attend FREE Webinar
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.pos}
                  >
                    Attend our FREE webinar this Sunday where we will be
                    explaining all the details about this program & get all your
                    doubts cleared.
                  </Typography>
                  <div style={{ textAlign: "center" }}>
                    <a
                      href="https://chat.whatsapp.com/DgH2Z0mq5XTKJCczTuLeSi"
                      target="_blank"
                    >
                      <Button className={classes.btn}>Join Group</Button>
                    </a>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
