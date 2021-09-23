
import React, { useEffect,useState } from 'react';
import {Grid,Box,Paper,makeStyles, Typography,Button,Checkbox,Container} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  wi:{
     border:'1px solid black',
  },
  btn:{
    backgroundColor:'#C400FF',
    color:'#fff',
  },
  anchr:{
    textDecoration:'none',
  },
  btn2:{
    fontSize:'18px',
  }
    
 })) 
function Diagtable(props) {
    const classes=useStyles();
    const [checked, setChecked] = useState(props.x.status);
    const [tosend,setTosend]=useState([]);
    const handleToggle = (value) => () => {
        var newChecked = [...checked];
      
        var tos=[...tosend]
        if(newChecked[value]===false)
        {
            newChecked[value]=true;
            tos.push(props.x.problems[value]);  
        }
        else if(newChecked[value]===true && props.x.status[value]===false)
        {
          newChecked[value]=false;
          tos.splice(tos.indexOf(props.x.problems[value]),1);
        }
        setTosend(tos);
        console.log(tosend);
        setChecked(newChecked);
      };
      const handleClick = () =>{
        props.mark({'id':props.x.id,'problems':tosend});
      }
  return (
    <div>
  { props.x.problems.map((value)=>{
        return(
            <Grid sm={12} xs={12} item container justifyContent='center' className={classes.wi}>
			<Grid item container xs={6} sm={4} justifyContent='center'>
			<a className={classes.anchr} href={value} target='_blank' ><Button className={classes.btn2}>{props.x.names[props.x.problems.indexOf(value)]}</Button></a>
			</Grid>
            <Grid item container xs={0} sm={4} justifyContent='center'>
			<Typography>{props.x.ratings[props.x.problems.indexOf(value)]}</Typography>
			</Grid>
			<Grid item container justifyContent='center' xs={6} sm={4}>
			<Checkbox
                edge="end"
                onChange={handleToggle(props.x.problems.indexOf(value))}
                checked={checked[props.x.problems.indexOf(value)]}
               
              />
			</Grid>
			</Grid>
          
        )
       })}
       <br/><br/>
       <Grid container item xs={12} sm={12} justifyContent='center'>
       <Button className={classes.btn} onClick={handleClick}>Submit</Button>
       </Grid>
      
       </div>
        
  );
}

export default Diagtable;