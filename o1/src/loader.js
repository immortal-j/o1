import React, { useState,useEffect,lazy,Suspense } from "react";
import {Switch,Route,Redirect} from 'react-router-dom';
import Loader2 from './components/Loader2';

const Loginloader = lazy(()=>import('./Loginloader'));


function Loader() {
 
  return (
    <div>
      
    <Switch>
    <Route exact path="/">
    <Loader2/>
    </Route>
    <Suspense>
   <Loginloader/>
   </Suspense>
    </Switch>
    </div>
  );
}

export default Loader;