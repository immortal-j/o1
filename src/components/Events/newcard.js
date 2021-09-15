import React from 'react'
import Arr from './Array1'
import {Box,Typography,Grid,Button,makeStyles} from '@material-ui/core';
import EventCard from './EventCard';


const useStyles = makeStyles((theme) => ({
   ncroot:{
	maxWidth:450,
   },
   hname:{
	 fontSize: 25,  
   },
   coursecontainer:{
		maxWidth:350,
		[theme.breakpoints.up('sm')]: {
			maxWidth:600,
		},
   },
   course:{
	backgroundColor: '#fff',
	borderRadius:' 10px',
	boxShadow:' 0 10px 10px rgba(0, 0, 0, 0.2)',
	display: 'flex',
	minHeight:100, 
	margin: '20px',
	overflow: 'hidden',
	[theme.breakpoints.up('sm')]: {
        minHeight:250,
    },
   },
   courseinfo:{
	padding:'30px',
	position:'relative',
	width:'100%',
   },
   desfont:{
	   fontSize:15,
   },
   coursepreview :{
	backgroundColor: '#2A265F',
	color:'#fff',
	padding: '30px',
	minWidth:'100px',
	[theme.breakpoints.up('sm')]: {
        minWidth:'150px',
    },
},
btn:{
	borderRadius:25,
	fontSize:9,
},
  }));

function NewCard(props){
    const classes=useStyles();
    return(
        <div >
       <div className={classes.coursecontainer}>
	<div className={classes.course}>
		<div className={classes.coursepreview}>
			<h6>Event</h6>
			<Typography className={classes.hname} >{props.event.name}</Typography>
		</div>
		<div className={classes.courseinfo}>
			<h6>About</h6>
			<Typography className={classes.desfont}>{props.event.description1}</Typography>
			<br/>
			<Button className={classes.btn} variant="contained" color="secondary">Read more</Button>
		</div>
	
	</div>
</div>


        </div>
    )
}

export default NewCard;