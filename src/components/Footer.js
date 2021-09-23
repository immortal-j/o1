import { makeStyles, Typography,Grid,Button } from '@material-ui/core';
import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'




const useStyles = makeStyles((theme) => ({
   anchr:{
       color:'#555',
       textDecoration:'none',
       '&:hover':{
           color:'#FF2442'
       }
   }
})) 


function Footer(){
    const classes = useStyles();
    return (
        <section>
            <footer >
            <Grid container justifyContent='center'>
            <Grid item container  justifyContent='center' sm={4}>
            <Grid item container justifyContent='center'>
            <a href='/' ><img src={'logo2.svg'}  width="50" height="50"  /></a>
            </Grid>
            <Grid item container justifyContent='center'>
            <Typography className={classes.madeby}>Made by <b>O(1) Coding Club</b></Typography>
            </Grid>
            </Grid>
            <Grid xs={0} item sm={4}>
            </Grid>
            <Grid container item xs={12} sm={3} justifyContent='center'>
            <Grid item container xs={12} justifyContent='center' >
            <Button href="https://www.linkedin.com/in/o-1-coding-club/?originalSubdomain=in"><FontAwesomeIcon icon={faLinkedin} size="2x" color="#8739f9" /></Button>
            <Button href="https://www.youtube.com/channel/UCTLzD9A-M_ll2m7Wj45sHJg/featured"><FontAwesomeIcon icon={faYoutube} size="2x" color="#8739f9" /></Button>
            <Button href="https://instagram.com/o1codingclub?igshid=9cnjafv7rzkv"><FontAwesomeIcon icon={faInstagram} size="2x" color="#8739f9" /></Button>  
            </Grid>
            <Grid item container xs={12} justifyContent='center'>
            <a className={classes.anchr}><Typography className={classes.madeby}>o1codingclub.help@gmail.com</Typography></a>
            </Grid>
            </Grid>
            </Grid>
            <br></br>
            <br></br>
            
            </footer>            
        </section>
    )
}

export default Footer;