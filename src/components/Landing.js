import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box,Typography} from '@material-ui/core';
import Lottie from './lottie';
const useStyles = makeStyles((theme) => ({
  title:{
      textAlign:'center',
      color:'#8739f9',
      fontFamily:'Inter',
      fontSize:'52px',
      fontWeight:800,
  },
  subtitle:{
    textAlign:'center',
    color:'#9ca9b3',
    fontFamily:'Inter',
    fontSize:'20px',
    fontWeight:400,
    marginTop:7,
    },
    aboutus:{
        textAlign:'center',
        color:'#eceded',
        fontFamily:'Inter',
        fontSize:'44px',
        fontWeight:800,
        marginTop:-80,
    },
    aboutdesc:{
        textAlign:'center',
    color:'#9ca9b3',
    fontFamily:'Inter',
    fontSize:'20px',
    fontWeight:400,
    marginRight:"7vw",
    marginLeft:"10vw",
    [theme.breakpoints.up('md')]: {
        marginRight:"30vw",
        marginLeft:"30vw",
      },
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
        <Box>  <Typography className={classes.aboutdesc} >We get you placed in the biggest tech-giants of the country, be it off-campus or on-campus we got it all. Our experts train you & make you placement ready, but wait, just training is not the end of our journey, infact we are right there helping you throughout until you get placed, because ..."We dont just train you, We get you placed."</Typography></Box>
    </Box>
    </div>
    );
}
export default Landing ;