import React from 'react'
import Arr from './Array1'
import {Box,Typography,Grid,Button,makeStyles} from '@material-ui/core';
import EventCard from './EventCard';


const useStyles = makeStyles((theme) => ({
    title:{
        textAlign:'center',
        color:'#000',
        fontFamily:'Inter',
        fontSize:'44px',
        fontWeight:800,
    }
  }));

function OurEvents(){
    const classes=useStyles();
    return(
        <div>
        <Box m={8}>
            <Grid container justifyContent='center' spacing={3}>
                <Grid item container xs={12} sm={12} justifyContent='center'>
                    <Typography className={classes.title}>
                    Our Events
                    </Typography>
                </Grid>
                {Arr.map((e) => (
                    <Grid item container xs={12} sm={6} justifyContent='center'>
                        <EventCard event={e} />
                    </Grid>
                ))} 
            </Grid>
        </Box>
        </div>
    )
}

export default OurEvents;