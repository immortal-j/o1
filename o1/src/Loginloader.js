import React, { useState,useEffect,lazy,Suspense } from "react";
import {makeStyles} from '@material-ui/core';
import Lower_Navbar from './components/Navbars/lower_navabar';
import Upper_Navbar from './components/Navbars/upper_navbar';
import {Switch,Route,Redirect} from 'react-router-dom';
import Login from './components/Login/login';
import { read_cookie } from "sfcookies";
import Preload from "./preload";
const Chartsloader = lazy(()=>import('./components/Barcharts/chartsLoader'));
const Footer = lazy(()=>import('./components/Footer/Footer'));
const Button = lazy(()=>import('@material-ui/core'));
const Cardloader = lazy(()=>import('./components/Cards/Cardloader'));
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
      
  
   
    <Route exact path="/login">
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
      <Suspense fallback={<Preload/>}>
      <Chartsloader/>
      </Suspense>
      <Suspense fallback={<Preload/>}>
      <Footer />
      </Suspense>
      </div>:<Redirect to="/login"/>}
    </Route>

    <Route exact path="/practice">
    {status==="yes"?<div className="home">
    <Upper_Navbar handleLogout={handleLogout}/>
    <Lower_Navbar/>
    <Suspense fallback={<Preload/>}>
      <Cardloader />
      </Suspense>
      <Suspense fallback={<Preload/>}>
      <Footer />
      </Suspense>
      </div>:<Suspense fallback={<Preload/>}><Button className={classes.btn} href="/login">Login</Button></Suspense>}
    
    </Route>
    </div>
  );
}

export default Loader;
