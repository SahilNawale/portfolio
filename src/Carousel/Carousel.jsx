import React, { Component }  from 'react';
import { useEffect, useRef, useState } from 'react'
import { useSprings, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { useDrag } from 'react-use-gesture'
import clamp from 'lodash.clamp'
import styles from './styles.module.css'
import { Backdrop, CircularProgress, IconButton } from '@mui/material'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import { styled } from '@mui/system'
import { projectData } from '../projectData'

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  color: '#fff',
}));

const FullscreenImage = styled('img')(({ theme }) => ({
  width: "100vh",
  transform: "rotate(90deg)",
  [theme.breakpoints.up('md')]: {
    transform: "rotate(0deg)",
    width: "100%",
  },
}));

function Viewpager({ projectName }) {
  const index = useRef(0)
  const [projectImages, setProjectImages] = useState();
  const [open, setOpen] = useState(false);
  const [imageLink, setImageLink] = useState("");
  const [didMount, setDidMount] = useState("");

  const handleFullScreenImage = (l) => {
    setImageLink(l);
    setOpen(true);
  }

  useEffect(() => {
    setDidMount(true);
    console.log(projectName)
    console.log(projectData)
    // Mocking an API call to get project images
    let images = projectData.filter(p=>p.title===projectName)[0]['images']
    setProjectImages(images);
    return () => setDidMount(false);
  }, [projectName]);

  const projectNameSearchString = projectName.replace(" ", "+")

  const [ref, { width }] = useMeasure()
  const [props, api] = useSprings(
    projectImages ? projectImages.length : 1,
    i => ({
      x: i * width,
      scale: width === 0 ? 0 : 1,
      display: 'block',
    }),
    [width]
  )

  const bind = useDrag(({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
    if (active && distance > width / 2) {
      index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, projectImages ? projectImages.length - 1 : 1)
      cancel()
    }
    api.start(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * width + (active ? mx : 0)
      const scale = active ? 1 - distance / width / 2 : 1
      return { x, scale, display: 'block' }
    })
  })

  if (!projectImages) {
    return <CircularProgress />
  }

  return (
    <div ref={ref} className={styles.wrapper}>
      {props.map(({ x, display, scale }, i) => (
        <animated.div className={styles.page} {...bind()} key={i} style={{ display, x }}>
          <IconButton style={{ zIndex: "1", position: "fixed", background: "#2d2d2d" }} onClick={() => handleFullScreenImage(projectImages[i])} size='small'>
            <FullscreenIcon />
          </IconButton>
          <animated.img src={projectImages[i]} style={{ scale, width: '100%', backgroundSize: "cover", touchAction: 'none' }} draggable='false' />
        </animated.div>
      ))}
      <StyledBackdrop open={open} onClick={() => { setOpen(false) }}>
        <FullscreenImage src={imageLink} />
      </StyledBackdrop>
    </div>
  )
}

export default function Carousel({ projectName }) {
  return (
    <div className={styles.container}>
      <Viewpager projectName={projectName} />
    </div>
  )
}
