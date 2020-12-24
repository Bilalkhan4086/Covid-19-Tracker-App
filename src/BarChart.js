import { Paper } from '@material-ui/core';
import React from 'react'

export const Bar = ({data1}) => {
    const data3 = 
    {
      labels: ["Infected", "Recovered", "Deaths"],
      datasets: [
        {
          label: "COVID-19 Patients",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
           backgroundColor: [
            "rgba(255, 153, 0, 0.9)",
            "rgba(51, 204, 51, 0.7)",
            "rgba(255, 0, 0, 0.7)",
          ],
          hoverBackgroundColor: [
            "rgba(255, 153, 0, 1)",
            "rgba(51, 204, 51, 1)",
            "rgba(255, 0, 0, 1)",
          ],
          data: data1 ? [data1.confirmed.value, data1.recovered.value, data1.deaths.value] : [0,0,0],
        },
      ],
    };
    
    return (
        <div>
             <Paper elevation={3}>
                                { <Bar data={data3} height={800} width={800}/>}
                    </Paper>
        </div>
    )
}
