import React,{useEffect,useState} from 'react'
import {Box,Grid} from '@material-ui/core';
import NewCard from './newcard';
import axios from 'axios';



function Practiceloader(props){
    const [arr,setArr]=useState([]);

    useEffect(()=>{
        getdata();
    },[]);

    async function getdata(){
         await axios.post(`http://coderun-temp.herokuapp.com/diagnosis/`,{
           "uid":props.uid
         })
        .then(function (response) {
          console.log(response);
            setArr(response.data);
          })
          .catch(function (error) {
            console.log(error);
          })
      }

      function markque(tosend) {
        axios.post(`https://coderun-temp.herokuapp.com/update/`,tosend);
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
                    <NewCard x={x} uid={props.uid} ts={markque}/>
                </Grid>
                );
            }).reverse()
          }
            </Grid>
        </Box>
        </div>
    )
}

export default Practiceloader;