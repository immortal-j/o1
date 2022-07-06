import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Image } from "react-bootstrap";

const useStyles = makeStyles({
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

export default function RegisterSteps(props) {
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
                  sm={2}
                  xs={2}
                  alignItems="center"
                  // className={classes.step}
                >
                  <Image src="phone.png" width={"100%"} height={"80%"} />
                </Grid>
                <Grid item sm={10} xs={10}>
                  <Typography
                    variant="h5"
                    component="h2"
                    className={classes.title}
                  >
                    Contact Us
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.pos}
                  >
                    Please contact us on any of the below number to register
                    yourself
                    <div
                      style={{
                        width: "80%",
                        textAlign: "center",
                        marginTop: "3%",
                      }}
                    >
                      <div style={{ width: "50%", float: "left" }}>
                        <b>+91 98503 14506</b> <br />
                        Naman Vidyabhanu
                      </div>
                      <div
                        style={{
                          width: "50%",
                          float: "left",
                          textAlign: "right",
                        }}
                      >
                        <b>+91 99707 80928</b>
                        <br />
                        Zeeshan Ali
                      </div>
                    </div>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
