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
        fontSize:'35px',
        fontWeight:800,
    }
  }));
function Alumni()
{
    const [status,setstatus]=useState(false);
    const [status2,setstatus2]=useState(false);
    const [arr,setarr]=useState([]);
    if(status===false)
    {
        setstatus(true);
        setarr(Arr);
    }
    function handleClick(){
       
        if(!status2)
        {
        setstatus2(true);
        setarr((prev)=>{
            return [...prev,...Arr2];
        })
        }
        else
        {

            setstatus2(false);
            setarr(Arr);
        }
    }
    const classes=useStyles();
    return(
    <div>
    <section id="Alumni" >
    <Box m={10}  >
    <Grid container justifyContent='center' spacing={0}>
        <Grid item container xs={12} sm={12} justifyContent='center'>
        <Typography className={classes.title}>
        Stories to inspire
        </Typography>
        </Grid>
        <Grid item xs={0} sm={1}></Grid>
        <Grid item container xs={12} sm={10} justifyContent='center' spacing={3}>
        {arr.map(user => (
            <Grid item container xs={12} sm={4} justifyContent='center'>
                <Card user={user}/>
            </Grid>

        ))}
        </Grid>
        
        <Grid item xs={0} sm={1}></Grid>
        <Grid item sm={12}><br></br></Grid>
        <Grid item container xs={12} justifyContent='center'>
        <br/><br/>
        <Button variant='contained' color='secondary' onClick={handleClick}>{status2?'See Less':'More Stories'}</Button>
        </Grid>
       
    </Grid>

      </Box>
      </section>
    </div>
    );
}
export default Alumni ;