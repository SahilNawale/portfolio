import * as React from 'react';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Slide from '@mui/material/Slide';


export default function VerticalLinearStepper({ aboutRef, workExRef, publicationsRef, projectsRef }) {

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setState(open);
  };

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setState(false); 
    }
  };

  return (
    <>
      <Button sx={{ color: 'white', minWidth: '5px' }} variant="text" onClick={toggleDrawer(!state)}>
        <MenuIcon />
      </Button>

      <Slide direction="right" in={state} mountOnEnter unmountOnExit>
        <Stepper orientation='vertical' sx={{ position: "absolute", top: 70, left: 5, zIndex: "10", background: "rgba(0,0,0,0.6)", padding: "20px", borderRadius: "20px" }}>
          <Step><Button variant='contained' sx={{ borderRadius: "100px" }} onClick={() => scrollToSection(aboutRef)}>About</Button></Step>
          <Step><Button variant='contained' sx={{ borderRadius: "100px" }} onClick={() => scrollToSection(workExRef)}>Experience</Button></Step>
          <Step><Button variant='contained' sx={{ borderRadius: "100px" }} onClick={() => scrollToSection(projectsRef)}>Projects</Button></Step>
          <Step><Button variant='contained' sx={{ borderRadius: "100px" }} onClick={() => scrollToSection(publicationsRef)}>Publications</Button></Step>
        </Stepper>
      </Slide>
    </>
  );
}

