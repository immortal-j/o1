import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Checkbox,
  AppBar,
  makeStyles,
  Button,
  Dialog,
  ListItemText,
  ListItem,
  List,
  Divider,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Paper,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import CloseIcon from "@material-ui/icons/Close";
import { color } from "@mui/system";
import { delete_cookie, bake_cookie } from "sfcookies";
import DataDialog from "./DataDialog";

const useStyles = makeStyles((theme) => ({
 
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color:'#ffd79d',
    fontSize:'20px',
    fontWeight:600,

  },
  con: {
    fontSize: "30px",
  },
  btn: {
    backgroundColor: "#320d3e",
    color:'#ffd79d',
    fontSize: "18px",
    fontWeight: 600,
  },
  image: {
    height: "150px",
    width: "300px",
    [theme.breakpoints.up("sm")]: {
      height: "400px",
      width: "800px",
    },
  },
  appbar:{
    position:'relative',
    backgroundColor:"#320d3e",
  },
  tablehead: {
    fontSize: "20px",
    fontWeight: 600,
    color:'#ffd79d',
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  headrow: {
    backgroundColor: "#320d3e",
  },
  tablesize: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
    },
  },
  navbartext:{
    color:'#ffd79d',
    fontSize:'16px',
    fontWeight:600,
  },
  anchr: {
    textDecoration: "none",
  },
  tabletext:{
    fontSize:'16px',
    fontWeight:600,
  }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Report(props) {
  const classes = useStyles();
  const [checked, setChecked] = useState([]);
  const [open, setOpen] = useState(false);
  const [showDialog, setshowDialog] = useState(false);
  const [showdemoDialog, setshowDemoDialog] = useState(false);

  useEffect(() => {
    setchecked();
  }, []);
  const setchecked = () => {
    var tem = [];

    for (var i = 0; i < props.x.questions.length; i++) {
      tem.push(false);
    }
    setChecked(tem);
  };

  const handleToggle = (value) => () => {
    var newChecked = [...checked];

    if (newChecked[value] === false) {
      newChecked[value] = true;
    } else if (newChecked[value] === true) {
      newChecked[value] = false;
    }
    setChecked(newChecked);
  };

  const handleHEllo = () => {
    setshowDemoDialog(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClosewithpost = () => {
    // <DataDialog />
    setshowDialog(true);
    var obj = {
      uid: props.uid,
      questions: props.x.questions,
      status: checked,
    };
    console.log(obj);
    axios
      .post(`https://coderun-temp.herokuapp.com/report/`, obj)

      .then(function (response) {
        props.statuschange(true);
        delete_cookie("conteststatus");
        bake_cookie("conteststatus", true);
        setOpen(false);
        // window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleClick = () => {
    setOpen(true);
  };
  return (
    <Grid item container xs={12} sm={12} justifyContent="center" spacing={4}>
      <Grid xs={12} sm={12} item container justifyContent="center">
        <a href={props.x.contest_link} target="_blank">
          {" "}
          <img src="banner.jpeg" className={classes.image} />
        </a>
        {/* <Typography className={classes.con}>Here is your Today's Contest Link<br/> </Typography> */}

        {/* <Button className={classes.btn} href={props.x.contest_link}>Go to Contest</Button> */}
      </Grid>
      <Grid xs={12} sm={12} item container justifyContent="center">
        <Button className={classes.btn} onClick={handleClick}>
          Get Analysis
        </Button>
      </Grid>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appbar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
             Contest Questions
            </Typography>
            {/* <Button onClick={handleHEllo}>
              Hello
            </Button>
            {showdemoDialog?
            <DataDialog/>
            :
            ""} */}
          </Toolbar>
        </AppBar>
        {/* <Box m={10}>
          <Grid container justifyContent="center">
            {props.x.questions.map((value) => {
              return (
                <Grid item container>
                  <Grid item container xs={6} sm={6}>
                    <a href={value.url} target="_blank">
                      <Button>{value.title}</Button>
                    </a>
                  </Grid>
                  <Grid item container justifyContent="flex-end" xs={6} sm={6}>
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(props.x.questions.indexOf(value))}
                      checked={checked[props.x.questions.indexOf(value)]}
                    />
                  </Grid>
                </Grid>
              );
            })}
            <Button
              style={{ marginTop: "45px" }}
              color="inherit"
              onClick={handleClosewithpost}
              variant="contained"
            >
              Get Analysis
            </Button>
            {showDialog ? <DataDialog /> : ""}
          </Grid>
        </Box> */}

        <Box m={3}>
          <TableContainer component={Paper} className={classes.tablesize}>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                <TableRow className={classes.headrow}>
                  <TableCell>
                    <Typography className={classes.tablehead}>
                      Problems
                    </Typography>
                  </TableCell>
                 
                  <TableCell>
                    <Typography className={classes.tablehead}>
                      status
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                {props.x.questions.map((value) => {
                  return (
                    <TableRow>
                      <TableCell>
                      <a href={value.url} target="_blank" className={classes.anchr}>
                      <Button>{value.title}</Button>
                    </a>
                      </TableCell>
                      {/* <TableCell>
                        <Typography>
                          {props.x.ratings[props.x.questions.indexOf(value)]}
                        </Typography>
                      </TableCell> */}
                      <TableCell>
                      <Checkbox
                      edge="end"
                      onChange={handleToggle(props.x.questions.indexOf(value))}
                      checked={checked[props.x.questions.indexOf(value)]}
                    />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Grid container justifyContent='center'>
          <Button
          className={classes.btn}
              style={{ marginTop: "45px"  }}
              color="inherit"
              onClick={handleClosewithpost}
              variant="contained"
            >
              Get Analysis
            </Button>
            </Grid>
        </Box>
      </Dialog>
    </Grid>
  );
}

export default Report;
