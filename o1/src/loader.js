import React, { useState,useEffect } from "react";
import {Button,makeStyles} from '@material-ui/core';
import Lower_Navbar from './components/Navbars/lower_navabar';
import Upper_Navbar from './components/Navbars/upper_navbar';
import Chartsloader from './components/Barcharts/chartsLoader';
import {Switch,Route,Redirect} from 'react-router-dom';
import Cardloader from './components/Cards/Cardloader';
import Footer from './components/Footer/Footer';
import Login from './components/Login/login';
import Loader2 from './components/Loader2';
import { read_cookie } from "sfcookies";

const useStyles = makeStyles((theme) => ({
 btn:{
   color:'#fff',
   backgroundColor:'#C400FF',
   marginTop:'30vh',
   marginLeft:'45vw',
   fontSize:'36px',
   fontWeight:600,
   '&:hover':{
     backgroundColor:'#f50057'
   }
 }
  
})) 

function Loader() {
  const classes=useStyles();
  const [status,setStatus]=useState("No");
 
  useEffect(()=>{
    var x=read_cookie("loggedin");
    if(x.length===0)
    {
      x="No";
    } 
    setStatus(x);
  },[])
  const handleLog = () =>{
    setStatus("yes");
  }
  const handleLogout = () =>{
    setStatus("No");
  }
  return (
    <div>
      
    <Switch>
    <Route exact path="/">
    <Loader2/>
    </Route>
    <Route exact path="/login">
    {console.log(status)}
    {status==="No"?<Login status={handleLog}/>:<Redirect to="/home"/>}
    </Route>


      <Route exact path="/home">
      {status==="yes"?
      <div className="home">
      <Upper_Navbar handleLogout={handleLogout}/>
      <Lower_Navbar/>
      <br></br>
      <br></br>
      <br></br>
      <Chartsloader/>
      <Footer />
      </div>:<Redirect to="/login"/>}
    </Route>

    <Route exact path="/practice">
    {status==="yes"?<div className="home">
    <Upper_Navbar handleLogout={handleLogout}/>
    <Lower_Navbar/>
      <Cardloader />
      <Footer />
      </div>:<Button className={classes.btn} href="/login">Login</Button>}
    
    </Route>
   
    </Switch>
    {/* {status==="yes"?<Redirect to="/home"/>:<Redirect to="/"/>} */}
    </div>
  );
}

export default Loader;
