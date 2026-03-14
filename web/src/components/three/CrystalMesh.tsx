"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function CrystalMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.LineSegments>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y += delta * 0.15;
      wireRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group position={[0, 0.3, 0]}>
      {/* Solid mesh with transparent material */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#0f0f2e"
          transparent
          opacity={0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      {/* Wireframe overlay */}
      <lineSegments ref={wireRef}>
        <edgesGeometry args={[new THREE.IcosahedronGeometry(1.21, 1)]} />
        <lineBasicMaterial color="#00f0ff" transparent opacity={0.6} />
      </lineSegments>
      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.15} />
      </mesh>
      {/* Center point light */}
      <pointLight color="#00f0ff" intensity={2} distance={5} />
    </group>
  );
}
