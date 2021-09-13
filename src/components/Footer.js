import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import logo from './../assets/images/logo2.png'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'




const useStyles = makeStyles((theme) => ({
    image:{
        marginLeft: '150px',
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    madeby:{    
        marginLeft: '125px',
        marginTop: '-10px',
        marginBottom:'45px',
        color:'#eceded',
    }
})) 


function Footer(){
    const classes = useStyles();
    return (
        <section>
            <footer >
            <img className={classes.image} src={logo}  width="100" height="100"  />
            <Typography className={classes.madeby}  >Made by <b>o1codingclub</b></Typography>
            <FontAwesomeIcon icon={['fab', 'apple']} />
            </footer>            
        </section>
    )
}

export default Footer;