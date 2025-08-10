'use client';

import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import JigsawPiece from './JigsawPiece';
import { motion, AnimatePresence } from 'framer-motion';

// 拼图数据配置
const PUZZLE_DATA = [
  { id: 1, content: '模拟面试\n助手', position: [-3, 2, 0] as [number, number, number] },
  { id: 2, content: '产品需求\n文档', position: [0, 2, 0] as [number, number, number] },
  { id: 3, content: '产品体验\n报告', position: [3, 2, 0] as [number, number, number] },
  { id: 4, content: '工具应用\n能力', position: [-3, 0, 0] as [number, number, number] },
  { id: 5, content: 'Act-Nav\n插件', position: [0, 0, 0] as [number, number, number] },
  { id: 6, content: '市场调研\n报告', position: [3, 0, 0] as [number, number, number] },
  { id: 7, content: '产品分析\n报告', position: [-3, -2, 0] as [number, number, number] },
  { id: 8, content: '想法\n碎片', position: [0, -2, 0] as [number, number, number] },
  { id: 9, content: '学习总结\n心得笔记', position: [3, -2, 0] as [number, number, number] }
];

// 最终拼合位置（3x3网格）
const FINAL_POSITIONS: [number, number, number][] = [
  [-1.3, 1.3, 0], [0, 1.3, 0], [1.3, 1.3, 0],
  [-1.3, 0, 0], [0, 0, 0], [1.3, 0, 0],
  [-1.3, -1.3, 0], [0, -1.3, 0], [1.3, -1.3, 0]
];

interface JigsawSceneProps {
  flippedPieces: Set<number>;
  allFlipped: boolean;
  onPieceClick: (id: number) => void;
}

export default function JigsawScene({ 
  flippedPieces, 
  allFlipped, 
  onPieceClick 
}: JigsawSceneProps) {
  const [showCompletion, setShowCompletion] = useState(false);
  
  useEffect(() => {
    if (allFlipped) {
      // 延迟显示完成信息，等待拼合动画
      const timer = setTimeout(() => {
        setShowCompletion(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [allFlipped]);
  
  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={!allFlipped}
          autoRotate={!allFlipped}
          autoRotateSpeed={0.5}
        />
        
        {/* 环境光 */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#64FFDA" />
        <pointLight position={[-10, -10, 10]} intensity={0.6} color="#64FFDA" />
        
        {/* 拼图碎片 */}
        {PUZZLE_DATA.map((piece, index) => (
          <JigsawPiece
            key={piece.id}
            id={piece.id}
            position={piece.position}
            content={piece.content}
            isFlipped={flippedPieces.has(piece.id)}
            onFlip={() => onPieceClick(piece.id)}
            finalPosition={allFlipped ? FINAL_POSITIONS[index] : undefined}
            shouldAssemble={allFlipped}
          />
        ))}
      </Canvas>
      
      {/* 完成状态覆盖层 */}
      <AnimatePresence>
        {showCompletion && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="text-center space-y-6 p-8 rounded-2xl bg-[#0A192F]/90 border border-[#64FFDA]/30"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
            >
              <motion.h1
                className="text-4xl font-bold text-[#64FFDA] text-glow font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                拼图完成！
              </motion.h1>
              
              <motion.p
                className="text-xl text-[#CCD6F6] font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                你已解锁我的完整能力图谱
              </motion.p>
              
              <motion.div
                className="text-lg text-[#8892B0] font-mono border-t border-[#64FFDA]/30 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
              >
                <p>你发现：</p>
                <p className="text-[#64FFDA] mt-2">
                  一个用通信工程思维解决AI问题的实干家
                </p>
              </motion.div>
              
              <motion.button
                className="mt-6 px-6 py-3 bg-[#64FFDA] text-[#0A192F] font-mono font-medium rounded-lg hover:bg-[#64FFDA]/90 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                onClick={() => setShowCompletion(false)}
              >
                探索更多
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}