import React from "react";
import Chart from "react-apexcharts";
function Heatmap(props) {
  return (
    <Chart
      type="heatmap"
      height={250}
      series={[
        {
          name: "JAN22",
          data: [
            1, 2, 1, 10, 2, 3, 14, 1, 3, 4, 1, 3, 2, 4, 5, 11, 3, 5, 1, 4, 2, 5,
            6, 2, 1, 3, 4, 5, 1, 2,
          ],
        },
        {
          name: "FEB22",
          data: [
            1, 2, 6, 1, 2, 3, 11, 1, 13, 4, 11, 3, 2, 4, 5, 11, 11, 5, 1, 4, 2,
            5, 6, 2, 1, 3, 4, 5, 1, 2,
          ],
        },
        {
          name: "MAR22",
          data: [
            1, 2, 6, 1, 2, 3, 4, 1, 3, 4, 1, 3, 2, 4, 5, 1, 3, 5, 1, 4, 2, 5, 6,
            2, 1, 3, 4, 5, 1, 2,
          ],
        },
        {
          name: "APR22",
          data: [
            1, 2, 6, 1, 2, 3, 4, 1, 3, 4, 1, 3, 2, 4, 5, 1, 3, 5, 1, 4, 2, 5, 6,
            2, 1, 3, 4, 5, 1, 2,
          ],
        },
        {
          name: "MAY22",
          data: [
            1, 2, 6, 1, 2, 3, 4, 1, 3, 4, 1, 3, 2, 4, 5, 1, 3, 5, 1, 4, 2, 5, 6,
            2, 1, 3, 4, 5, 1, 2,
          ],
        },
        {
          name: "JUN22",
          data: [
            1, 2, 6, 1, 2, 3, 4, 1, 3, 4, 1, 3, 2, 4, 5, 1, 3, 5, 1, 4, 2, 5, 6,
            2, 1, 3, 4, 5, 1, 2,
          ],
        },
        {
          name: "JUL22",
          data: [
            1, 2, 6, 1, 2, 3, 4, 1, 3, 4, 1, 3, 2, 4, 5, 1, 3, 5, 1, 4, 2, 5, 6,
            2, 1, 3, 4, 5, 1, 2,
          ],
        },
        {
          name: "AUG22",
          data: [
            1, 2, 6, 1, 2, 3, 4, 1, 3, 4, 1, 3, 2, 4, 5, 1, 3, 5, 1, 4, 2, 5, 6,
            2, 1, 3, 4, 5, 1, 2,
          ],
        },
        {
          name: "SEP22",
          data: [
            1, 2, 6, 1, 2, 3, 4, 1, 3, 4, 1, 3, 2, 4, 5, 1, 3, 5, 1, 4, 2, 5, 6,
            2, 1, 3, 4, 5, 1, 2,
          ],
        },
        {
          name: "OCT22",
          data: [
            1, 2, 6, 1, 2, 3, 4, 1, 3, 4, 1, 3, 2, 4, 5, 1, 3, 5, 1, 4, 2, 5, 6,
            2, 1, 3, 4, 5, 1, 2,
          ],
        },
        {
          name: "NOV22",
          data: [
            1, 2, 6, 1, 2, 3, 4, 1, 3, 4, 1, 3, 2, 4, 5, 1, 3, 5, 1, 4, 2, 5, 6,
            2, 1, 3, 4, 5, 1, 2,
          ],
        },
        {
          name: "DEC22",
          data: [
            1, 2, 6, 1, 2, 3, 4, 1, 3, 4, 1, 3, 2, 4, 5, 1, 3, 5, 1, 4, 2, 5, 6,
            2, 1, 3, 4, 5, 1, 2,
          ],
        },
      ]}
      options={{
        chart: {
                height: 350,
                type: 'heatmap',
              },
              dataLabels: {
                enabled: false
              },
              colors: ["#008FFB"],
              title: {
                text: 'HeatMap Chart (Single color)'
              },
              tooltip:{
                  x:{},
              },
              plotOptions: {
                heatmap: {
                  shadeIntensity: 0.5,
                
                  colorScale: {
                    ranges: [{
                        from: 0,
                        to: 2,
                        name: 'low',
                        color: '#66d115'
                      },
                      {
                        from: 3,
                        to: 6,
                        name: 'medium',
                        color: '#059ee6'
                      },
                      {
                        from: 6,
                        to: 8,
                        name: 'high',
                        color: '#ffd20a'
                      },
                      {
                        from: 9,
                        to: 100,
                        name: 'extreme',
                        color: '#ff0000'
                      }
                    ]
                  }
                }
              },
      }}
    ></Chart>
  );
}

export default Heatmap;
