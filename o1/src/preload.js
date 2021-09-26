import React from 'react';
import {useState,useEffect} from 'react';
import ClipLoader from "react-spinners/RiseLoader";


function Preload() {
  const [loading,setLoading]=useState(false);
  useEffect(() => {
   setLoading(true)
   setTimeout(()=>{
      setLoading(false);
   },11000)
  }, [])
  return (
    <div>
    <div className="loader"><ClipLoader color={'#8739f9'} loading={loading} size={20} margin={3} /></div>
    </div>
  );
}

export default Preload;
