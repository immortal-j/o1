import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core/";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    marginBottom: "50px",
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
    fontSize: 40,
    fontWeight: 600,
  },
  pos: {
    marginTop: "10px",
    marginBottom: "20px",
    fontSize: "15px",
  },
  table: {
    border: "2px solid forestgreen",
    width: "85%",
    margin: "auto",
    marginTop: "25px",
  },
  tr: {
    borderBottom: "1px solid black",
  },
  th: {
    borderBottom: "1px solid black",
    borderLeft: "2px solid green",
    fontSize: "20px",
    padding: "10px",
  },
  th1: {
    borderBottom: "1px solid black",
    fontSize: "20px",
    padding: "10px",
  },
  td: {
    textAlign: "center",
    borderLeft: "2px solid green",
    fontSize: "20px",
    padding: "10px",
  },
  td1: {
    textAlign: "center",
    fontSize: "20px",
    padding: "10px",
  },
});

export default function IncomeAgreement() {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" spacing={9}>
      <Grid item sm={6}>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title}>
              The Complete SDE Bootcamp
            </Typography>
            <hr />
            <Typography
              style={{ marginTop: "25px", fontSize: "25px", fontWeight: "550" }}
              variant="h5"
              component="h2"
            >
              INR 5000 <br />
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Upfront Registration Fees
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}