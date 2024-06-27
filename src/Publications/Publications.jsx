import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Backdrop, Button, ButtonGroup, Collapse, Fade, Icon, IconButton, Paper, Typography, linearProgressClasses } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import LaunchIcon from '@mui/icons-material/Launch';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import DoneIcon from '@mui/icons-material/Done';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';


export default function Publications() {
  const [collapsed,setCollapsed] = React.useState(false)
  const [isBackdrop,setIsBackdrop] = React.useState(false)
  const [currPaper,setCurrPaper] = React.useState(itemData[0].src)

  return (
    <>
      <ImageList
        sx={{margin:"10%",borderRadius:"40px",overflow:"hidden"}}
        variant="quilted"
        cols={4}
        rowHeight={121}>
        <ImageListItem cols={2} rows={2} sx={{background:"#161616",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",color:"white"}}>
          <ArticleIcon sx={{height:"100px",width:"100px",background:"white",color:"green",padding:"20px 20px 0px 20px",borderRadius:"100% 100% 0px 0px"}}/>
          <Typography sx={{background:"white",color:"black",width:"140px",textAlign:"center",borderRadius:"0px 0px 10px 10px"}}>Publications</Typography>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} onMouseEnter={()=>setCollapsed({[item.publisher]:true})} onMouseLeave={()=>setCollapsed({[item.publisher]:false})}>
            <Paper sx={{padding:"5px",position:"absolute",width:"100%",borderRadius:"0px",bottom:"0",textAlign:"center"}}><Typography variant='body2'>{item.publisher}</Typography></Paper>
            <Fade in={collapsed[item.publisher]}>
                <Paper style={{width:"100%",height:"100%",position:"absolute",background:"rgba(0,0,0,0.4)",zIndex:"2",display:"flex",justifyContent:"center",alignItems:'center',flexDirection:"column"}}>
                  <Paper sx={{color:"white",background:item.status==='Published'?"green":"#d3be05",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row",padding:"5px 10px",borderRadius:"20px"}}>{item.status==='Published'?<DoneIcon/>:<WarningAmberIcon/>}<Typography>{item.status}</Typography></Paper>
                  <div>
                    {item.link!==null?<IconButton href={item.link}><LaunchIcon style={{background:"black",padding:"10px",borderRadius:"100%",color:'white'}}/></IconButton>:null}
                    <IconButton onClick={()=>{
                      setCurrPaper(item.src)
                      setIsBackdrop(true)
                    }}><FullscreenIcon style={{background:"black",padding:"10px",borderRadius:"100%",color:'white'}}/></IconButton>
                  </div>
                </Paper>
            </Fade>
            <iframe 
              height="100%" 
              width="100%"
              src={item.src}               
              alt={item.title}
              style={{overflow:"hidden"}}
              allowFullScreen
            />
          </ImageListItem>
        ))}
        <ImageListItem cols={2} rows={2} sx={{background:"#161616",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",color:"white"}}>
        </ImageListItem>
      </ImageList>
      <Backdrop open={isBackdrop}>
      <iframe 
        height="100%" 
        width="100%"
        src={currPaper}
        allowFullScreen
      />
      <Button onClick={()=>{
        console.log("click");
        setIsBackdrop(false)
      }} sx={{position:"absolute",left:10,bottom:10}} color='warning' variant='contained'>&nbsp;&nbsp;Close&nbsp;&nbsp;</Button>
      </Backdrop>
    </>
  );
}

const itemData = [
  {
    publisher: "IEEE Transactions on Artificial Intelligence",
    src: '/voxelmamba.pdf#toolbar=0&navpanes=0&scrollbar=0',
    title: 'Breakfast',
    status:"Submitted",
    rows: 2,
    cols: 2,
    link:null
  },
  {
    publisher: "IEEE Transactions on Instrumentation and Measurements",
    src: '/luminet.pdf#toolbar=0&navpanes=0&scrollbar=0',
    title: 'Burger',
    status:"Published",
    rows: 2,
    cols: 2,
    link:"https://ieeexplore.ieee.org/document/10256227"
  },
  {
    publisher: "IEEE Access",
    src: '/loltv.pdf#toolbar=0&navpanes=0&scrollbar=0',
    title: 'Burger',
    status:"Published",
    rows: 2,
    cols: 2,
    link:"https://ieeexplore.ieee.org/document/10305149"
  },
  {
    publisher: "IEEE ICMERALDA International Conf.",
    src: '/potholeguard.pdf#toolbar=0&navpanes=0&scrollbar=0',
    title: 'Burger',
    status:"Published",
    rows: 2,
    cols: 2 ,
    link:"https://doi.org/10.48550/arXiv.2311.02641"
  },
  {
    publisher: "IEEE COMNETSAT International Conf.",
    src: '/drone.pdf#toolbar=0&navpanes=0&scrollbar=0',
    title: 'Burger',
    status:"Published",
    rows: 2,
    cols: 2,
    link:"https://arxiv.org/abs/2311.02648" 
  },
  {
    publisher: "IEEE BdkCSE International Conf.",
    src: '/aiops.pdf#toolbar=0&navpanes=0&scrollbar=0',
    title: 'Burger',
    status:"Published",
    rows: 2,
    cols: 2,
    link:"https://ieeexplore.ieee.org/document/10339699/"
  }
];