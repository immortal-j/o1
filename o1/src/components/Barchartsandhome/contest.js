import React from "react";
import {Typography,Grid} from '@material-ui/core';
import Report from "./Report";
function Contest(props) {
  return (
     <Grid item container xs={12} sm={12} justifyContent='center'>
   <Report x={props.x} uid={props.uid} statuschange={props.statuschange} />
   </Grid>
  );
}

export default Contest;
