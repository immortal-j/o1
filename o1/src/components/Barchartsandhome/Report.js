import React from 'react';
import { useState } from 'react';
import {Box,Grid,Checkbox,AppBar, makeStyles,Button, Dialog,ListItemText,ListItem,List,Divider,Toolbar,IconButton,Typography,Slide } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
function Report(props) {
    const classes=useStyles();
    const [tosend,setTosend]=useState([]);
	const [checked, setChecked] = React.useState([false,false,false,false,false,false]);
    const [open, setOpen] = React.useState(true);



    const handleToggle = (value) => () => {
        var newChecked = [...checked];
        var tos=[...tosend]
        
        if(newChecked[value]===false)
        {
            newChecked[value]=true;
            tos.push(props.x.problems[value]);
        }
        else if(newChecked[value]===true && props.x.status[value]===false)
        {
            newChecked[value]=false;
            tos.splice(tos.indexOf(props.x.problems[value]),1);
        }
        setTosend(tos);
        setChecked(newChecked);
      };


    const handleClose = () => {
        setOpen(false);
      };
  return (
    <Dialog fullScreen open={false} onClose={handleClose} TransitionComponent={Transition}>
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Sound
        </Typography>
        <Button autoFocus color="inherit" onClick={handleClose}>
          Get Report
        </Button>
      </Toolbar>
    </AppBar>
    <Box m={10}>
	
        {/* <Grid container justifyContent='center'>
      {console.log(props.x)}
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
                onChange={handleToggle(value.url)}
                checked={checked[props.x.problems.indexOf(value.url)]}
               
              />
			</Grid>
			</Grid>
        );
      })}
	  </Grid> */}
	  </Box>
  </Dialog>
  );
}

export default Report;
