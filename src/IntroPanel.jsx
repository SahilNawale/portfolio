import React from 'react';
import { Button, Paper, Typography, styled, useTheme } from '@mui/material';

const OnHoverButton = styled(Button)(({ theme }) => ({
  transition: '0.3s ease-in',
  color: 'white',
  '&:hover': {
    backgroundColor: '#bfbfbf',
    color: '#2d2d2d',
    boxShadow: '0px 0px 150px white',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 'x-small',
    padding: '2px',
  },
}));

const TitlePaper = styled(Paper)(({ theme }) => ({
  paddingTop: '1px',
  backgroundColor: '#2d2d2d',
  margin: 'auto',
  width: '60%',
  textAlign: 'center',
  color: 'white',
  border: '2px solid #2d2d2d',
  marginTop: '100px',
}));

const CarouselContainer = styled('Paper')(({ theme }) => ({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  marginTop: '20px',
  backgroundColor: '#2d2d2d',
  margin: '10px auto',
  width: '60%',
  textAlign: 'center',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
}));

const Scroll = styled('div')(({ theme }) => ({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  animation: 'scroll 800s linear infinite',
  '&:hover': {
    animationPlayState: 'paused',
  },
  '@keyframes scroll': {
    '0%': {
      transform: 'translateX(0%)',
    },
    '100%': {
      transform: 'translateX(-70%)',
    },
  },
}));

function IntroPanel() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <TitlePaper elevation={6}>
        <Typography variant="h6" sx={{ margin: '20px 0px' }}>Portfolio Website</Typography>
      </TitlePaper>
      <CarouselContainer>
        <Scroll>
          {[...Array(100)].map((i)=>(
            <>
              <OnHoverButton variant="text" sx={{ margin: '10px 5px' }}>React JS</OnHoverButton>
              <OnHoverButton variant="text" sx={{ margin: '10px 5px' }}>Next JS</OnHoverButton>
              <OnHoverButton variant="text" sx={{ margin: '10px 5px' }}>Node JS</OnHoverButton>
              <OnHoverButton variant="text" sx={{ margin: '10px 5px' }}>Django</OnHoverButton>
              <OnHoverButton variant="text" sx={{ margin: '10px 5px' }}>Flask</OnHoverButton>
              <OnHoverButton variant="text" sx={{ margin: '10px 5px' }}>MySQL</OnHoverButton>
              <OnHoverButton variant="text" sx={{ margin: '10px 5px' }}>Mongo DB</OnHoverButton>
              <OnHoverButton variant="text" sx={{ margin: '10px 5px' }}>PyTorch</OnHoverButton>
              <OnHoverButton variant="text" sx={{ margin: '10px 5px' }}>MaterialUI</OnHoverButton>
              <OnHoverButton variant="text" sx={{ margin: '10px 5px' }}>Bootstrap</OnHoverButton>
              <OnHoverButton variant="text" sx={{ margin: '10px 5px' }}>Python</OnHoverButton>
              <OnHoverButton variant="text" sx={{ margin: '10px 5px' }}>C/C++</OnHoverButton>
            </>
          ))}
        </Scroll>
      </CarouselContainer>
    </React.Fragment>
  );
}

export default IntroPanel;
