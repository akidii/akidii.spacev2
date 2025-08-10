'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LearningSummary() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-[#CCD6F6] p-8">
      {/* 返回按钮 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link 
          href="/"
          className="inline-flex items-center text-[#64FFDA] hover:text-[#CCD6F6] transition-colors font-mono"
        >
          ← 返回主页
        </Link>
      </motion.div>

      {/* 主要内容 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#64FFDA] mb-8 font-mono"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          学习总结与心得
        </motion.h1>

        <div className="space-y-8">
          {/* 文档下载区域 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-[#112240] p-6 rounded-lg border border-[#233554] text-center"
          >
            <h2 className="text-2xl font-bold text-[#64FFDA] mb-4 font-mono">学习总结文档</h2>
            <div className="space-y-4 text-[#8892B0] leading-relaxed">
              <p className="text-lg">
                完整的学习总结与心得内容请下载查看原始文档
              </p>
              <motion.a
                href="/学习总结与心得.docx"
                download="学习总结与心得.docx"
                className="inline-flex items-center px-6 py-3 bg-[#64FFDA] text-[#0A192F] font-mono font-semibold rounded-lg hover:bg-[#4ECDC4] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                下载学习总结文档
              </motion.a>
              <p className="text-sm text-[#8892B0] mt-4">
                文档格式：Microsoft Word (.docx)
              </p>
            </div>
          </motion.section>

          {/* 学习概览 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-[#112240] p-6 rounded-lg border border-[#233554]"
          >
            <h2 className="text-2xl font-bold text-[#64FFDA] mb-4 font-mono">学习内容概览</h2>
            <div className="space-y-4 text-[#8892B0] leading-relaxed">
              <p>
                本次学习总结涵盖了AI产品体验、技术实践、市场分析等多个维度的深度思考和实践心得。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-[#0A192F] p-4 rounded-lg border border-[#233554]">
                  <h3 className="text-[#64FFDA] font-semibold mb-2">📱 AI产品体验</h3>
                  <p className="text-sm">深度体验主流AI工具，分析产品设计理念和用户体验</p>
                </div>
                <div className="bg-[#0A192F] p-4 rounded-lg border border-[#233554]">
                  <h3 className="text-[#64FFDA] font-semibold mb-2">🔧 技术实践</h3>
                  <p className="text-sm">前端开发技术栈学习，3D动画和交互效果实现</p>
                </div>
                <div className="bg-[#0A192F] p-4 rounded-lg border border-[#233554]">
                  <h3 className="text-[#64FFDA] font-semibold mb-2">📊 市场分析</h3>
                  <p className="text-sm">AI产品市场趋势分析，商业模式和竞争格局研究</p>
                </div>
                <div className="bg-[#0A192F] p-4 rounded-lg border border-[#233554]">
                  <h3 className="text-[#64FFDA] font-semibold mb-2">🚀 个人成长</h3>
                  <p className="text-sm">学习方法总结，职业发展规划和未来展望</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 产品分析与市场洞察 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-[#112240] p-6 rounded-lg border border-[#233554]"
          >
            <h2 className="text-2xl font-bold text-[#64FFDA] mb-4 font-mono">产品分析与市场洞察</h2>
            <div className="space-y-4 text-[#8892B0] leading-relaxed">
              <p>
                通过深入分析多个AI产品的功能特性、用户体验和商业模式，我对AI产品市场有了更深刻的理解。
              </p>
              <p>
                <strong className="text-[#CCD6F6]">关键洞察：</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>AI产品的差异化主要体现在专业领域的深度和用户体验的细节</li>
                <li>成功的AI产品都具备良好的学习能力和个性化适应性</li>
                <li>用户对AI产品的期望正在从"工具"向"伙伴"转变</li>
                <li>数据安全和隐私保护是AI产品发展的重要考量因素</li>
              </ul>
            </div>
          </motion.section>

          {/* 技术学习与实践 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-[#112240] p-6 rounded-lg border border-[#233554]"
          >
            <h2 className="text-2xl font-bold text-[#64FFDA] mb-4 font-mono">技术学习与实践</h2>
            <div className="space-y-4 text-[#8892B0] leading-relaxed">
              <p>
                在项目开发过程中，我掌握了现代前端开发技术栈，并将其应用于个人作品集网站的构建。
              </p>
              <p>
                <strong className="text-[#CCD6F6]">技术收获：</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>熟练使用React、Next.js构建现代化Web应用</li>
                <li>掌握Three.js和Framer Motion实现3D动画和交互效果</li>
                <li>学会使用Tailwind CSS进行响应式设计</li>
                <li>理解了组件化开发和状态管理的最佳实践</li>
                <li>体验了从设计到开发的完整产品流程</li>
              </ul>
            </div>
          </motion.section>

          {/* 个人成长与反思 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="bg-[#112240] p-6 rounded-lg border border-[#233554]"
          >
            <h2 className="text-2xl font-bold text-[#64FFDA] mb-4 font-mono">个人成长与反思</h2>
            <div className="space-y-4 text-[#8892B0] leading-relaxed">
              <p>
                这次学习经历让我对AI时代的产品开发有了全新的认识，也明确了自己未来的发展方向。
              </p>
              <p>
                <strong className="text-[#CCD6F6]">成长感悟：</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>保持对新技术的敏感度和学习热情是关键</li>
                <li>理论学习与实践应用相结合才能真正掌握知识</li>
                <li>用户体验始终是产品成功的核心要素</li>
                <li>跨学科的知识融合能够产生更大的创新价值</li>
                <li>持续的反思和总结是个人成长的重要推动力</li>
              </ul>
            </div>
          </motion.section>

          {/* 未来展望 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="bg-[#112240] p-6 rounded-lg border border-[#233554]"
          >
            <h2 className="text-2xl font-bold text-[#64FFDA] mb-4 font-mono">未来展望</h2>
            <div className="space-y-4 text-[#8892B0] leading-relaxed">
              <p>
                基于这次学习经历，我对未来的学习和职业发展有了更清晰的规划。
              </p>
              <p>
                <strong className="text-[#CCD6F6]">发展方向：</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>深入学习AI产品设计和用户体验优化</li>
                <li>持续关注前端技术发展趋势，提升技术深度</li>
                <li>培养产品思维，从技术实现向商业价值转化</li>
                <li>建立个人技术品牌，分享学习心得和项目经验</li>
                <li>寻找AI+传统行业的创新机会和应用场景</li>
              </ul>
            </div>
          </motion.section>
        </div>

        {/* 结语 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-[#64FFDA] font-mono text-lg">
            "学而时习之，不亦说乎" - 持续学习，持续成长
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}