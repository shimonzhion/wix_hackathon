import React from "react";
import { Bar } from "react-chartjs-2";
import sourceData from "../data/sourceData.json";


function BarChart() {
  return (
    < >
      <Bar
        data={{
          labels: sourceData.map((data) => data.label),
          datasets: [
            {
              label: "revenue",
              data: sourceData.map((data) => data.value),
              backgroundColor: [
                "rgba(43, 63, 229, 0.8)",
                "rgba(250, 192, 19, 0.8)",
                "rgba(253, 135, 135, 0.8)",
              ],
              borderRadius: 5,
            },

            {
              label: "loos",
              data: [74, 100, 40],
            },
          ],
        }}
      />
    </>
  );
}

export default BarChart;
