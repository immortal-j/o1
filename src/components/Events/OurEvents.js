import React from 'react'
import Arr from './Array1'
import {Box,Typography,Grid,Button,makeStyles} from '@material-ui/core';
import EventCard from './EventCard';
import NewCard from './newcard'

const useStyles = makeStyles((theme) => ({
    title:{
        textAlign:'center',
        color:'#000',
        fontFamily:'Inter',
        fontSize:'35px',
        fontWeight:800,
    },
  }));

function OurEvents(){
    const classes=useStyles();
    return(
        <div>
        <Box m={10}>
            <Grid container justifyContent='center' spacing={2}>
                <Grid item container xs={12} justifyContent='center'>
                    <Typography className={classes.title}>
                    Our Events
                    </Typography>
                </Grid>
                <Grid container item xs={12} sm={12} justifyContent='center' spacing={0} >
                {Arr.map((e) => (
                    <Grid item container xs={12} sm={6} justifyContent='center'>
                        <NewCard event={e} />
                    </Grid>
                ))} 
                </Grid>
               
            </Grid>
        </Box>
        </div>
    )
}

export default OurEvents;