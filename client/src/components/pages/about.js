import React from 'react'
import "./About.css";
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

const About = () => {
  return (
    <Grid container justifyContent='center' alignItems='center'>
    <Grid item >
    <Paper elevation={10} style={{padding: 20, marginTop: 150, height: 350,  background: 'rgba(255, 255, 255, 0.85)', border: 'solid', borderWidth: '4px', borderColor: "#1a237e"}}>
    <div className="title">
      <h1>Google Forms Replica</h1>
        <div className="members">
          By
          <h3 className="h3">Josh Downing</h3>
          An app made to teach myself full stack development 
          using MongoDB / Express / React / Node
          <a className="link" href={"https://github.com/joshdowning/SurveyApp"}>
                <h3>Github Repository</h3>
            </a>
        </div>
      </div>
      </Paper>
      </Grid>
      </Grid>
);
}

export default About

