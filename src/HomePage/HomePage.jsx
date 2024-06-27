import React, { useRef } from 'react';
import AboutPage from '../AboutPage/AboutPage';
import WorkEx from '../WorkEx/WorkEx';
import Publications from '../Publications/Publications';
import Projects from '../Projects/Projects';
import Navbar from '../Navbar/Navbar';

const HomePage = () => {
  const aboutRef = useRef(null);
  const workExRef = useRef(null);
  const publicationsRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div data-aos='fade-down'>
      <Navbar
        aboutRef={aboutRef}
        workExRef={workExRef}
        publicationsRef={publicationsRef}
        projectsRef={projectsRef}
      />
      <div ref={aboutRef}><AboutPage /></div>
      <div ref={workExRef}><WorkEx /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={publicationsRef}><Publications/></div>
    </div>
  );
}

export default HomePage;
