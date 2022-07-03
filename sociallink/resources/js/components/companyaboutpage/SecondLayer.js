import { useRef, Suspense } from "react";
import { useThree, useFrame, Canvas } from "@react-three/fiber";
import { useScroll, Image, ScrollControls, Scroll } from "@react-three/drei";

function SecondLayer() {
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
export default SecondLayer;