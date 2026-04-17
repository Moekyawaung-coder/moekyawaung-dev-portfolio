'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const glowRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1.1 + Math.sin(state.clock.elapsedTime * 3) * 0.05);
    }
  });

  return (
    <group>
      {/* Outer Glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[4.2, 64, 64]} />
        <meshBasicMaterial color="#00FF85" transparent opacity={0.15} />
      </mesh>

      {/* Main Orb */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[3.8, 128, 128]} />
        <meshStandardMaterial
          color="#00FF85"
          emissive="#00FF85"
          emissiveIntensity={1.2}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Inner Core */}
      <mesh>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshBasicMaterial color="#FFFFFF" transparent opacity={0.6} />
      </mesh>

      <Text
        position={[0, 0, 4.5]}
        fontSize={0.8}
        color="#00FF85"
        anchorX="center"
        anchorY="middle"
        font="/fonts/bold.woff"
      >
        SUPREME
      </Text>
      <Text
        position={[0, -1.2, 4.5]}
        fontSize={0.8}
        color="#22D3EE"
        anchorX="center"
        anchorY="middle"
      >
        THE GOD
      </Text>
    </group>
  );
}

export default function HolographicOrb() {
  return (
    <div className="h-[600px] w-full relative">
      <Canvas camera={{ position: [0, 0, 18], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00FF85" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#22D3EE" />
        <Orb />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-green-400/70 text-sm font-mono tracking-widest">
        HOLOGRAPHIC ESSENCE OF SUPREME THE GOD
      </div>
    </div>
  );
}
