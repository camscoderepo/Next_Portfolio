import React, { useEffect, useState} from 'react';
import { Paper, Grid, CardMedia, createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import * as THREE from 'three';
import * as CANNON from 'cannon';
import ReactDOM from 'react-dom';
import { Canvas } from 'react-three-fiber';
import { useCannon, Provider } from './hooks/useCannon';


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        media: {
            height: '100vh'
           
          },
        title: {
            
            // color: 'white',
            // fontWeight: 'bold',
            // '@media (max-width: 400px)': {
            //     paddingLeft: '50px'
            // }
        },
        card: {
            height: 140,
            paddingTop: '56.25%',
        }
    }),
);

function Plane({ position }) {
    // Register plane as a physics body with zero mass
    const ref = useCannon({ mass: 0 }, body => {
      body.addShape(new CANNON.Plane())
      body.position.set(...position)
    })
    return (
      <mesh ref={ref} receiveShadow>
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshStandardMaterial attach="material" color="#171717" />
      </mesh>
    )
  }
  
  function Box({ position }) {
    // Register box as a physics body with mass
    const ref = useCannon({ mass: 100000 }, body => {
      body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)))
      body.position.set(...position)
    })
    return (
      <mesh ref={ref} castShadow receiveShadow>
        <boxGeometry attach="geometry" args={[2, 2, 2]} />
        <meshStandardMaterial attach="material" roughness={0.5} color="#575757" />
      </mesh>
    )
  }
  

function Hero() {
    const [showPlane, set] = useState(true)
    useEffect(() => void setTimeout(() => set(false)), [])
    const classes = useStyles();
    return (
        <div className={classes.media}>
        <Canvas
          shadowMap
          camera={{ position: [0, 0, 15] }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping
            gl.outputEncoding = THREE.sRGBEncoding
          }}>
          <pointLight position={[-10, -10, 30]} intensity={0.25} />
          <spotLight intensity={0.3} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow />
          <Provider>
            <Plane position={[0, 0, -10]} />
            {showPlane && <Plane position={[0, 0, 0]} />}
            <Box position={[1, 0, 1]} />
            <Box position={[2, 1, 5]} />
            <Box position={[0, 0, 6]} />
            <Box position={[-1, 1, 8]} />
            <Box position={[-2, 2, 13]} />
            <Box position={[2, -1, 13]} />
            {!showPlane && <Box position={[0.5, 1.0, 20]} />}
          </Provider>
        </Canvas>
      </div>
    )
}

export default Hero;
