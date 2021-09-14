import { makeStyles, Typography,Grid,Button } from '@material-ui/core';
import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'




const useStyles = makeStyles((theme) => ({
    madeby:{    
        marginLeft: '125px',
        marginTop: '-10px',
        marginBottom:'45px',
        color:'#333',
        flexGrow:1,
    }
})) 


function Footer(){
    const classes = useStyles();
    return (
        <section>
            <footer >
            <Grid container>
            <Grid item container  justifyContent='center' xs={3}>
            <img className={classes.image} src={'logo2.svg'}  width="50" height="50"  />
            <Typography className={classes.madeby}  >Made by <b>o1codingclub</b></Typography>
            </Grid>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={3}>
            <Button>hello</Button>
            </Grid>
            </Grid>
            
            </footer>            
        </section>
    )
}

export default Footer;