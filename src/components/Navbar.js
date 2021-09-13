import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:-1,
  },
  menuSpace1: {
    flexGrow: 0.17,
  },
  menuSpace2: {
    flexGrow: 0.66,
  },
  btn:{
    fontFamily:'Inter,sans-serif',
    backgroundColor:'#8739f9',
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
    borderRadius:1,
    margin:8,
    padding:"10px 31px",
    textTransform:"none",
    '&:hover': {
      backgroundColor: '#ad41dc',
  },
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ marginTop:0 }} position="fixed" color="transparent" elevation="none" >
        <Toolbar>
        <div className={classes.menuSpace1}></div>
         
            <img src={"logo2.svg"} height="50px"/>
  
          <div className={classes.menuSpace2}></div>
          <Button className={classes.btn} >Coderun</Button>
          <Button className={classes.btn} >Study</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
