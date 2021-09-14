import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Menu,Typography} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles((theme) => ({
  title:{
    textAlign:'center',
    color:'#8739f9',
    fontFamily:'Inter',
    fontSize:'30px',
    fontWeight:800,
    marginLeft:'15px',
   
},
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
    // backgroundColor:'#8739f9',
    color:'#8739f9',
    fontSize:16,
    fontWeight:'bold',
    borderRadius:1,
    margin:8,
    padding:"10px 20px",
    textTransform:"none",
    '&:hover': {
      color:'#FF2442',
      // backgroundColor: '#ad41dc',
  },
  },
  menuitm:{
    fontSize:"18px",
    fontFamily:'Inter',
    fontWeight:600,
  },
  anchor:{
    textDecoration:'none',
    color:'#8739f9',
    '&:hover':{
      color:'#FF2442',
    }
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar style={{ marginTop:0,backgroundColor:'#f9f3f3'}} position="fixed" color="#000"  >
        <Toolbar>
        <div className={classes.menuSpace1}></div>
         
            <img src={"logo2.svg"} height="50px"/>
            <Typography className={classes.title} >O(1) Coding Club</Typography>
          <div className={classes.menuSpace2}></div>
          <Button className={classes.btn} >Coderun</Button>
          <Button className={classes.btn} >Study</Button>
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
          <FontAwesomeIcon className={classes.btn} icon={faBars} size="2x" color="#8739f9"/>
          </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <a className={classes.anchor} href="#Landing"><MenuItem className={classes.menuitm} onClick={handleClose}>Home</MenuItem></a>
        <a className={classes.anchor} href="#Alumni"><MenuItem className={classes.menuitm} onClick={handleClose}>Alumni</MenuItem></a>
        
      </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
