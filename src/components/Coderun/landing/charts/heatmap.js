import React from "react";
import Chart from "react-apexcharts";
function Heatmap(props) {
  return (
    <Chart
      type="heatmap"
      height={250}
      series={props.heatmaparr}
      options={{
        chart: {
          height: 350,
          type: "heatmap",
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#008FFB"],

        tooltip: {
          x: {},
        },
        plotOptions: {
          heatmap: {
            shadeIntensity: 0.5,

            colorScale: {
              ranges: [
                {
                  from: 0,
                  to: 2,
                  name: "low",
                  color: "#66d115",
                },
                {
                  from: 3,
                  to: 6,
                  name: "medium",
                  color: "#059ee6",
                },
                {
                  from: 6,
                  to: 8,
                  name: "high",
                  color: "#ffd20a",
                },
                {
                  from: 9,
                  to: 100,
                  name: "extreme",
                  color: "#ff0000",
                },
              ],
            },
          },
        },
      }}
    ></Chart>
  );
}

export default Heatmap;
