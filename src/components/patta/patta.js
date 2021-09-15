import React from 'react'
import {Box,Typography,Grid,Button,makeStyles,Card} from '@material-ui/core';
import Patacard1 from './pattacard1';
import Patacard2 from './pattacard2';
import Patacard3 from './pattacard3';
import Patacard4 from './pattacard4';
const useStyles = makeStyles((theme) => ({
    hr:{
        width:'75%',
      }
  }));

function Patta(){
    const classes=useStyles();
    return(
        <div style={{backgroundColor:'rgb(135, 57, 249,1)',height:'300px'}}>
        <Box m={3} p={5}>
        <Grid container justifyContent='center'>
    
        <Grid item xs={1}/> 
        <Grid item container xs={10} justifyContent='center' spacing={3}>
            <Grid container item xs ={6} sm={3} justifyContent='center'>
                <Patacard1/>
            </Grid>
            <Grid container item xs ={6} sm={3} justifyContent='center'>
                <Patacard2/>
            </Grid>
            <Grid container item xs ={6} sm={3} justifyContent='center'>
                <Patacard3/>
            </Grid>
            <Grid container item xs ={6} sm={3} justifyContent='center'>
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