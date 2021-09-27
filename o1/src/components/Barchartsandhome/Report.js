import React from 'react';
import { useState } from 'react';
import {Box,Grid,Checkbox,AppBar, makeStyles,Button, Dialog,ListItemText,ListItem,List,Divider,Toolbar,IconButton,Typography,Slide } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import { color } from '@mui/system';


const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    con:{
        fontSize:'30px',
    },
    btn:{
      backgroundColor:'#8739f9',
      color:'#fff',
      marginLeft:'10px',
      fontSize:'18px',
      fontWeight:600,
    }
  }));
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });



function Report(props) {
    const classes=useStyles();
    const [tosend,setTosend]=useState([]);
	const [checked, setChecked] = React.useState([false,false,false,false,false,false]);
    const [open, setOpen] = React.useState(false);



    const handleToggle = (value) => () => {
        var newChecked = [...checked];
        var tos=[...tosend]
        
        if(newChecked[props.x.questions.indexOf(value)]===false)
        {
            newChecked[props.x.questions.indexOf(value)]=true;
            tos.push(props.x.questions.indexOf(value));
        }
        else if(newChecked[props.x.questions.indexOf(value)]===true)
        {
            newChecked[props.x.questions.indexOf(value)]=false;
            tos.splice(tos.indexOf(props.x.questions.indexOf(value)),1);
        }
        setTosend(tos);
        console.log(tos);
        setChecked(newChecked);
      };


    const handleClose = () => {
        setOpen(false);
      };

    const handleClick = () =>{
      setOpen(true);
    }
  return (
    <Grid item container xs={12} sm={12} justifyContent='center' spacing={4}>
    <Grid xs={12} sm={12} item container justifyContent='center'>
    <Typography className={classes.con}>Here is your Today's Contest Link<br/> </Typography>
    <Button className={classes.btn} href={props.x.contest_link}>Go to Contest</Button>
    </Grid>
    <Grid xs={12} sm={12} item container justifyContent='center'>
    <Typography className={classes.con}>Get today's Analysis </Typography> 
    <Button className={classes.btn} onClick={handleClick}>Get Analysis</Button>
    </Grid>
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Questions
        </Typography>
        <Button autoFocus color="inherit" onClick={handleClose}>
          Get Analysis
        </Button>
      </Toolbar>
    </AppBar>
    <Box m={10}>
	
        <Grid container justifyContent='center'>
      
      {
		  props.x.questions.map((value) => {
        return (
			<Grid item container>
			<Grid item container xs={6} sm={6}>
			<a href={value.url} target='_blank'><Button>{value.title}</Button></a>
			</Grid>
			<Grid item container justifyContent='flex-end' xs={6} sm={6}>
			<Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked[props.x.questions.indexOf(value)]}
               
              />
			</Grid>
			</Grid>
        );
      })}
	  </Grid>
	  </Box>
  </Dialog></Grid>
  );
}

export default Report;
