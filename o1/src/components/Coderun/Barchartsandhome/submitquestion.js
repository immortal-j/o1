import React from "react";
import { useEffect, useState } from "react";
import {Button, Grid, TextField,makeStyles,Paper, Typography } from "@material-ui/core";
import { Prev } from "react-bootstrap/esm/PageItem";
const tags = [
  {
    value: 'Greedy',
    label: 'Greedy',
  },
  {
    value: 'DP',
    label: 'DP',
  },
  {
    value: 'Constructive',
    label: 'Constructive',
  },
  {
    value: 'Implementation',
    label: 'Implementation',
  },
  {
    value: 'Binary Search',
    label: 'Binary Search',
  },
  {
    value: 'Graph',
    label: 'Graph',
  },
];
const useStyles = makeStyles((theme) => ({
    TextField:{
        width:'100%'
    },
    btn:{
        backgroundColor:'#8739f9',
        color:'#fff',
        margin:'10px',
        fontWeight:600,
        "&:hover":{
            backgroundColor:"#333",
        }
    },
    paper:{
      width:'100%',
      // alignContent:'center',
      textAlign:'center',
    },
    text:{
      margin:'12px',
    },
    head:{
      fontSize:'20px',
      fontWeight:600,
    }
  }));
function Submitquestion(props) {
    const classes = useStyles();
    const [questions,setQuestions]=useState([]);
  const [link, setLink] = useState("");
  const [tag, setTag] = useState("Greedy");
  const [difficulty, setDifficulty] = useState('');
  const handleLink = (e) => {
    setLink(e.target.value);
  };
  const handleTag = (e) => {
    setTag(e.target.value);
  };
  const handleDifficulty = (e) => {
    setDifficulty(e.target.value);
  };
  const handleClickAdd = (e) => {
    
    if(link.lenght!=0&&tag.length!=0&&difficulty>=1000&&difficulty<=4000)
    {
      var obj={
        link,
        tag,
        difficulty
      }
      setQuestions((prev)=>{
        return [...prev,obj];
      });
      setLink("");
      setTag("");
      setDifficulty("");
    }
    else{
      console.log("error");
    }
  };
  const handleClickSubmit = (e) => {
  };
  const handleRemove = (obj) => {
    const index=questions.indexOf(obj);
    setQuestions((prev)=>{
      var tmp=[...prev];
      tmp.splice(index,1);
      return tmp;
    })
    setLink("");
    setTag("");
    setDifficulty("");
  };
  return (
    <Grid container xs={12} sm={12} justifyContent="center" spacing={3}>
    <Grid item xs={12} sm={12}><Typography className={classes.head}>QUESTIONS SOLVED</Typography></Grid>
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
        <Button className={classes.btn} onClick={handleClickAdd}>ADD</Button>
        <Button className={classes.btn} onClick={handleClickSubmit}>SUBMIT</Button>
      </Grid>
      <Grid container item xs={12} sm={12} justifyContent="center">
        <Paper className={classes.paper} elevation={2}>
        <Typography className={classes.head}>Questions Added ({questions.length})</Typography>
        <Grid container item xs={12} sm={12} justifyContent="center">
        {questions.map((x,i)=>{
          return <Grid container item xs={12} sm={12}>
          <Grid item xs={12} sm={3}><Typography className={classes.text}>{x.link.slice(0,15)+"..."}</Typography></Grid>
          <Grid item xs={12} sm={3}><Typography className={classes.text}>{x.tag.slice(0,15)}</Typography></Grid>
          <Grid item xs={12} sm={3}><Typography className={classes.text}>{x.difficulty}</Typography></Grid>
          <Grid item xs={12} sm={3}><Button className={classes.btn} onClick={(e)=>{
            handleRemove(x);
          }}>Remove</Button></Grid>
          </Grid>
        })}
         
          
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Submitquestion;
