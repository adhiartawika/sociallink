import React from 'react'
import ReactDOM from 'react-dom';
import { useRef, Suspense } from "react";
import { useThree, useFrame, Canvas } from "@react-three/fiber";
import { useScroll, Image, ScrollControls, Scroll } from "@react-three/drei";

function Images() {
    const { width, height } = useThree((state) => state.viewport);
    const data = useScroll();
    const group = useRef();
    useFrame(() => {
      group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3; 
      group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
      group.current.children[2].material.zoom =
        1 + data.range(1.15 / 3, 1 / 3) / 3;
      group.current.children[3].material.zoom =
        1 + data.range(1.15 / 3, 1 / 3) / 3;
    });
  
    return (
      <group ref={group}>
        <Image url="/images/img1.jpg" scale={[2, height -1, 1]} position={[-1, 0, 1]} />
        <Image url="/images/img2.jpg" scale={3} position={[1, 0, 1]} />
        <Image
          url="/images/img3.jpg"
          scale={[1, 3.5, 1]}
          position={[-2.3, -height, 2]}
        />
        <Image
          url="/images/img3.jpg"
          scale={[1, 2.7, 1]}
          position={[-1.4, -height - 0.7, 1]}
        />
        <Image
          url="/images/img4.jpg"
          scale={[1.4, 2, 1]}
          position={[1.3, -height - 0.3, 3.2]}
        />
      </group>
    );
}

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
              <Images />
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
