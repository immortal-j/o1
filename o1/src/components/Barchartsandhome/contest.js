import React from "react";
import {Typography} from '@material-ui/core';
import Report from "./Report";
function Contest(props) {
  return (
      <div>
   <Typography>Todays contest link</Typography>
  
   <Report x={props.x} />
   </div>
  );
}

export default Contest;
