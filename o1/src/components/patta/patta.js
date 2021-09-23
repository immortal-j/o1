import React from 'react'
import {Box,Typography,Grid,Button,makeStyles,Card} from '@material-ui/core';
import Patacard1 from './pattacard1';
import Patacard2 from './pattacard2';
import Patacard3 from './pattacard3';
import Patacard4 from './pattacard4';
import Patalottie from './patalottie';

const useStyles = makeStyles((theme) => ({
    hr:{
        width:'75%',
      },
      title:{
          marginTop:'30px',
          fontWeight:600,
          fontSize:'32px',
          color:'#fff',
          display:'none',
          [theme.breakpoints.up('md')]: {
            display: 'block',
          },
      },
      pata:{
        backgroundColor: '#8739f9',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/3px-tile.png")',
       width:'100%',
        height:'260px',
        [theme.breakpoints.up('sm')]: {
            height:'345px'
        },
      }

  }));

function Patta(){
    const classes=useStyles();
    return(
        <div className={classes.pata}>
        <Box m={3} p={1}>
        <Grid container justifyContent='center'>
    
        <Grid item container xs={0} sm={6} justifyContent='center'>
            <Typography className={classes.title}>All these spectacular results in just 
            <br/>
            One Year</Typography>
        </Grid> 
        <Grid item container xs={0} sm={2} justifyContent='center' >
            
        </Grid>
        <Grid item container xs={12} sm={4} justifyContent='center' spacing={3}>
            <Grid container item xs ={6} sm={6} justifyContent='flex-end'>
                <Patacard1/>
            </Grid>
            <Grid container item xs ={6} sm={6} justifyContent='flex-start'>
                <Patacard2/>
            </Grid>
           
            <Grid container item xs ={6} sm={6} justifyContent='flex-end'>
                <Patacard3/>
            </Grid>
            <Grid container item xs ={6} sm={6} justifyContent='flex-start'>
                <Patacard4/>
            </Grid>
        </Grid>
        <Grid item xs={1}/>
        </Grid>
        </Box>
        <br/>
        <br/>
        <hr className={classes.hr}/>
        </div>
    )
}

export default Patta;