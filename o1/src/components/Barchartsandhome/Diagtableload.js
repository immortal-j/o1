
import React from "react";
import Diagtable from './diagtable';
import {useState} from 'react';
import { Typography,Grid,Paper,Container,makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  charttitle:{
    textAlign:'center',
    fontWeight:400,
    marginTop: "5%"
  },
  card:{
    minHeight:140,
    maxWidth:"200px",
    marginBottom: "30px",
    [theme.breakpoints.up('sm')]: {
      minHeight:190,
    },
  },
  cardtitle:{
    color:"#fff",
    textAlign:'center',
    padding:5,
    backgroundColor:'#8739f9',
    fontSize:20,
    [theme.breakpoints.up('sm')]: {
      fontSize:25,
    },
  },
  cardContent:{
    fontSize:20,
    marginTop:15,
    marginBottom:15,
    [theme.breakpoints.up('sm')]: {
      marginTop:10,
      marginBottom:10,
    },
    textAlign:'center',
    
  },
  diagnosis:{
    fontFamily:'Inter',
    fontSize:'44px',
    fontWeight:600,
  },
  
  wi:{
    border:'1px solid black',
  },
  diagheader:{
    backgroundColor:'#000',
    color:'#fff',
  }
  
}));
function Diagtableloader(props) {

  const classes=useStyles();
  return (
    <Grid container item xs={12} sm={12} spacing={4}>
    <Grid item container justifyContent='center' xs={12} sm={12}>
    <div >
    <Typography variant="h3" className={classes.diagnosis}> Hi Rishikesh</Typography>
    <Typography variant="h6">Our algorithm analysed your recent contest's performance and found out the following scopes of improvement for you :-</Typography>
    </div>
    
    <br/>
    <br/>
    <br/>  
    </Grid>
    <Grid container item xs={6} sm={6} justifyContent='flex-end'>
    <Paper className={classes.card} elevation={2}>
    <Typography type="h1" className={classes.cardtitle}>Today's Weakest Topic</Typography>
  
    <Typography type="h1" className={classes.cardContent}>{props.arrlen>0?props.arr[0].weakest_topic:''}</Typography>
    </Paper>
    </Grid>
    <Grid container item xs={6} sm={6} justifyContent='flex-start'>
    <Paper className={classes.card} elevation={2}>
    <Typography type="h1" className={classes.cardtitle}>Targeted Rating to Achieve</Typography>
    <Typography type="h1" className={classes.cardContent}>{props.arrlen>0?props.arr[0].target_rating:''}</Typography>
    </Paper>
    </Grid>
    
    <Grid item container xs={12} sm={12} justifyContent='center'>
    <Typography variant="h6">To overcome the above weakness we handpicked some diagnosis questions specially for you which should be mandatorily solved.</Typography>
    </Grid>
    <br/>
    <br/>
    <Grid item sm={12}>
    <Container maxWidth="xl">
    <Grid sm={12} xs={12} item container justifyContent='center' className={classes.wi}>
    <Grid className={classes.diagheader} item container xs={6} sm={4} justifyContent='center'>
    <Typography variant="h5">Problems</Typography>
    </Grid>
    <Grid className={classes.diagheader} item container xs={6} sm={4} justifyContent='center'>
    <Typography variant="h5">Rating</Typography>
    </Grid>
    <Grid  className={classes.diagheader} item container xs={6} sm={4} justifyContent='center'>
    <Typography variant="h5">Status</Typography>
    </Grid>
    </Grid>
    {props.arrlen>0 ?<Diagtable uid={props.uid} mark={props.mark} x={props.arr[0]}/>:''}
    </Container>
    </Grid>
    </Grid>
    );
  }
  
  export default Diagtableloader;
  