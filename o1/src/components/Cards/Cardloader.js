import React,{useEffect,useState} from 'react'
import {Box,Grid} from '@material-ui/core';
import NewCard from './newcard';
import axios from 'axios';



function OurEvents(){
    const [arr,setArr]=useState([]);

    useEffect(()=>{
        getdata();
    },[]);

    async function getdata(){
         await axios.get(`https://coderun-temp.herokuapp.com/`)
        .then(function (response) {
            setArr(response.data);
          })
          .catch(function (error) {
            console.log(error);
          })
      }

      function markque(tosend) {
        console.log(tosend);
        axios.post(`https://coderun-temp.herokuapp.com/update`,tosend);
        getdata();
      }

    return(
        <div>
        <Box>
            <Grid container justifyContent='center'>
           
          {
               arr.map((x)=>{
                return(
                    <Grid item xs={12} sm={4} container justifyContent='center'>
                    <NewCard x={x} ts={markque}/>
                </Grid>
                );
            }).reverse()
          }
            </Grid>
        </Box>
        </div>
    )
}

export default OurEvents;