import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Paper,
  makeStyles,
  Typography,
  Button,
  Checkbox,
  Container,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  wi: {
    border: "1px solid black",
  },
  btn: {
    backgroundColor: "#8739f9",
    "&:hover": {
      backgroundColor: "#f50057",
    },
    color: "#fff",
  },
  anchr: {
    textDecoration: "none",
  },
  btn2: {
    fontSize: "18px",
    
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  tablehead: {
    fontSize: "20px",
    fontWeight: 600,
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  headrow: {
    backgroundColor: "#8739f9",
  },
  tablesize: {
    [theme.breakpoints.down("sm")]: {
      // maxWidth: "300px",
    },
  },
}));
function Diagtable(props) {
  const classes = useStyles();
  const [checked, setChecked] = useState(props.x.status);
  const [tosend, setTosend] = useState([]);
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
    window.location.reload();
    props.mark({ uid: props.uid, day: props.x.id, problems: tosend });
  };
  return (
    <div>
      <TableContainer component={Paper} className={classes.tablesize}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow className={classes.headrow}>
              <TableCell>
                <Typography className={classes.tablehead}>Problems</Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.tablehead}>Rating</Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.tablehead}>status</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            {props.x.problems.map((value) => {
              return (
                <TableRow>
                  <TableCell>
                    <a className={classes.anchr} href={value} target="_blank">
                      <Button className={classes.btn2}>
                        <Typography>
                          {" "}
                          {props.x.names[props.x.problems.indexOf(value)]}
                        </Typography>
                      </Button>
                    </a>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {props.x.ratings[props.x.problems.indexOf(value)]}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(props.x.problems.indexOf(value))}
                      checked={checked[props.x.problems.indexOf(value)]}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />
      <Grid container item xs={12} sm={12} justifyContent="center">
        <Button className={classes.btn} onClick={handleClick}>
          Submit
        </Button>
      </Grid>
    </div>
  );
}

export default Diagtable;
