import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 275,
    transition: "0.5s",
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
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  mar: {
    marginTop: "30px",
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.mar}>
        <img src={props.x.img} />
        <Typography variant="h5" component="h2">
          {props.x.feature}
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          {props.x.data}
        </Typography>
      </CardContent>
    </Card>
  );
}
