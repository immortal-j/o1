import React from "react";
import { useState } from "react";
import { Box, Typography, Grid, Button, makeStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Progress from "./progress";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const useStyles = makeStyles((theme) => ({
  ncroot: {
    maxWidth: 450,
  },
  coursecontainer: {
    maxWidth: 320,
    [theme.breakpoints.up("sm")]: {
      maxWidth: 600,
    },
  },
  course: {
    backgroundColor: "#fff",
    borderRadius: " 10px",
    boxShadow: " 0 10px 10px rgba(0, 0, 0, 0.2)",
    display: "flex",
    minHeight: 100,
    margin: "20px",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      minHeight: 100,
    },
  },
  courseinfo: {
    padding: "30px",
    position: "relative",
    width: "100%",
  },
  desfont: {
    fontSize: 15,
  },
  coursepreview: {
    backgroundColor: "#2A265F",
    color: "#fff",
    padding: "30px",
    minWidth: "60px",
    [theme.breakpoints.up("sm")]: {
      minWidth: "70px",
    },
  },
  btn: {
    borderRadius: 25,
    fontSize: 9,
    width: "90px",
    fontSize: "15px",
  },
  dlgtitle: {
    backgroundColor: "#000",
    flex: 1,
    textAlign: "center",
    color: "#fff",
    fontSize: "35px",
    marginBottom: "2px",
    fontFamily: "Roboto,sans-serif",
    fontWeight: 600,
  },
  dlgcontent: {
    margin: "15px 8px 8px 8px",
    fontFamily: "Roboto,sans-serif",
    fontSize: "25px",
  },
  lefttitle: {
    fontSize: 20,
  },
  space: {
    flexGrow: 1,
  },
  weak: {
    fontSize: "26px",
    fontWeight: 600,
    fontFamily: "Roboto,sans-serif",
  },
  topic: {
    fontSize: "20px",
  },
  fullCard: {
    backgroundColor: "#F9E4C8",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function NewCard(props) {
  const classes = useStyles();
  const [tosend, setTosend] = useState([]);
  const [checked, setChecked] = React.useState(props.x.status);

  const [open, setOpen] = React.useState(false);
  const [snack, setsnack] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = (value) => () => {
    var newChecked = [...checked];
    var tos = [...tosend];

    if (newChecked[value] === false) {
      newChecked[value] = true;
      tos.push(props.x.problems[value]);
    } else if (newChecked[value] === true && props.x.status[value] === false) {
      newChecked[value] = false;
      tos.splice(tos.indexOf(props.x.problems[value]), 1);
    }
    setTosend(tos);
    setChecked(newChecked);
  };
  const handleClick = () => {
    props.ts({ uid: props.uid, day: props.x.id, problems: tosend });
    setsnack(true);
    handleClose();
  };
  const handleClosesnack = () => {
    setsnack(false);
  };

  return (
    <div>
      <div className={classes.coursecontainer}>
        <div className={classes.course}>
          <div className={classes.coursepreview}>
            <h6 className={classes.lefttitle}>Day{props.x.id}</h6>
          </div>
          <div className={classes.courseinfo}>
          {console.log(props.x)}
            <Progress solved={props.x.solved} length={props.x.names.length} />
            <br />
            <Button
              className={classes.btn}
              onClick={handleClickOpen}
              variant="contained"
              color="secondary"
            >
              Solve
            </Button>
          </div>

          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar sx={{ position: "relative" }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" component="div">
                  Day{props.x.id}
                </Typography>
                <div className={classes.space}></div>
                <Button autoFocus color="inherit" onClick={handleClick}>
                  Submit
                </Button>
              </Toolbar>
            </AppBar>

            <Box m={10}>
              <Grid item container spacing={1}>
                <Grid item container xs={12} sm={2}></Grid>
                <Grid item container xs={12} sm={4} justifyContent="center">
                  <Card className={classes.fullCard} sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography
                        className={classes.weak}
                        variant="h5"
                        component="div"
                      >
                        Weakest Topic
                      </Typography>
                      <Typography className={classes.topic}>
                        {props.x.weakest_topic}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item container xs={0} sm={3} justifyContent="center">
                  <Card className={classes.fullCard} sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography
                        className={classes.weak}
                        variant="h5"
                        component="div"
                      >
                        Target Rating
                      </Typography>
                      <Typography className={classes.topic}>
                        {props.x.target_rating}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item container xs={0} sm={2}></Grid>
              </Grid>

              <Grid container justifyContent="center">
                {console.log(props.x)}
                {props.x.problems.map((value) => {
                  return (
                    <Grid item container>
                      <Grid item container xs={6} sm={6}>
                        <a href={value} target="_blank">
                          <Button>
                            {props.x.names[props.x.problems.indexOf(value)]}
                          </Button>
                        </a>
                      </Grid>
                      <Grid
                        item
                        container
                        justifyContent="flex-end"
                        xs={6}
                        sm={6}
                      >
                        <Checkbox
                          edge="end"
                          onChange={handleToggle(
                            props.x.problems.indexOf(value)
                          )}
                          checked={checked[props.x.problems.indexOf(value)]}
                        />
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Dialog>

          <Snackbar open={snack} onClose={handleClosesnack}>
            <Alert
              onClose={handleClosesnack}
              severity="success"
              sx={{ width: "100%" }}
            >
              Submitted!
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}

export default NewCard;
