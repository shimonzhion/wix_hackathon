import React from 'react'
import { Line } from "react-chartjs-2";
import revenueData from "../data/revenueData.json"
function LineChart() {
  return (
    <>
     <Line
        data={{
          labels: revenueData.map((data) => data.label),
          datasets: [
            {
              label: "Revenue",
              data: revenueData.map((data) => data.revenue),
              backgroundColor: "#064FF0",
              borderColor: "#064FF0",
            },
            {
              label: "Cost",
              data: revenueData.map((data) => data.cost),
              backgroundColor: "#FF3030",
              borderColor: "#FF3030",
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
  </>
  )
}

export default LineChart