"use client"

import style from "./WaterAnimation.module.scss"

import {MeshDistortMaterial, PerspectiveCamera} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {clsx} from "clsx";

type WaterAnimationProps = {
    className?: string
}

export const WaterAnimation = ({className}: WaterAnimationProps) => {
    return (
        <div className={clsx(style.waterAnimation, Boolean(className) && className)}>
            <Canvas>
                <ambientLight intensity={0.3}/>
                <directionalLight position={[8, 8, -8]} intensity={3}/>
                <directionalLight position={[-8, -8, -8]} intensity={3}/>
                <directionalLight position={[4, 4, 8]} intensity={0.5}/>
                <mesh>
                    <sphereGeometry args={[1, 64, 64]}/>
                    <MeshDistortMaterial
                        speed={2}
                        distort={0.8}
                        radius={2}
                        transmission={0}
                        thickness={0.9}

                        roughness={0.5}
                        metalness={0.5}
                        color="#aff9e5"

                        // transparent={true}
                        // opacity={0.9}
                    />
                </mesh>
                <PerspectiveCamera makeDefault
                                   position={[
                                       0, 0, 6
                                       //3.5, 3.5, 3.5
                                   ]}
                />
                {/*<OrbitControls/>*/}
            </Canvas>
        </div>
    )
}