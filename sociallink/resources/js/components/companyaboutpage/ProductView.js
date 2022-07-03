import React from 'react'
import ReactDOM from 'react-dom';
import { useRef, Suspense } from "react";
import { useThree, useFrame, Canvas } from "@react-three/fiber";
import { useScroll, Image, ScrollControls, Scroll } from "@react-three/drei";
import SecondLayer from './SecondLayer';

function ProductView() {
    return (
        <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ScrollControls
            damping={3}
            pages={2}
            horizontal={false}
            infinite={false}
          >
            <Scroll>
              <SecondLayer/>
            </Scroll>
            <Scroll html>
              <h1 style={{ position: "absolute", top: "40vh", left: "1.5em" }}>
                Work More Efficent
              </h1>
              <p style={{ position: "absolute", top: "75vh", left: "35em" }}>
                With the web application we design it make manage networking traffic 
                and customer services much easier!
              </p>
              <h1 style={{ position: "absolute", top: "140vh", left: "40vw" }}>
                Connectivity
              </h1>
              <p style={{ position: "absolute", top: "160vh", left: "30em" }}>
                With the mobile messanger we design make it easier for admin and client 
                to interact and use the services!.
              </p>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    )
}

export default ProductView
if (document.getElementById('productview')) {
    ReactDOM.render(<ProductView />, document.getElementById('productview'));
}
