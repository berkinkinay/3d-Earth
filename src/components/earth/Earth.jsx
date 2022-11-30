import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei'
import { TextureLoader } from "three"
import * as THREE from "three";
//ASSETS
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg"

export function Earth(props) {
    const [colorMap, normalMap, specularMap, cloudsMap] = 
 useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
);

    const earthRef = useRef();
    const cloudsRef = useRef();

useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    
    earthRef.current.rotation.y = elapsedTime / 10;
    cloudsRef.current.rotation.y = elapsedTime / 7;
});

  return (
    <>
        {/* <ambientLight intensity={1} /> */}
        <pointLight color="#f6f3ea" position={[2, 0, 2,]} intensity={1.2}/>
        <Stars 
          radius={400}
          depth={90}
          count={10000}
          factor={7}
          saturation={0}
          fade={true} 
        />
      <mesh ref={cloudsRef} >
        <sphereGeometry args={[1.005, 32, 32]}/>
        <meshPhongMaterial 
          map= {cloudsMap}
          opacity={0.4} 
          depthWrite={true} 
          transparent={true} 
          side={THREE.DoubleSide}
        />
      </mesh>
       <mesh ref={earthRef} class="flex absolute h-80 w-80 drop-shadow-3xl shadow-inner">
         <sphereGeometry args={[1, 32, 32]}/>
         <meshPhongMaterial specular specularMap={specularMap}/>
         <meshStandardMaterial 
            map={colorMap}
            normalMap={normalMap}
            metalness={0.4}
            roughness={0.7} />
         <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.4} 
            panSpeed={0.6} 
            rotateSpeed={0.5}
          />
        </mesh>
    </>
        )
}