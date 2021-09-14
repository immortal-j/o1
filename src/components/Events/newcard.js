import React from 'react'
import Arr from './Array1'
import {Box,Typography,Grid,Button,makeStyles} from '@material-ui/core';
import EventCard from './EventCard';


const useStyles = makeStyles((theme) => ({
   ncroot:{
	   minHeight: 300,
	   minWidth: 300,
	   marginBottom: -56,
	   marginTop: -10,
   },
   hname:{
	 fontSize: 25,  
   }
  }));

function NewCard(props){
    const classes=useStyles();
    return(
        <div className={classes.ncroot}>
       <div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Course</h6>
			<Typography className={classes.hname} >{props.event.name}</Typography>
			<a href="#">View all chapters <i class="fas fa-chevron-right"></i></a>
		</div>
		<div class="course-info">
			<h6>Chapter 4</h6>
			<Typography>{props.event.description1}</Typography>
		</div>
	</div>
</div>


        </div>
    )
}

export default NewCard;