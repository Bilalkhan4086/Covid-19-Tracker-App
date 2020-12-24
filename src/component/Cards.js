import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
  paper1: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderBottom: "5px solid rgba(255, 153, 0, 0.9)",
    paddingTop: 20,
    paddingBottom: 25,
    fontSize: 20,maxWidth:270,
    minWidth:270,
    height:250
  },
  paper2: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderBottom: "5px solid rgba(51, 204, 51, 0.7)",
    paddingTop: 20,
    paddingBottom: 25,
    fontSize: 20,maxWidth:270,
    minWidth:270,
    height:250
  },
  paper3: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderBottom: "5px solid rgba(255, 0, 0, 0.7)",
    paddingTop: 20,
    paddingBottom: 25,
    fontSize: 20,maxWidth:270,
    minWidth:270,
    height:250
  }
  ,boot:{maxWidth:270,
      minWidth:270,
      height:220   
  },
  typo:{
      fontFamily:"Acme"
  },
  
  typo1:{
    fontFamily:"Acme"
    ,color:"rgba(51, 204, 51, 0.7)"
}
}));

export default function Cards({data}) {
  const classes = useStyles();
console.log("InnerWidth =",window.innerWidth)
  return (
    <div className="Cards">
      <Grid container justify={window.innerWidth > 960 ? 'space-around' : 'center'} md={12} item  xs={9}>
        <Grid item style={{marginBottom:"20px"}}>
        <Card className={classes.paper1}>
            <CardContent>
                <Typography variant="h4" style={{color:"rgba(255, 153, 0, 0.9)"}} className={classes.typo}>Infected</Typography><br/>
                <Typography variant="h3"><CountUp start={0} end={!data ? 0 : data.confirmed.value} duration={2.5} /> </Typography><br/>
                <Typography variant="body1">Number of people infected from COVID-19</Typography><br/>
                <Typography variant="body1">Date : Dec 12,2020</Typography>
            </CardContent>
        </Card>
        </Grid><Grid item style={{marginBottom:"20px"}}><Card className={classes.paper2}>
            <CardContent>
                <Typography variant="h4" className={classes.typo1}>Recovered</Typography><br/>
                <Typography variant="h3"><CountUp start={0} end={!data ? 0 : data.recovered.value} duration={2.5} /> </Typography><br/>
                <Typography variant="body1">Number of people recovered from COVID-19</Typography><br/>
                <Typography variant="body2">Date : Dec 12,2020</Typography>
            </CardContent>
        </Card></Grid><Grid item style={{marginBottom:"20px"}}>
        <Card className={classes.paper3}>
            <CardContent>
                <Typography className={classes.typo} style={{color:'rgba(255, 0, 0, 0.7)'}} variant="h4">Deaths</Typography><br/>
                <Typography variant="h3"><CountUp start={0} end={!data ? 0 : data.deaths.value} duration={2.5} /> </Typography><br/>
                <Typography variant="body1">Number of deaths from COVID-19</Typography><br/>
                <Typography variant="body2">Date : Dec 12,2020</Typography> 
            </CardContent>
        </Card> 
        </Grid>
      </Grid>
      
      </div>
  );
}
