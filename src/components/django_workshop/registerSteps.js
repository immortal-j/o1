import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    transition: "0.5s",
    textAlign: "left",
    marginTop: "-10px",
    border: "2px solid transparent",
    borderImageSlice: "1",
    animation: "$myEffect 3000ms linear infinite",
    "&:hover": {
     
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
  },
  pos: {
    marginTop: 12,
    fontSize: "18px",
  },
  step: {
    backgroundColor: "#8739f9",
  },
  anc: {
    textDecoration: "none",
    color: "#8739f9",
  },
});

export default function RegisterSteps() {
  const classes = useStyles();

  return (
    <Grid sm={12} container justifyContent="center" spacing={3}>
      {/* <Grid sm={4} item>
        <Card className={classes.root}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid
                container
                justifyContent="center"
                item
                sm={2}
                xs={2}
                className={classes.step}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ margin: "auto" }}
                >
                  1
                </Typography>
              </Grid>
              <Grid item sm={10} xs={10}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  Pay Upfront Fees
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.pos}
                >
                Pay Rs.200 to the upi id -<b> namanvid30@oksbi </b> and take a screenshot for payment proof.
              
                </Typography>
                <br/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid> */}

      <Grid sm={8} item>
        <Card className={classes.root}>
          <CardContent>
            <Grid container spacing={3} justifyContent='center'>
              {/* <Grid
                container
                justifyContent="center"
                item
                sm={2}
                xs={2}
                className={classes.step}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ margin: "auto" }}
                >
                  1
                </Typography>
              </Grid> */}
              <Grid item sm={10} xs={10}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  Fill Details
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.pos}
                >
                 
                  Fill your details & attach payment proof in the Google Form.
                  <br/>
                  <a href="https://forms.gle/u1uZQnJ6s6aXbwJw7"> Apply Here</a>
                </Typography>
                <br/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* <Grid sm={4} item>
        <Card className={classes.root}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid
                container
                justifyContent="center"
                item
                sm={2}
                xs={2}
                className={classes.step}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ margin: "auto" }}
                >
                  3
                </Typography>
              </Grid>
              <Grid item sm={10} xs={10}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  Submit Application
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.pos}
                >
                  Submit your application in{" "}
                  <a
                    href="https://forms.gle/PQmNgPfN3UHbBeCm7"
                    target="_blank"
                    className={classes.anc}
                  >
                    Google Form
                  </a>
                  .<br /> You will need Payment Proof (if Plan B) and filled ISA
                  to proceed.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid> */}
    </Grid>
  );
}
