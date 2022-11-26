import React from 'react'
import { useLoader } from '@react-three/fiber';
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
 useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]);

  return (
    <>
        <ambientLight intensity={1} />
        <Stars radius={300} depth={50} />
        <mesh>
            <sphereGeometry args={[1, 32, 32]}/>
            <meshPhongMaterial 
                map= {cloudsMap}
                opacity={0.4} 
                depthWrite={true} 
                transparent={true} 
                side={THREE.DoubleSide} />
        </mesh>
        <mesh class="flex absolute h-80 w-80 drop-shadow-3xl shadow-inner">
            <sphereGeometry args={[1, 32, 32]}/>
            <meshPhongMaterial specular specularMap={specularMap}/>
            <meshStandardMaterial map={colorMap} normalMap={normalMap} />
            <OrbitControls
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
                zoomSpeed={0.5} 
                panSpeed={0.5} 
                rotateSpeed={0.4}
                />
        </mesh>
    </>
        )
}