'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import {RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';

interface JigsawPieceProps {
  position: [number, number, number];
  id: number;
  content: string;
  isFlipped: boolean;
  onFlip: () => void;
  finalPosition?: [number, number, number];
  shouldAssemble?: boolean;
}

export default function JigsawPiece({ 
  position, 
  id, 
  content, 
  isFlipped, 
  onFlip,
  finalPosition,
  shouldAssemble 
}: JigsawPieceProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);
  
  // 飘动动画
  useFrame((state) => {
    if (meshRef.current && !shouldAssemble) {
      const time = state.clock.elapsedTime;
      meshRef.current.position.y += Math.sin(time * 0.5 + id) * 0.002;
      meshRef.current.rotation.z = Math.sin(time * 0.3 + id) * 0.1;
    }
  });
  
  // 翻转动画
  const handleFlip = () => {
    if (!isFlipped && meshRef.current) {
      gsap.to(meshRef.current.rotation, {
        y: Math.PI,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: onFlip
      });
    }
  };
  
  // 拼合动画
  if (shouldAssemble && finalPosition && groupRef.current) {
    gsap.to(groupRef.current.position, {
      x: finalPosition[0],
      y: finalPosition[1],
      z: finalPosition[2],
      duration: 1.5,
      ease: "power2.inOut"
    });
  }
  
  return (
    <group ref={groupRef} position={position}>
      <mesh
        ref={meshRef}
        onClick={handleFlip}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        {/* 拼图碎片形状 */}
        <RoundedBox args={[1.2, 1.2, 0.1]} radius={0.1}>
          <meshStandardMaterial
            color={isFlipped ? '#64FFDA' : '#1E2A3A'}
            emissive={hovered ? '#64FFDA' : '#000000'}
            emissiveIntensity={hovered ? 0.2 : 0}
            transparent
            opacity={0.9}
          />
        </RoundedBox>
        
      
      </mesh>
    </group>
  );
}
