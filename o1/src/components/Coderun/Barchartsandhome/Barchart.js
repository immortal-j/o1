import React from "react";
import { Bar } from "react-chartjs-2";
function barchart(props) {
  return (
    <Bar
      data={props.obj}
      height={300}
      width={400}
      options={{
        maintainAspectRatio: false,
        plugins:{
        legend:{
          labels:{
            boxWidth:0,
          }
        }
      }
      }}
      
    />
  );
}

export default barchart;
