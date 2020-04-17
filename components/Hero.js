import React, { useEffect, useState, Suspense} from 'react';
import { Paper, Grid, CardMedia, createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, extend, useThree, useRender } from 'react-three-fiber';
import { useSpring, a } from "react-spring/three"
import { TextureLoader, MaterialLoader } from 'three';
import { RingLoader } from 'react-spinners'


const useStyles = makeStyles((theme) => 
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
extend({ OrbitControls })
const Controls = props => {
  const { gl, camera } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />
}


const Helmet = () => {
  const [model, setModel] = useState()
  useEffect(() => {
    new GLTFLoader().load("/scene.gltf", setModel)
  })
  return model ? <primitive object={model.scene} /> : null
}   

function Hero() {
  const classes = useStyles();
  return (
    <>
      <div className="media" />
      <h1>
        Roman's
        <br />
        <span>Creations</span>
      </h1>
      <Canvas camera={{ position: [0, 0, 15] }} shadowMap>
        <ambientLight intensity={1.5} />
        <pointLight intensity={2} position={[-10, -25, -10]} />
        <spotLight
          castShadow
          intensity={1.25}
          angle={Math.PI / 8}
          position={[25, 25, 15]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <fog attach="fog" args={['#cc7b32', 16, 20]} />
        <Helmet />
        <Controls
          autoRotate
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.5}
          rotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          />
        </Canvas>
        <div className="layer" />
        <Loading />
    </>
  )
}

export default Hero;