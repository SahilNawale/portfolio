import React, { Component }  from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { SnackbarProvider } from 'notistack';
// import AboutPage from './AboutPage/AboutPage';
// import ContactPage from './ContactPage/ContactPage';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import IntroPanel from './IntroPanel';
import Navbar from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

let customMUITheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          variant: 'contained',
          color: 'primary',
          '@media (min-width:0px) and (max-width:550px)': {
            size: 'small',
          },
          '&:hover': {
            backgroundColor: green[400],
            color: '#FFF',
          },
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: "#2d2d2d",
    },
    background: {
      paper: "#2d2d2d",
    },
  },
  typography: {
    fontSize: 16,
    '@media (min-width:0px) and (max-width:550px)': {
      fontSize: 13,
    },
    h6: {
      '@media (min-width:0px) and (max-width:550px)': {
        fontSize: 15,
      },
    },
    body2: {
      '@media (min-width:0px) and (max-width:550px)': {
        fontSize: 12,
      },
    },
    body1: {
      '@media (min-width:0px) and (max-width:550px)': {
        fontSize: 14,
      },
    },
    fontFamily: [
      'AirstrikeSecond',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={customMUITheme}>
      <SnackbarProvider maxSnack={5}>
        <IntroPanel />
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
        <Footer />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
