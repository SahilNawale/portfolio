import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography, backdropClasses, useMediaQuery } from '@mui/material';
import React, { Component }  from 'react';
import { makeStyles } from '@mui/styles';
import BuildIcon from '@mui/icons-material/Build';
import ScienceIcon from '@mui/icons-material/Science';

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

export default function WorkEx () { 
    const classes = useStyles()
    const isSmallScreen = useMediaQuery('(max-width:700px)');
    const avatarSize = isSmallScreen ? 60 : 100;
    return (
        <>
    <div data-aos='fade-down'>
      <Paper elevation={6} className={classes.backgroundPaper}>
        <Paper elevation={2} sx={{marginBottom:"20px"}}>
          <Typography variant="h6" className={classes.title}>Experience</Typography>
        </Paper>
        <div style={{display:"flex",alignItems:"center",gap:'15px'}}>
            <ScienceIcon sx={{color:"red",fontSize:"30px",background:"white",borderRadius:"100%",padding:"10px"}}/>
            <Typography sx={{display:"inline"}}>Research</Typography>
        </div>
        <List>
            <ListItem sx={{background:"#272727",borderBottom:"2px solid white",borderRadius:"20px 20px 0px 0px"}}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="IITP-logo.png" sx={{width:avatarSize,height:avatarSize,margin:isSmallScreen?"2px":"20px"}}/>
                </ListItemAvatar>
                <ListItemText>
                <div style={{display:'flex',justifyContent:"space-between"}}>Indian Institute of Technology, Patna<span>1.5 Yrs</span></div>
                    <div style={{fontFamily:"trebuchet MS",fontStyle:"italic",fontSize:"small"}}>AI/ML/DL Research Intern</div>
                    <ul style={{fontFamily:"trebuchet MS",fontStyle:"italic",fontSize:"small"}}>
                        <li>
                        Proposed a novel Transformation-Invariant Voxelization and Mamba State-Space-Model backbone for point cloud
                        processing. Implementation in PyTorch boosted runtime by 28% and demonstrated potential transformer-replacing
                        capabilities for large-sequence modeling and long-range global attention. Integrated the model with a portable
                        LiDAR-equipped Raspberry Pi SBC for 3D triple riding traffic-violation detection. Submitted the work to IEEE
                        Transactions on Artificial Intelligence.
                        </li>
                        <li>
                        Created the first low light traffic violation dataset with over 1100 anomaly instances. Developed a real-time low light
                        traffic violation detection pipeline using YOLO-v8x improving accuracy by 13% over SOTA. Deployed the model on a
                        workstation interlinked with a network of 8 CCTVs on the IITP campus. Utilized MAC address mapping for coordination
                        between CCTVs for object tracking, increasing efficiency of CCTV storage systems and automated mail alert system for
                        detected violations. Published work in IEEE Access.
                        </li>
                        <li>
                        Proposed a novel modified UNet-GAN architecture for backlit image enhancement achieving the highest 25.77 PSNR
                        value on the BacklitNet dataset. Applied the architecture for number plate recognition in real-world scenarios. Published
                        the work in IEEE Transactions on Instrumentation and Measurements
                        </li>
                    </ul>
                </ListItemText>
            </ListItem>
            <ListItem sx={{background:"#272727",borderRadius:"0px 0px 20px 20px"}}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="SPIT-logo.png" sx={{width:avatarSize,height:avatarSize,margin:"20px"}}/>
                </ListItemAvatar>
                <ListItemText>
                <div style={{display:'flex',justifyContent:"space-between"}}>Sardar Patel Institute of Technology, Mumbai<span>4 Months</span></div>
                    <div style={{fontFamily:"trebuchet MS",fontStyle:"italic",fontSize:"small"}}>AI/ML Research Assitant, Prof. Prasenjit Bhavathankar</div>
                    <ul style={{fontFamily:"trebuchet MS",fontStyle:"italic",fontSize:"small"}}>
                        <li>
                        Proposed a hybrid framework to efficiently and accurately detect anomalies within systems using AI driven methods
                        </li>
                        <li>
                        Extended traffic related research work at IIT Patna under final year project to improve performance and cover wider range of anomalies traffic violation detection pipeline using YOLO-v8x improving accuracy by 13% over SOTA.
                        </li>
                    </ul>
                    <div style={{fontFamily:"trebuchet MS",fontStyle:"italic",fontSize:"small"}}>AI/ML/DL Research Assitant, Prof. Kailas Devadkar</div>
                    <ul style={{fontFamily:"trebuchet MS",fontStyle:"italic",fontSize:"small"}}>
                        <li>
                        Proposed a deep learning architecture for segmentation and detection of pothole using point clouds to boost segementation accuracy by upto 4%.                        </li>
                        <li>
                        Put forward drone based load balancing approach to reduce energy consumption in mobile networks                        </li>
                    </ul>
                </ListItemText>
            </ListItem>
        </List>


        <div style={{display:"flex",alignItems:"center",gap:'15px',marginTop:"5 px"}}>
            <BuildIcon sx={{color:"green",fontSize:"30px",background:"white",borderRadius:"100%",padding:"10px"}}/>
            <Typography sx={{display:"inline"}}>Software Development</Typography>
        </div>
        <List>
            <ListItem sx={{background:"#272727",borderBottom:"2px solid white",borderRadius:"20px 20px 0px 0px"}}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="Offeteria-logo.png" sx={{width:avatarSize,height:avatarSize,margin:"20px"}}/>
                </ListItemAvatar>
                <ListItemText>
                    <div style={{display:'flex',justifyContent:"space-between"}}>Offeteria, Mumbai<span>6 Months</span></div>
                    <div style={{fontFamily:"trebuchet MS",fontStyle:"italic",fontSize:"small"}}>Full Stack Development Intern</div>
                    <ul style={{fontFamily:"trebuchet MS",fontStyle:"italic",fontSize:"small"}}>
                        <li>
                        Developed a website and a web app using Next JS and Chakra UI to increase cafe utilization by 40% during free hours and
                        provide meeting space while traveling
                        </li>
                        <li>
                        Implemented a custom calendar to manage and display available cafes and upcoming bookings in each time slot.
                        </li>
                        <li>
                        Incorporated leaflet maps to visualize cafe locations, path guidance, and nearby cafes. Streamlined cross-domain integration
                        of website and web app for new users and members respectively.
                        </li>
                        <li>
                        Revamped the Node JS + Mongo-DB backend API code blocks pertaining to bugs and unreadable code. Promoted to
                        fronted project manager after 3 months.
                        </li>
                    </ul>
                </ListItemText>
            </ListItem>
            <ListItem sx={{background:"#272727", borderBottom:"2px solid white"}} >
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="Tikzen-logo.png" sx={{width:avatarSize,height:avatarSize,margin:"20px"}}/>
                </ListItemAvatar>
                <ListItemText>
                <div style={{display:'flex',justifyContent:"space-between"}}>Tikzen, Mumbai<span>1 Months</span></div>
                    <div style={{fontFamily:"trebuchet MS",fontStyle:"italic",fontSize:"small"}}>Frontend Development Intern</div>
                    <ul style={{fontFamily:"trebuchet MS",fontStyle:"italic",fontSize:"small"}}>
                        <li>Lead Frontend Developer for building news website for children using Material-UI and React.</li>
                        <li>Established standardized procedures for development.</li>                       
                        <li>Handled dynamic newspaper for children in PDF format.</li>
                    </ul>
                </ListItemText>
            </ListItem>
            <ListItem sx={{background:"#272727",borderRadius:"0px 0px 20px 20px"}}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="SPIT-logo.png" sx={{width:avatarSize,height:avatarSize,margin:"20px"}}/>
                </ListItemAvatar>
                <ListItemText>
                <div style={{display:'flex',justifyContent:"space-between"}}>Consulting Club SPIT, Mumbai<span>2.5 Months</span></div>
                    <div style={{fontFamily:"trebuchet MS",fontStyle:"italic",fontSize:"small"}}>Backend Development Intern</div>
                    <ul style={{fontFamily:"trebuchet MS",fontStyle:"italic",fontSize:"small"}}>
                        <li>
                        Developed backend for CC@S.P.I.T’s website using Django-Rest-Framework and handled the integration with React JS.
                        </li>    
                    </ul>
                </ListItemText>
            </ListItem>
        </List> 
        
      </Paper>
    </div>
        </>
    ) 
}