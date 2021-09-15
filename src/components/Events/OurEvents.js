import React from 'react'
import Arr from './Array1'
import {Box,Typography,Grid,Button,makeStyles} from '@material-ui/core';
import EventCard from './EventCard';
import NewCard from './NewCard'

const useStyles = makeStyles((theme) => ({
    title:{
        textAlign:'center',
        color:'#000',
        fontFamily:'Inter',
        fontSize:'35px',
        fontWeight:800,
    }
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
                {/* <Grid item xs={0} sm={1}>
                </Grid> */}
                <Grid container item xs={12} sm={12} justifyContent='center' spacing={7} >
                {Arr.map((e) => (
                    <Grid item container xs={12} sm={6} justifyContent='center'>
                        {/* <EventCard event={e} /> */}
                        <NewCard event={e} />
                    </Grid>
                ))} 
                </Grid>
                {/* <Grid item sm={1} xs={0}>
                </Grid> */}
            </Grid>
        </Box>
        </div>
    )
}

export default OurEvents;