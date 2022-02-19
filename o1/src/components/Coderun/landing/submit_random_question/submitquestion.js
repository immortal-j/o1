import React from "react";
import { useEffect, useState } from "react";
import {
  Button,
  Grid,
  TextField,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
const tags = [
  {
    value: "",
    label: "",
  },
  {
    value: "greedy",
    label: "greedy",
  },
  {
    value: "dp",
    label: "dp",
  },
  {
    value: "implementation",
    label: "implementation",
  },
  {
    value: "binary search",
    label: "binary search",
  },
  {
    value: "graphs",
    label: "graphs",
  },
  {
    value: "strings",
    label: "strings",
  },
  {
    value: "searching",
    label: "searching",
  },
  {
    value: "math",
    label: "math",
  },
  {
    value: "data structures",
    label: "data structures",
  },
];
const useStyles = makeStyles((theme) => ({
  TextField: {
    width: "100%",
  },
  btn: {
    backgroundColor: "#8739f9",
    color: "#fff",
    margin: "10px",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#333",
    },
  },
  paper: {
    width: "100%",
    // alignContent:'center',
    textAlign: "center",
  },
  text: {
    margin: "12px",
  },
  head: {
    fontSize: "20px",
    fontWeight: 600,
  },
  phead: {
    fontSize: "15px",
    fontWeight: 600,
  },
}));
function Submitquestion(props) {
  const classes = useStyles();
  const [questions, setQuestions] = useState([]);
  const [link, setLink] = useState("");
  const [snack, setsnack] = useState(false);
  const [tag, setTag] = useState("Greedy");
  const [difficulty, setDifficulty] = useState("");
  const handleLink = (e) => {
    setLink(e.target.value);
  };
  const handleTag = (e) => {
    setTag(e.target.value);
  };
  const handleDifficulty = (e) => {
    setDifficulty(e.target.value);
  };
  const handleClosesnack = () => {
    setsnack(false);
  };
  const handleClickAdd = (e) => {
    if (
      link.length != 0 &&
      tag.length != 0 &&
      difficulty >= 800 &&
      difficulty <= 4000
    ) {
      var obj = {
        url: link,
        tag: tag,
        rating: difficulty,
      };
      setQuestions((prev) => {
        return [...prev, obj];
      });
      setLink("");
      setTag("");
      setDifficulty("");
    } else {
      console.log("error");
    }
  };
  const handleClickSubmit = (e) => {
    const obj = {
      uid: props.uid,
      questions: questions,
    };
    console.log(obj);
    axios
      .post(`https://coderun-temp.herokuapp.com/ques/solved/`, obj)
      .then(function (res) {
        console.log(res);
        setQuestions([]);
        setsnack(true);
        setTimeout(() => {
          handleClosesnack();
        }, 5000);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  const handleRemove = (obj) => {
    const index = questions.indexOf(obj);
    setQuestions((prev) => {
      var tmp = [...prev];
      tmp.splice(index, 1);
      return tmp;
    });
    setLink("");
    setTag("");
    setDifficulty("");
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  return (
    <Grid container xs={12} sm={12} justifyContent="center" spacing={3}>
      <Grid item xs={12} sm={12}>
        <Typography className={classes.head}>QUESTIONS SOLVED</Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography className={classes.phead}>
          Enter the daily solved questions here
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          className={classes.TextField}
          type="url"
          label="Submission Link"
          variant="filled"
          value={link}
          onChange={handleLink}
          color="secondary"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        {/* <TextField
        className={classes.TextField}
          id="Tag"
          label="Tag"
          variant="filled"
          value={tag}
          onChange={handleTag}
          color="secondary"
        /> */}
        <TextField
          id="filled-select-currency-native"
          select
          label="TAG"
          value={tag}
          onChange={handleTag}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="filled"
          className={classes.TextField}
        >
          {tags.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          className={classes.TextField}
          id="Difficulty"
          label="Difficulty"
          variant="filled"
          value={difficulty}
          onChange={handleDifficulty}
          color="secondary"
        />
      </Grid>
      {/* {console.log(questions)} */}
      <Grid container item xs={12} sm={12} justifyContent="center">
        <Button className={classes.btn} onClick={handleClickAdd}>
          ADD
        </Button>
        <Button className={classes.btn} onClick={handleClickSubmit}>
          SUBMIT
        </Button>
      </Grid>
      <Grid container item xs={12} sm={12} justifyContent="center">
        <Paper className={classes.paper} elevation={2}>
          <Typography className={classes.head}>
            Questions Added ({questions.length})
          </Typography>
          <Grid container item xs={12} sm={12} justifyContent="center">
            {questions.map((x, i) => {
              return (
                <Grid container item xs={12} sm={12}>
                  <Grid item xs={12} sm={3}>
                    <Typography className={classes.text}>
                      {x.url.slice(0, 15) + "..."}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography className={classes.text}>
                      {x.tag.slice(0, 15)}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography className={classes.text}>{x.rating}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Button
                      className={classes.btn}
                      onClick={(e) => {
                        handleRemove(x);
                      }}
                    >
                      Remove
                    </Button>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Grid>
      <Snackbar open={snack} onClose={handleClosesnack}>
        <Alert
          onClose={handleClosesnack}
          severity="success"
          sx={{ width: "100%" }}
        >
          Submitted!
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default Submitquestion;
