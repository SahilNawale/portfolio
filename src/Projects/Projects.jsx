import { Backdrop, Button, ButtonGroup, CircularProgress, Grid, IconButton, Paper, Typography, useMediaQuery } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { projectData } from '../projectData';
import Carousel from '../Carousel/Carousel.jsx';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PlusOneIcon from '@mui/icons-material/PlusOne';

const useStyles = () => ({
    title: {
        textAlign: 'center',
        backgroundColor: "white",
        color: "#2d2d2d",
        marginBottom: "10px"
    },
    backgroundPaper: {
        margin: "100px 100px 50px 100px",
        padding: "10px",
        margin: { xs: "70px 50px 30px 50px" },
    },
    carouselBackground: {
        overflow: "hidden",
        position: "relative",
        height: {
          xs: window.innerWidth / 2.5,
          md: window.innerWidth / 4.24,
        },
        margin: {
          xs: "0px 12px",
          md: "0px",
        },
        backgroundColor:"#272727",
        borderRadius:"0px 0px 0px 0px"
      },
      projectDescription: {
        margin: {
          xs: "0px 12px",
          md: "20px 30px",
        },
        padding: "10px",
        background:"#272727"
    },
    projectInfo: {
        padding: "10px",
        margin: {
            xs: "10px 12px",
            md: "0px 0px 20px 0px",
        },
        background:"#272727"
    },
    swipeToScroll: {
        marginTop: "5px",
        margin: {
            xs: "0px 12px",
            md: "0px",
        },
        background:"#272727",
        borderRadius:"0px 0px 0px 0px"
      },
});


export default function Projects() {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [imageLink, setImageLink] = useState("");
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <Paper elevation={6} sx={classes.backgroundPaper}>

            <Grid item xs={12}>
                <Paper elevation={2} >
                    <Typography variant="h6" sx={classes.title}>My Projects {projectData.id}</Typography>
                </Paper>
            </Grid>
            
            {projectData.map(project=>(
            <>
                <Grid container justifyContent='space-around' sx={{ margin: '0px' }}>

                    <Grid item xs={12} sm={12} md={6}>
                        <Paper elevation={0} sx={classes.carouselBackground}>
                            <Carousel projectName={project.title} />
                        </Paper>
                        <Paper elevation={6} sx={classes.swipeToScroll}>
                            <Typography sx={{ textAlign: 'center' }}>
                                <IconButton disabled sx={{ color: "white" }}>
                                    <ArrowBackIosIcon fontSize='small' />
                                </IconButton>
                                Swipe to scroll
                                <IconButton disabled sx={{ color: "white" }}>
                                    <ArrowForwardIosIcon fontSize='small' />
                                </IconButton>
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={12} md={5}>
                        <Paper elevation={6} sx={classes.projectInfo}>
                            {project.tags.split("\n").map((line, index) => (
                                <div className='typography' key={index} dangerouslySetInnerHTML={{ __html: line }} />
                            ))}
                        </Paper>
                    </Grid>

                </Grid>

                <Paper sx={classes.projectDescription} elevation={6}>
                    <Typography fontWeight="100" fontFamily="trebuchet MS" fontSize="medium">
                        <Typography>{project.title}</Typography>
                        <br/>
                        {project.description.split("\n").map((line, index) => (
                            <span key={index} style={{fontSize:isSmallScreen?"10px":"15px",fontStyle:"italic"}}>{line}<br /></span>
                        ))}
                    </Typography>
                </Paper>
                <hr style={{height:"5px",background:"white",borderRadius:"10px"}}/>
            </>
            ))}
            <div style={{display:"flex",alignItems:"center",gap:'15px',margin:"15px 10px"}}>
                <PlusOneIcon sx={{color:"green",fontSize:"30px",background:"white",borderRadius:"100%",padding:"10px"}}/>
                <Typography sx={{display:"inline"}}>Other Projects</Typography>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper style={{background:"#272727",padding:"10px"}}>
                        <Typography>Blockchain Review System</Typography>
                        <ul style={{fontFamily:"trebuchet MS",fontStyle:"italic",fontSize:isSmallScreen?"10px":"15px"}}>
                            <li>Etherium + Solidity + Web3 JS + React based online platforms to store customer reviews tamper-free and securely.</li>
                            <li>Infura Interplanetary File System (IPFS) + Node JS based blockchain platform to securely store files.</li>
                            <li>Decentralized Incentivizing mechanism to reward review writers with Etherium through direct integration with Metamask.</li>
                            <li>Scaper to surf E-commerce website and verify if review writer has actually bought the product.</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper style={{background:"#272727",padding:"10px"}}>
                        <Typography>Virtual College Tour</Typography>
                        <ul style={{fontFamily:"trebuchet MS",fontStyle:"italic",fontSize:isSmallScreen?"10px":"15px"}}>
                            <li>Django + Tailwind + Sprite-JS + JQuery based educational institute finder and virtual tour system.</li>
                            <li>Custom Search with multiple filters to find ideal institute</li>
                            <li>Sprite based RPG game simulation for campus navigation with panorama view of each point.</li>
                            <li>PDF OCR in python to automatically find institute using the marksheet.</li>
                            <li>RASA X based chatbot for guidance and easy navigation.</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper style={{background:"#272727",padding:"10px",fontSize:isSmallScreen?"10px":"15px"}}>
                        <Typography>My Blogs</Typography>
                        <span style={{fontFamily:"trebuchet MS",fontStyle:"italic"}}>Node/Express JS + Bootstrap based blog website with multiple filters and Mongo DB database for blog storage.</span>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper style={{background:"#272727",padding:"10px",fontSize:isSmallScreen?"10px":"15px"}}>
                        <Typography>GRE Words</Typography>
                        <span style={{fontFamily:"trebuchet MS",fontStyle:"italic"}}>React based webapp for simplying GRE vocabulary words learning. Assign words different levels of difficulty, mark important words, automatic word reptition algorithm for incorrectly guessed words etc.</span>
                    </Paper>
                </Grid>
            </Grid>

        </Paper>
    )
}