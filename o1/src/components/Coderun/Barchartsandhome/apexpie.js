import React from "react";
import Chart from "react-apexcharts";
function ApexPie(props) {
  return (
    <Chart
      type="donut"
      height={300}
      series={[44,56,56]}
      options={{
        labels:props.obj.labels,
       
      }}
    ></Chart>
  );
}

export default ApexPie;
