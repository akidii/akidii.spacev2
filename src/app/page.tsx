'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import JigsawScene from '@/components/JigsawScene';
import InteractiveButton from '@/components/InteractiveButton';

// 按钮配置和对应的拼图碎片映射
const BUTTON_CONFIG = [
  { text: '解锁执行力', pieces: [1, 5] },
  { text: '揭示产品思维', pieces: [2, 7] },
  { text: '洞察分析能力', pieces: [3, 6] },
  { text: '掌握工具应用', pieces: [4] },
  { text: '捕捉想法碎片', pieces: [8] },
  { text: '沉淀学习心得', pieces: [9] }
];

export default function Home() {
  const [flippedPieces, setFlippedPieces] = useState<Set<number>>(new Set());
  const [clickedButtons, setClickedButtons] = useState<Set<number>>(new Set());
  const [showGuide, setShowGuide] = useState(true);
  
  // 检查是否所有拼图都已翻转
  const allFlipped = flippedPieces.size === 9;
  
  // 处理按钮点击
  const handleButtonClick = (buttonIndex: number) => {
    if (clickedButtons.has(buttonIndex)) return;
    
    const config = BUTTON_CONFIG[buttonIndex];
    
    // 特殊处理："沉淀学习心得"按钮跳转到新页面
    if (config.text === '沉淀学习心得') {
      window.open('/learning-summary', '_blank');
      return;
    }
    
    const newFlippedPieces = new Set(flippedPieces);
    
    // 翻转对应的拼图碎片
    config.pieces.forEach(pieceId => {
      newFlippedPieces.add(pieceId);
    });
    
    setFlippedPieces(newFlippedPieces);
    setClickedButtons(prev => new Set([...prev, buttonIndex]));
    setShowGuide(false);
  };
  
  // 处理拼图碎片点击（用于导航）
  const handlePieceClick = (pieceId: number) => {
    if (allFlipped) {
      // 这里可以添加导航逻辑，跳转到对应的项目详情页
      console.log(`Navigate to piece ${pieceId}`);
    }
  };
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 粒子背景 */}
      <ParticleBackground />
      
      {/* 主要内容 */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* 顶部导航 */}
        <nav className="absolute top-0 right-0 p-6 z-20">
          <div className="flex space-x-6 text-[#8892B0] font-mono text-sm">
            <a href="#about" className="hover:text-[#64FFDA] transition-colors">
              关于我
            </a>
            <a href="#projects" className="hover:text-[#64FFDA] transition-colors">
              项目作品
            </a>
            <a href="#contact" className="hover:text-[#64FFDA] transition-colors">
              联系方式
            </a>
          </div>
        </nav>
        
        {/* 3D拼图场景 */}
        <div className="flex-1 relative">
          <JigsawScene 
            flippedPieces={flippedPieces}
            allFlipped={allFlipped}
            onPieceClick={handlePieceClick}
          />
        </div>
        
        {/* 引导文案 */}
        <AnimatePresence>
          {showGuide && (
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-[#64FFDA] text-glow font-mono mb-4"
                animate={{
                  textShadow: [
                    '0 0 10px #64FFDA',
                    '0 0 20px #64FFDA',
                    '0 0 10px #64FFDA'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                AI人格拼图
              </motion.h1>
              <motion.p
                className="text-xl text-[#CCD6F6] font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                点击下方按钮，探索我的能力版图
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* 交互按钮组 */}
        <div className="relative z-20 p-8 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {BUTTON_CONFIG.map((config, index) => (
                <InteractiveButton
                  key={index}
                  text={config.text}
                  onClick={() => handleButtonClick(index)}
                  isClicked={clickedButtons.has(index)}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
