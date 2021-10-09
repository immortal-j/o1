import React from "react";
import { Line } from "react-chartjs-2";

function Linechart(props) {
  return (
    <Line
      data={props.obj}
      height={300}
      width={400}
      options={{
        maintainAspectRatio: false,
        plugins:{
        legend:{
          labels:{
            boxHeight:1,
          }
        }
      }
      }}
    />
  );
}

export default Linechart;
