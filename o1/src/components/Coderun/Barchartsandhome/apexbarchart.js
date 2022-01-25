import React from "react";
import Chart from "react-apexcharts";
function ApexBar(props) {
  return (
    <Chart
      type="bar"
      height={300}
      series={[
        {
          name: "problems solved",
          data: props.obj.data,
        },
      ]}
      options={{
        xaxis: {
          categories: props.obj.labels,
        },
      }}
    ></Chart>
  );
}

export default ApexBar;
