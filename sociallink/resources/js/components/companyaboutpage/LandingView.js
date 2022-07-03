import React from 'react'
import ReactDOM from 'react-dom';
import {Suspense } from "react";
import FirsLayer from './FirstLayer';
import { useThree, useFrame, Canvas } from "@react-three/fiber";
import { useScroll, Image, ScrollControls, Scroll } from "@react-three/drei";

function LandingView() {
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
    <Suspense fallback={null}>
      <ScrollControls
        damping={4}
        pages={1}
        horizontal={false}
        infinite={false}
      >
        <Scroll>
          <FirsLayer/>
        </Scroll>
        <Scroll html>
          <h1 className='text-landing' style={{ position: "absolute", top: "9vh", left: "6.8em" }}>
                Who are we?
          </h1>
          <h1 className='text-landing-resize' style={{ position: "absolute", top: "20vh", left: "3em" }}>
                Who are we?
          </h1>
          <p className='para-landing' style={{ position: "absolute", top: "77vh", left: "41em" }}>
            With the web application we design it make manage networking traffic 
            and customer services much easier!
          </p>

        </Scroll>
      </ScrollControls>
    </Suspense>
  </Canvas>
  )
}

export default LandingView
if (document.getElementById('landingview')) {
    ReactDOM.render(<LandingView />, document.getElementById('landingview'));
}
