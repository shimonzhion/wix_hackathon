import React from 'react'
import { Doughnut } from "react-chartjs-2";
import sourceData from "../data/sourceData.json"

function DoughnutChart() {
  return (
    <>
    <Doughnut
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
            borderRadius:5
          },
        ],
      }}
    />
  </>
  )
}

export default DoughnutChart