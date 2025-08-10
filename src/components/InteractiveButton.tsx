'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface InteractiveButtonProps {
  text: string;
  onClick: () => void;
  isClicked: boolean;
  index: number;
}

export default function InteractiveButton({ 
  text, 
  onClick, 
  isClicked, 
  index 
}: InteractiveButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.button
      className={`
        relative px-6 py-3 font-mono text-sm font-medium
        border-2 rounded-lg transition-all duration-300
        ${isClicked 
          ? 'border-[#64FFDA] bg-[#64FFDA] text-[#0A192F] shadow-lg shadow-[#64FFDA]/30' 
          : 'border-[#64FFDA] bg-transparent text-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#0A192F]'
        }
        ${isHovered && !isClicked ? 'glow' : ''}
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
      onClick={onClick}
      disabled={isClicked}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: isClicked ? 1 : 1.05 }}
      whileTap={{ scale: isClicked ? 1 : 0.95 }}
    >
      <motion.span
        className="relative z-10"
        animate={{
          textShadow: isHovered && !isClicked 
            ? '0 0 10px #64FFDA' 
            : '0 0 0px #64FFDA'
        }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.span>
      
      {/* 背景光效 */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#64FFDA]/20 to-[#64FFDA]/40"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered && !isClicked ? 1 : 0,
          scale: isHovered && !isClicked ? 1.1 : 1
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* 完成状态指示器 */}
      {isClicked && (
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-[#64FFDA] rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 500 }}
        >
          <motion.div
            className="w-full h-full bg-[#64FFDA] rounded-full"
            animate={{ 
              boxShadow: [
                '0 0 0px #64FFDA',
                '0 0 10px #64FFDA',
                '0 0 0px #64FFDA'
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>
      )}
    </motion.button>
  );
}