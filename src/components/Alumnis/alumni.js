import React from 'react';
import { useState } from 'react';
import {Box,Typography,Grid,Button,makeStyles} from '@material-ui/core';
import Card from './card';
import Arr from './array';
import Arr2 from './array2';
const useStyles = makeStyles((theme) => ({
    title:{
        textAlign:'center',
        color:'#000',
        fontFamily:'Inter',
        fontSize:'44px',
        fontWeight:800,
    }
  }));
function Alumni()
{
    const [arr,setarr]=useState([]);
    function handleClick(){
       
        arr=arr+Arr2;
        console.log(arr);
        
    }
    const classes=useStyles();
    return(
    <div>
    <Box m={10}>
    <Grid container justifyContent='center' spacing={3}>
        <Grid item container xs={12} sm={12} justifyContent='center'>
        <Typography className={classes.title}>
        Our Alumnis
        </Typography>
        </Grid>
        {Arr.map((user) => (
            <Grid item container xs={12} sm={3} justifyContent='center'>
                <Card user={user}/>
            </Grid>
        ))}
        <Grid item container xs={12} justifyContent='center'>
        <Button onClick={handleClick}>More</Button>
        </Grid>
       
    </Grid>

      </Box>
    </div>
    );
}
export default Alumni ;