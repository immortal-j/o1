import React, { useEffect, useRef } from 'react'
import Arr from './Array1'
import {Box,Typography,Grid,Button,makeStyles} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import lottie from 'lottie-web';
import TrophyMake from './TrophyMake';

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
	   fontSize:9,
	   [theme.breakpoints.up('sm')]: {
		fontSize:20,
	},
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
		[theme.breakpoints.up('sm')]: {
        	fontSize:12,
    	},
	},
	dlgtitle:{
		backgroundColor: '#000',
		flex: 1,
		textAlign: 'center',
		color: '#fff',
		fontSize: '35px',
		marginBottom: '2px',
		fontFamily:'Roboto,sans-serif',	
		fontWeight: 600
	},
	dlgcontent:{
		margin: '15px 8px 8px 8px',  
		fontFamily:'Roboto,sans-serif',
		fontSize: '25px'
	},
	dlg:{
	}
}));

  const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
  });

function NewCard(props){
    const classes=useStyles();
    const [expanded, setExpanded] = React.useState(false);
  	const [open, setOpen] = React.useState(false);
	const container = useRef(null);

	useEffect(() => {
		lottie.loadAnimation({
		  container: container.current,
		  renderer: 'svg',
		  loop: true,
		  autoplay: true,
		  animationData: require('./trophy.json')
		})
	  }, [])


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
	
	return(
        <div >
       <div className={classes.coursecontainer}>
	<div className={classes.course}>
		<div className={classes.coursepreview}>
			<h6>Event</h6>
			<Typography className={classes.hname} >{props.event.name}</Typography>
			<TrophyMake />
		</div>
		<div className={classes.courseinfo}>
			<h6>About</h6>
			<Typography className={classes.desfont}>{props.event.description1}</Typography>
			<br/>
			<Button className={classes.btn} onClick={handleClickOpen} variant="contained" color="secondary">Details</Button>
		</div>
		<Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
	  {/* <Grid container item xs={0} sm={3}   ></Grid> */}
        <Grid container item xs={12} className={classes.dlg} >
		<Typography className={classes.dlgtitle}>{props.event.name}</Typography>
		<Typography className={classes.dlgcontent} >{props.event.description2}</Typography>
		</Grid>
		{/* <Grid container item xs={0} sm={3} ></Grid> */}
      </Dialog>
	</div>
</div>


        </div>
    )
}

export default NewCard;