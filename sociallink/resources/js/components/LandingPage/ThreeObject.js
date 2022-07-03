import { Stars } from '@react-three/drei';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import React, { Suspense, useRef, useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import { TextureLoader } from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei/core';
import * as THREE from 'three';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, Outline  } from '@react-three/postprocessing'
import Navigation from './Navigation';

const ThreeObject = () =>{
    const NormalBumi = '../img/earthmap1k.jpg';
    const BumiSpecular ='../img/specularmap.jpg';
    const BumiCloud = '../img/earthCloud.png';

    const [colorMap,specularMap,cloudsMap] = useLoader(TextureLoader,[NormalBumi,BumiSpecular,BumiCloud]);
    const BumiRef = useRef();
    const CloudRef = useRef();

    useFrame(({clock})=>{
        const WaktuRotasi = clock.getElapsedTime()
        BumiRef.current.rotation.y = WaktuRotasi / 6;
        CloudRef.current.rotation.y = WaktuRotasi / 6;
    })
    return(
        <>
            {/* <ambientLight intensity={1}/> */}
            <pointLight color="#f6f3ea" position={[2,2,1]} intensity={1.2}/>
            <mesh ref={CloudRef}>
                <sphereGeometry args={[1.010,32,32]}/>
                <meshPhongMaterial 
                map={cloudsMap} 
                opacity={0.4} 
                depthWrite={true} 
                transparent={true} 
                side={THREE.DoubleSide}
                />
            </mesh>
            <mesh ref={BumiRef}>
                <sphereBufferGeometry args={[1,32,32]}/>
                <meshPhongMaterial specularMap={specularMap}/>
                <meshStandardMaterial map={colorMap} metalness={0.4} roughness={0.7}/>
            </mesh>
        </>
    )
}

export default ThreeObject;