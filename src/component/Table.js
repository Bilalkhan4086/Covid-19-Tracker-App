import { Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Bar, Doughnut, Line } from 'react-chartjs-2';


const Table = ({data1}) => {
const [global, setglobal] = useState('');
  useEffect(()=>{const Data = async () =>{
    const res = await fetch(`https://covid19.mathdro.id/api/daily`);
    const data = await res.json();
    setglobal(data);
};Data(); },[])
    const data = {
        labels: !global ? [1,2,3,4,5,6,7,8,9]:global.map(i => i.reportDate),
        datasets: [
          {
            label: "Infected Cases",
            data: !global ? [1,2,3,4,5,6,7,8,9]:global.map(i => i.totalConfirmed),
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Death Cases",
            data:  !global ? [1,2,3,4,5,6,7,8,9]:global.map(i => i.deaths.total),
            fill: true,
            borderColor: "rgb(71,132,132)",
            backgroundColor:'rgba(72,182,222,5)'
          }
        ]
      };
      

      const data2 = {
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            data: data1 ? [data1.confirmed.value, data1.recovered.value, data1.deaths.value] : [0,0,0],
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
          },
        ],
      };

      const data3 = 
      {
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "COVID-19 Patients",
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
      return(<div>
        <div className='OptionHeading' >Some Graphical veiw of COVID-19 is Here</div>
        
           
            <Grid container justify="center" wrap="wrap" spacing={3}>
                    <Grid item>
                    <Paper elevation={3} >
                                <Line data={data} height={500} width={500} />
                    </Paper>
                    </Grid>
                    <Grid item>
                    <Paper elevation={3} >
                                {!data1 ? '' : <Doughnut data={data2} height={500} width={500}/>}
                    </Paper>
                    </Grid>
                    <Grid item>
                    <Paper elevation={3}>
                                {!data1 ? '' : <Bar data={data3} height={500} width={500}/>}
                    </Paper>
                    </Grid>
            </Grid>
            </div>)
    }    


export default Table;


