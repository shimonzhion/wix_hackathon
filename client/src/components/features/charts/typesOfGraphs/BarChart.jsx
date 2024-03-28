import React from "react";
import { Bar } from "react-chartjs-2";
import sourceData from "../data/sourceData.json";
import { useContext } from 'react';
import { graduatesContext } from "../../../../contexts/graduates";



function BarChart() {
  const { graduates } = useContext(graduatesContext);

  const inEmployment = graduates?.filter(item => item.employmentStatus == 'Job seeker').length;
  console.log(inEmployment);
  const notEmployed = graduates?.filter(item => item.employmentStatus == 'notEmployed').length;
  const inProcess = graduates?.filter(item => item.employmentStatus == 'inProcess').length;
  const data = [inEmployment, notEmployed, inProcess];

  return (
    < >
      <Bar
        data={{
          labels: sourceData.map((data) => data.label),
          datasets: [
            {
              label: "Employment",
              data: data.map(data => data),
              backgroundColor: [
                "rgba(43, 63, 229, 0.8)",
                "rgba(250, 192, 19, 0.8)",
                "rgba(253, 135, 135, 0.8)",
              ],
              borderRadius: 5,
            }
          ],
        }}
      />
    </>
  );
}

export default BarChart;


