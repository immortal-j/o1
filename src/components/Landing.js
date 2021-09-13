import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box,Typography,Grid,Avatar} from '@material-ui/core';
import Lottie from './lottie';
import { findByPlaceholderText } from '@testing-library/react';
const useStyles = makeStyles((theme) => ({
  title:{
      textAlign:'center',
      color:'#8739f9',
      fontFamily:'Inter',
      fontSize:'52px',
      fontWeight:800,
      marginTop:90,
  },
  subtitle:{
    textAlign:'center',
    color:'#333',
    fontFamily:'Inter',
    fontSize:'20px',
    fontWeight:400,
    marginTop:7,
    },
    aboutus:{
        textAlign:'center',
        color:'#000',
        fontFamily:'Inter',
        fontSize:'44px',
        fontWeight:800,
        marginTop:-80,
    },
    aboutdesc:{
        textAlign:'center',
    color:'#333',
    fontFamily:'Inter',
    fontSize:'20px',
    fontWeight:400,
    marginRight:"7vw",
    marginLeft:"10vw",
    [theme.breakpoints.up('md')]: {
        marginRight:"30vw",
        marginLeft:"30vw",
      },
    },
    ftiles:{
      backgroundColor:"#8739f9",
      width:theme.spacing(8),
      height:theme.spacing(8),
      // marginLeft:'33vw',
      // [theme.breakpoints.up('md')]: {
      //   marginLeft:"14vw",
      // },
    },
    ftitle:{
      color:'#000',
      fontFamily:'Inter',
      fontSize:'24px',
      fontWeight:800,
    },
    fdesc:{
      color:'#333',
      fontFamily:'Inter',
      fontSize:'18px',
      fontWeight:400,
      textAlign:'center',
    }

   
  }));
  
function Landing()
{
    const classes = useStyles();
    return(
    <div>
    <Box>
    <br/>
    <br/>
        <Typography className={classes.title} >O(1) Coding Club</Typography>
        <Typography className={classes.subtitle}>Closer to your AMBITIONS,<br/>a step at a time.</Typography>
        <Lottie />
        <Typography className={classes.aboutus}  >About Us</Typography>
        <Box> <Typography className={classes.aboutdesc} >We get you placed in the biggest tech-giants of the country, be it off-campus or on-campus we got it all. Our experts train you & make you placement ready, but wait, just training is not the end of our journey, infact we are right there helping you throughout until you get placed, because ..."We dont just train you, We get you placed."</Typography></Box>
    </Box>

    <Box m={5}>
    <Grid container justifyContent='center' spacing={5}>
      
      <Grid item xs={12} sm={3} container justifyContent='center'>
      <Grid item container sm={12} justifyContent='center' >
      <Avatar className={classes.ftiles}><img src={"f1.svg"} ></img></Avatar>
      </Grid>
      <Typography className={classes.ftitle} >Beginner Friendly</Typography>
      <Grid item container sm={12} justifyContent='center' >
      <Typography className={classes.fdesc}>Our programs are tailor made and are beginner friendly. We want all to prosper and none to be left behind.</Typography>
      </Grid>
      </Grid>
      <Grid item xs={12} sm={3} container justifyContent='center'>
      <Grid item container sm={12} justifyContent='center' >
      <Avatar className={classes.ftiles}><img src={"f2.svg"} ></img></Avatar>
      </Grid>
      <Typography className={classes.ftitle} >Hands On</Typography>
      <Grid item container sm={12} justifyContent='center' >
      <Typography className={classes.fdesc}>Create from your learning. We focus on hands on. We believe practical knowledge is as important as conceptual knowledge.</Typography>
      </Grid>
      </Grid>
      <Grid item xs={12} sm={3} container justifyContent='center'>
      <Grid item container sm={12} justifyContent='center' >
      <Avatar className={classes.ftiles}><img src={"f3.svg"} ></img></Avatar>
      </Grid>
      <Typography className={classes.ftitle} >Keep it Simple</Typography>
      <Grid item container sm={12} justifyContent='center' >
      <Typography className={classes.fdesc}>We believe in simplicity. Learning can be very simple if you have the right approach. Keep simple, learn more.</Typography>
      </Grid>
      </Grid>
      <Grid item xs={12} sm={4} container justifyContent='center'>
      <Grid item container sm={12} justifyContent='center' >
      <Avatar className={classes.ftiles}><img src={"f4.svg"} ></img></Avatar>
      </Grid>
      <Typography className={classes.ftitle} >Domain Specialists</Typography>
      <Grid item container sm={12} justifyContent='center' >
      <Typography className={classes.fdesc}>We got experts in each domain to make your learning smooth and get you equipped with the right skills, the right way.</Typography>
      </Grid>
      </Grid>


      


      
    </Grid>
    </Box>

    </div>
    );
}
export default Landing ;