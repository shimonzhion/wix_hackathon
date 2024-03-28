import React from 'react'
import { Doughnut } from "react-chartjs-2";

function DoughnutChart({data}) {
  const keys = Object.keys(data);
  const values = Object.values(data);


  return (
    <>
    <Doughnut
      data={{
        labels: keys,
        datasets: [
          {
            label: "revenue",
            data: values,
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