import React, { useEffect,useState } from 'react';
import {Grid,Box,Paper,makeStyles, Typography,Button,Checkbox,Container} from '@material-ui/core';
import Barchart from './Barchart';
import Linechart from './Linechart';
import Doughnut from './doughnut';
import Contest from './contest';
import Diagtableloader from './Diagtableload';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  charttitle:{
      textAlign:'center',
      fontWeight:400,
      marginTop: "5%"
  },
  card:{
    minHeight:140,
    maxWidth:"150px",
    marginBottom: "30px",
    [theme.breakpoints.up('sm')]: {
        minHeight:190,
    },
  },
  cardtitle:{
      color:"#fff",
      textAlign:'center',
      backgroundColor:'#C400FF',
      fontSize:20,
      [theme.breakpoints.up('sm')]: {
        fontSize:25,
    },
  },
  cardContent:{
      fontSize:20,
      marginTop:30,
      [theme.breakpoints.up('sm')]: {
        marginTop:60,
    },
    textAlign:'center',
  
  },
  diagnosis:{
      fontFamily:'Inter',
    fontSize:'44px',
    fontWeight:600,
  },
  up:{
      marginTop:'-60px',
  },
  wi:{
    border:'1px solid black',
 },
 diagheader:{
     backgroundColor:'#000',
     color:'#fff',
 }
   
  }));
export default function ChartsLoader(props) {
    const [arr,setArr]=useState([]);
    const [contestdata,setContestdata]=useState(null);
    var obj1,obj2,obj3;
    useEffect(()=>{
        getgraphs();
        getdata();
    },[])
    const arrlen=arr.length;
    async function getgraphs(){
       await axios.post(`http://coderun-temp.herokuapp.com/chartdata/`,{
           "uid":props.uid,
       })
       .then(function(response){
        console.log(response);
       })
       .catch(function(err){
           console.log(err);
       })
     }




    async function getdata(){
        await axios.get(`http://coderun-temp.herokuapp.com/contest/`)
       .then(function (response) {
           setContestdata(response.data);
         })
         .catch(function (error) {
           console.log(error);
         })
        await axios.post(`http://coderun-temp.herokuapp.com/diagnosis/`,
          {
            "uid":props.uid
          })
       .then(function (response) {
           setArr(response.data);
         })
         .catch(function (error) {
           console.log(error);
         })
     }

     function markque(tosend) {
        axios.post(`https://coderun-temp.herokuapp.com/update/`,tosend);
        console.log("ye wala dekh");
        console.log(tosend);
        getdata();
      }

    const classes=useStyles();
    var obj1={
        labels: ['800', '900', '1000', '1100', '1200', '1300','1500','1600','1700','1800'],
        datasets: [{
            label: 'Problems Solved',
            data: [12, 19, 3, 5, 2, 3,1,4,2,5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
    var obj2={
        labels: ['1', '2', '3', '4', '5', '6','7','8','9','10'],
        datasets: [{
            label: 'Rating',
            data: [1200, 1000, 300, 1700, 1600, 1600,1500,1200,1300,1100],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    }
    var obj3={
        labels: ['Maths', 'Greedy', 'Implemantaion', 'Binary Search', 'Data Structures', 'Searching','String','Graphs','DP'],
        datasets: [{
            label: 'Problems Solved',
            data: [12, 19, 3, 5, 2, 3,1,4,2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(230, 100, 192, 0.8)',
                'rgba(130, 10, 25, 0.8)',
                'rgba(200, 255, 34, 0.8)',

            ],
            hoverOffset:4,
        }]
    }
  return (
    <div >
       <Container>
            <Grid container xs={12} sm={12} justifyContent='center'>
               {contestdata==null? <Contest x={contestdata}/>
                           :<Diagtableloader uid={props.uid} arr={arr} arrlen={arrlen} mark={markque} />}
            </Grid>
        </Container>
        <Container>
            <Grid container spacing={4}>
           
                <Grid item xs={12} sm={12}>
                    <h1 className={classes.charttitle}>Rating Wise Problems Solved</h1>
                    <Paper elevation={3}><Barchart obj={obj1}/></Paper>
                 </Grid>
                <Grid item xs={12} sm={12}>
             
                    <h1 className={classes.charttitle}>Rating Graph</h1>
                    <Paper elevation={3}><Linechart obj={obj2}/></Paper>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <h1 className={classes.charttitle}>Tag wise Problems Solved</h1>
                    <Paper elevation={3}><Doughnut obj={obj3}/></Paper>
                </Grid>


            </Grid>
        </Container>
    </div>
  );
}
