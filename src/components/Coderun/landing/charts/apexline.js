import React from "react";
import Chart from "react-apexcharts";
function Apexline(props) {
  return (
    <Chart
      type="line"
      height={500}
      series={[
        {
          name: "rating",
          data: props.obj.data,
        },
      ]}
      options={{
        colors: ["#222"],

        // dataLabels: {
        //   enabled: true,
        //   style: {
        //     colors: ["#000", "#ddd"],
        //     fontSize: "10px",
        //     borderRadius:'50%',
        //   },
        // },
        markers: {
          size: 3,
        },
        annotations: {
          xaxis: [
            {
              x: new Date("15 Jan 2022").getTime(),
              borderColor: "#775DD0",
              label: {
                style: {
                  color: "#000",
                },
                text: "Super 30",
              },
            },
          ],
        },
        grid: {
          show: true,
          borderColor: "#90A4AE",
          strokeDashArray: 0,
          position: "back",
          xaxis: {
            lines: {
              // show: true
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
          row: {
            colors: [
              "rgba(154, 3, 3, 0.76)",
              "rgba(154, 3, 3, 0.76)",
              "rgba(154, 3, 3, 0.76)",
              "rgba(154, 3, 3, 0.76)",
              "rgba(255, 0, 0, 0.6)",
              "rgba(255, 0, 0, 0.6)",
              "rgba(255, 151, 0, 0.6)",
              "rgba(253, 255, 0, 0.6)",
              "rgba(253, 255, 0, 0.6)",
              "rgba(180, 21, 238, 0.6)",
              "rgba(180, 21, 238, 0.6)",
              "rgba(107, 128, 242, 0.6)",
              "rgba(107, 128, 242, 0.6)",
              "rgba(107, 128, 242, 0.6)",
              "rgba(107, 243, 224, 0.6)",
              "rgba(107, 243, 224, 0.6)",
              "rgba(50, 240, 14, 0.6)",
              "rgba(50, 240, 14, 0.6)",
              "rgba(154, 142, 142, 0.6)",
              "rgba(154, 142, 142, 0.6)",
            ],
            fill: {
              type: "solid",
              color: ["red", "black"],
            },
            opacity: 1,
          },
          column: {
            colors: "red",
            opacity: 0.5,
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
        xaxis: {
          labels: {
            format: "dd/MM/yy",
          },
          type: "datetime",
        },
        yaxis: {
          forceNiceScale: false,
          min: 1000,
          max: 3000,
          tickAmount: 20,
        },
      }}
    ></Chart>
  );
}

export default Apexline;
