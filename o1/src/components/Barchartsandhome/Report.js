import React from 'react';
import { useState } from 'react';
import {Box,Grid,Checkbox,AppBar, makeStyles,Button, Dialog,ListItemText,ListItem,List,Divider,Toolbar,IconButton,Typography,Slide } from '@material-ui/core';
import axios from 'axios';
import CloseIcon from '@material-ui/icons/Close';
import { color } from '@mui/system';
import {delete_cookie,bake_cookie} from 'sfcookies';

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
      fontSize:'18px',
      fontWeight:600,
    },
    image:{
        height:"150px",
        width:"300px",
        [theme.breakpoints.up('sm')]: {
          height:"400px",
          width:"800px",
    	},
    }
  }));
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });



function Report(props) {
    const classes=useStyles();
	const [checked, setChecked] = useState([false,false,false,false,false,false]);
    const [open, setOpen] = useState(false);

 
    const handleToggle = (value) => () => {
        var newChecked = [...checked];
        
        if(newChecked[value]===false)
        {
            newChecked[value]=true;
        }
        else if(newChecked[value]===true)
        {
            newChecked[value]=false;
        }
        setChecked(newChecked);
      };


    const handleClose = () => {
        setOpen(false);
      };
      const handleClosewithpost = () => {
     
         var obj={ 
           "uid":props.uid,
           "questions": props.x.questions,
            "status":checked
            }
      axios.post(`http://coderun-temp.herokuapp.com/report/`,obj);
      props.statuschange(true);
            delete_cookie("conteststatus");
            bake_cookie("conteststatus",true);
        setOpen(false);
        window.location.reload();
      };

    const handleClick = () =>{
      setOpen(true);
    }
  return (
    <Grid item container xs={12} sm={12} justifyContent='center' spacing={4}>
    <Grid xs={12} sm={12} item container justifyContent='center'>
   <a href={props.x.contest_link} target="_blank"> <img src="banner.jpeg" className={classes.image}/></a>
    {/* <Typography className={classes.con}>Here is your Today's Contest Link<br/> </Typography> */}
    
    {/* <Button className={classes.btn} href={props.x.contest_link}>Go to Contest</Button> */}
    </Grid>
    <Grid xs={12} sm={12} item container justifyContent='center'>
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
        <Button autoFocus color="inherit" onClick={handleClosewithpost}>
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
                onChange={handleToggle(props.x.questions.indexOf(value))}
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
