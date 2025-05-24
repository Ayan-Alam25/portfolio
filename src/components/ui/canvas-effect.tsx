"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!particlesRef.current) return;
    particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
  });

  const count = 500;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.03}
        color="#383838"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

export function CanvasEffect() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
}
