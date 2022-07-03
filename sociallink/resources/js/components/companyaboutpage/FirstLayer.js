import React from 'react'
import { useRef} from "react";
import { useThree, useFrame, Canvas } from "@react-three/fiber";
import { useScroll, Image, ScrollControls, Scroll } from "@react-three/drei";

function FirsLayer() {
    const { width, height } = useThree((state) => state.viewport);
    const data = useScroll();
    const group = useRef();
    useFrame(() => {
      group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3; //menghasilkan value 1.5 ~ 2.1 
      group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    });
  
    return (
      <group ref={group}>
          <Image url="/images/img1.jpg" scale={3} position={[-1, 0, 1]} />
          <Image url="/images/img2.jpg" scale={3} position={[1, 0, 1]} />
      </group>
    );
}

export default FirsLayer;