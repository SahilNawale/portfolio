import React, { Component }  from 'react';
import { makeStyles } from '@mui/styles';
import { Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CodeIcon from '@mui/icons-material/Code';

const useStyles = makeStyles((theme) => ({
  backgroundPaper: {
    margin: "100px 100px 50px 100px",
    padding: "15px",
    [theme.breakpoints.down('sm')]: {
      margin: "70px 20px 30px 20px",
    },
  },
  title: {
    textAlign: 'center',
    backgroundColor: "white",
    color: "#2d2d2d",
  },
  bodyText: {
    margin: "20px 10px",
  },
}));

const steps = [
  {title:"Primary School",description:"Symbiosis School, Nashik",time:"NA - 2018",color:"rgb(122 153 255)"},
  {title:"High School in Science",description:"Matoshri Junior College, Nashik",time:"2018 - 2020",color:"rgb(122 153 255)"},
  {title:"Undergraduate in Information Technology",description:"Sardar Patel Institute of Technology, Mumbai",time:"2020 - 2024",color:"rgb(243 233 160)"},
  {title:"Masters of Science in Computer Science",description:"Stony Brook University, New York",time:"2024 - 2026",color:"rgb(108 248 133)"},
];

function AboutPage() {
  const classes = useStyles();
  return (
    <div data-aos='fade-down'>
      <Paper elevation={6} className={classes.backgroundPaper}>
        <Paper elevation={2} sx={{marginBottom:"20px"}}>
          <Typography variant="h6" className={classes.title}>About Me</Typography>
        </Paper>
        <Stepper activeStep={3} alternativeLabel>
          {steps.map((s) => (
            <Step key={s.title}>
              <StepLabel>
                {s.description}
                <Typography style={{color:s.color,fontFamily:"trebuchet MS",fontStyle:"italic"}} variant='body2'>{s.title}</Typography>  
                <Typography style={{color:s.color,fontFamily:"trebuchet MS",fontStyle:"italic"}} variant='body2'>{s.time}</Typography>  
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <Typography variant="body2" className={classes.bodyText} fontFamily="trebuchet MS" fontStyle="italic" margin="15px 0px">
          My Name is Sahil Nawale. I posses extensive skills to blend my passion for Machine Learning/Deep Learning and Research potential with my enthusiasm towards Software/Web Development to create full-fledged products and pipeline incorporating technologies from different domains.
        </Typography>
        <Typography variant='body2' style={{fontFamily:"trebuchet MS",fontStyle:"italic",display:"flex",alignItems:'center',gap:"10px",margin:"10px 0px"}}><LeaderboardIcon sx={{background:'#ff8600',color:"white",padding:"5px",borderRadius:"100%"}}/>Scored 99.34%tile in MHT-CET</Typography>
        <Typography variant='body2' style={{fontFamily:"trebuchet MS",fontStyle:"italic",display:"flex",alignItems:'center',gap:"10px",margin:"10px 0px"}}><BloodtypeIcon sx={{background:'#ff2121',color:"white",padding:"5px",borderRadius:"100%"}}/>Taught underpriviledged school children at Abyudaya, served as IEEE Committee Technical Head</Typography>
        <Typography variant='body2' style={{fontFamily:"trebuchet MS",fontStyle:"italic",display:"flex",alignItems:'center',gap:"10px",margin:"10px 0px"}}><EmojiEventsIcon sx={{background:'green',color:"white",padding:"5px",borderRadius:"100%"}}/>Won S.P.I.T Hackathon 2022, Final round in  S.I.H, second round in Philips Code 2 Care, Flipkart GRID, Rakuten Hackathon</Typography>
        <Typography variant='body2' style={{fontFamily:"trebuchet MS",fontStyle:"italic",display:"flex",alignItems:'center',gap:"10px",margin:"10px 0px"}}><CodeIcon sx={{background:'white',color:"black",padding:"5px",borderRadius:"100%"}}/>Solved 500+ DSA Questions on online coding platforms in C/C++/Python</Typography>
      </Paper>
    </div>
  );
}

export default AboutPage;
