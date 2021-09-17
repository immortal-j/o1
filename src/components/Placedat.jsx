import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
const useStyles = makeStyles((theme) => ({
  
  center:{
    textAlign:'center',
        color:'#000',
        fontFamily:'Inter',
        fontSize:'35px',
        fontWeight:800,
  },
  title: {
    width:100,
    [theme.breakpoints.up('sm')]: {
        width: 125,
    },
},

  
}));

export default function Placedat() {
  const classes = useStyles();
    return (
      <div >
      <br/><br/>
        <Box m={2} p={1}>
        <h1 className={classes.center}>Our students are placed at</h1>
        <br/><br/>
        <Grid  container justifyContent='center' spacing={5}>
        <Grid container item xs={4} md={2} justifyContent='center'>
           <img src={"amazon.png"} className={classes.title} height="120" />
        </Grid>
        <Grid container item xs={4} md={2} justifyContent='center'>
           <img src={"vmware.png"} className={classes.title} height="120"  />
        </Grid>
        <Grid container item xs={4} md={2} justifyContent='center'>
           <img src={"bny-mellon.png"} className={classes.title} height="120"  />
        </Grid>
        <Grid container item xs={4} md={2} justifyContent='center'>
           <img src={"hackerearth.png"} className={classes.title} height="120"  />
        </Grid>
        <Grid container item xs={4} md={2} justifyContent='center'>
           <img src={"fivetran.png"} className={classes.title} height="120"  />
        </Grid>
        <Grid container item xs={4} md={2} justifyContent='center'>
           <img src={"ori_publicis_sapiens.png"} className={classes.title} height="120" />
        </Grid>
        <Grid container item xs={4} md={2} justifyContent='center'>
           <img src={"ori_sahaj.jpg"} className={classes.title} height="120" />
        </Grid>
        <Grid container item xs={4} md={2} justifyContent='center'>
           <img src={"ori_principal_global.png"} className={classes.title} height="120" />
        </Grid>
        <Grid container item xs={4} md={2} justifyContent='center'>
           <img src={"ori_tcs.png"} className={classes.title} height="120" />
        </Grid>
        <Grid container item xs={4} md={2} justifyContent='center'>
           <img src={"ori_infosys.png"} className={classes.title} height="120" />
        </Grid>
        <Grid container item xs={4} md={2} justifyContent='center'>
           <img src={"ori_lti.jpg"} className={classes.title} height="120" />
        </Grid>
        <Grid container item xs={4} md={2} justifyContent='center'>
           <img src={"ori_capgemini.jpg"} className={classes.title} height="120" />
        </Grid>
        <Grid container item xs={4} md={2} justifyContent='center'>
           <img src={"ori_cognizant.png"} className={classes.title} height="120" />
        </Grid>
        <Grid container item xs={4} md={2} justifyContent='center'>
           <img src={"ori_accenture.png"} className={classes.title} height="120" />
        </Grid>
        </Grid>
        </Box>
        <br></br>
        <br></br>
        <br></br>
        </div>
    );
}
