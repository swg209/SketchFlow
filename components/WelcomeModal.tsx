'use client'

import { brand, logoSvg } from '@/lib/brand'

interface WelcomeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  if (!isOpen) return null

  const LogoComponent = () => (
    <svg 
      viewBox={logoSvg.viewBox} 
      className="w-12 h-12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {logoSvg.paths.map((path, index) => (
        <path 
          key={index} 
          d={path.d} 
          stroke={path.stroke} 
          strokeWidth={path.strokeWidth}
          strokeLinecap={path.strokeLinecap as "round" | "butt" | "square"}
          opacity={path.opacity}
        />
      ))}
      {logoSvg.circles.map((circle, index) => (
        <circle key={index} cx={circle.cx} cy={circle.cy} r={circle.r} fill={circle.fill} />
      ))}
    </svg>
  )

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl p-8 max-w-md mx-4 relative"
        style={{ boxShadow: brand.shadows.xl }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 内容 */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <LogoComponent />
          </div>
          
          <h2 className="text-2xl font-bold mb-2" style={{ color: brand.colors.text }}>
            欢迎来到 {brand.name}！
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {brand.description}
          </p>

          {/* 快速指南 */}
          <div className="text-left space-y-3 mb-6">
            <div className="flex items-start space-x-3">
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5"
                style={{ backgroundColor: brand.colors.primary }}
              >
                1
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">开始绘制</p>
                <p className="text-xs text-gray-600">点击画布任意位置开始创作，支持手绘、文字和形状</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5"
                style={{ backgroundColor: brand.colors.secondary }}
              >
                2
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">自动保存</p>
                <p className="text-xs text-gray-600">你的作品会自动保存到本地，无需担心丢失</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5"
                style={{ backgroundColor: brand.colors.accent }}
              >
                3
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">导出分享</p>
                <p className="text-xs text-gray-600">使用右上角按钮导出为 PNG 或 PDF 格式</p>
              </div>
            </div>
          </div>

          {/* 开始按钮 */}
          <button
            onClick={onClose}
            className="w-full py-3 px-6 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: brand.colors.primary,
              boxShadow: brand.shadows.md 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = brand.colors.primaryHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = brand.colors.primary;
            }}
          >
            开始创作
          </button>
        </div>
      </div>
    </div>
  )
}