import React, { useEffect,useState } from 'react';
import {Grid,Box,Paper,makeStyles, Typography,Button,Checkbox,Container} from '@material-ui/core';
import Barchart from './Barchart';
import Linechart from './Linechart';
import Doughnut from './doughnut';
import Diagtable from './diagtable';
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
export default function ChartsLoader() {
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        getdata();
    },[])
    const arrlen=arr.length;
	
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
       <Box m={8}>
            <Grid container spacing={4}>
            {/* 4 cards */}
            <Grid item xs={12} sm={12}>
            <div className={classes.up}>
                <Typography variant="h3" className={classes.diagnosis}> Hi Rishikesh</Typography>
                <Typography variant="h6">Our algorithm analysed your recent contest's performance and found out the following scopes of improvement for you :-</Typography>
            </div>
            </Grid>
          
           <br/>
           <br/>
           <br/>   
           
                     <Grid container item xs={6} sm={6} justifyContent='flex-end'>
                        <Paper className={classes.card} elevation={2}>
                         <Typography type="h1" className={classes.cardtitle}>Today's Weakest Topic</Typography>
                         <Typography type="h1" className={classes.cardContent}>Dynamic Programming</Typography>
                         </Paper>
                    </Grid>
                    <Grid container item xs={6} sm={6} justifyContent='flex-start'>
                         <Paper className={classes.card} elevation={2}>
                    <Typography type="h1" className={classes.cardtitle}>Targeted Rating to Achieve</Typography>
                    <Typography type="h1" className={classes.cardContent}>1500</Typography>
                    </Paper>
                    </Grid>
           
                <Grid item container xs={12} sm={12} justifyContent='center'>
                <Typography variant="h6">To overcome the above weakness we handpicked some diagnosis questions specially for you which should be mandatorily solved.</Typography>
                </Grid>
                <br/>
                <br/>
                <Grid item sm={12}>
                <Container maxWidth="xl">
                <Grid sm={12} xs={12} item container justifyContent='center' className={classes.wi}>
                <Grid className={classes.diagheader} item container xs={6} sm={4} justifyContent='center'>
			        <Typography variant="h5">Problems</Typography>
			    </Grid>
                <Grid className={classes.diagheader} item container xs={6} sm={4} justifyContent='center'>
			        <Typography variant="h5">Rating</Typography>
			    </Grid>
                <Grid  className={classes.diagheader} item container xs={6} sm={4} justifyContent='center'>
			        <Typography variant="h5">Status</Typography>
			    </Grid>
                </Grid>
                        {arrlen>0?<Diagtable mark={markque} x={arr[arr.length-1]}/>:''}
                 </Container>
                </Grid>
                {/* Rating Wise Problem Solved Graph */}
                <Grid item xs={12}>
                    <h1 className={classes.charttitle}>Rating Wise Problems Solved</h1>
                    <Paper elevation={3}><Barchart obj={obj1}/></Paper>
                 </Grid>
                <Grid item xs={12}>
                {/* Rating Graph */}
                    <h1 className={classes.charttitle}>Rating Graph</h1>
                    <Paper elevation={3}><Linechart obj={obj2}/></Paper>
                </Grid>
                {/* TagWise probelm Solved */}
                <Grid item xs={12}>
                    <h1 className={classes.charttitle}>Tag wise Problems Solved</h1>
                    <Paper elevation={3}><Doughnut obj={obj3}/></Paper>
                </Grid>


                </Grid>


               
            
        </Box>
    </div>
  );
}
