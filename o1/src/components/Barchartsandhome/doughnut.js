
import React from "react";
import {Doughnut} from "react-chartjs-2";
function Doughnutchart(props) {
  return (
   
         <Doughnut
            data={props.obj}
            height={400}
            width={400}
            options={{
            maintainAspectRatio:false,
            }}
        />
      
   
  );
}

export default Doughnutchart;
