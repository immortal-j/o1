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
        // console.log(tos);
        // console.log(newChecked);
        setTosend(tos);
        setChecked(newChecked);
        // console.log(tosend);
        // console.log(checked);
      };
      const handleClick = () =>{
        props.mark({'uid':props.uid,'day':props.x.id,'problems':tosend});
      }
  return (
    <div>
    {console.log(props.x)}
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

// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'firstName',
//     headerName: 'First name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, 'firstName') || ''} ${
//         params.getValue(params.id, 'lastName') || ''
//       }`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function Diagtable() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//         disableSelectionOnClick
//       />
//     </div>
//   );
// }


