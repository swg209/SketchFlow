'use client'

import Link from 'next/link'
import { brand, logoSvg } from '@/lib/brand'

export default function LandingPage() {
  const LogoComponent = () => (
    <svg 
      viewBox={logoSvg.viewBox} 
      className="w-8 h-8"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* 导航栏 */}
      <header className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <LogoComponent />
          <span className="text-xl font-bold" style={{ color: brand.colors.primary }}>
            {brand.name}
          </span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
            功能
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
            关于
          </a>
        </nav>
      </header>

      {/* 英雄区 */}
      <main className="px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            释放你的思绪，即刻捕捉灵感
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {brand.description}
          </p>
          
          {/* CTA 按钮 */}
          <Link 
            href="/board"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ 
              backgroundColor: brand.colors.primary,
              boxShadow: brand.shadows.md 
            }}
          >
            开始创作
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </main>

      {/* 特色功能 */}
      <section id="features" className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            为什么选择 {brand.name}？
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* 功能1：无限画布 */}
            <div className="text-center p-6 rounded-xl" style={{ backgroundColor: brand.colors.background }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: brand.colors.primary + '20' }}>
                <svg className="w-8 h-8" style={{ color: brand.colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4a1 1 0 011-1h4m0 0V1m0 2h2m0 0V1m0 2h2m0 0V1m0 2h4a1 1 0 011 1v4m0 0h2m-2 0v2m0 0h2m-2 0v2m0 0h2m-2 0v4a1 1 0 01-1 1h-4m0 0v2m0-2h-2m0 0v2m0-2h-2m0 0v2m0-2h-4a1 1 0 01-1-1v-4m0 0H1m2 0v-2m0 0H1m2 0v-2m0 0H1m2 0V8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">无限画布</h3>
              <p className="text-gray-600">自由绘制，不受边界限制，让创意无限延展</p>
            </div>

            {/* 功能2：自动保存 */}
            <div className="text-center p-6 rounded-xl" style={{ backgroundColor: brand.colors.background }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: brand.colors.secondary + '20' }}>
                <svg className="w-8 h-8" style={{ color: brand.colors.secondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">自动保存</h3>
              <p className="text-gray-600">本地自动保存，永不丢失你的珍贵创作</p>
            </div>

            {/* 功能3：轻松导出 */}
            <div className="text-center p-6 rounded-xl" style={{ backgroundColor: brand.colors.background }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: brand.colors.accent + '20' }}>
                <svg className="w-8 h-8" style={{ color: brand.colors.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">轻松导出</h3>
              <p className="text-gray-600">一键导出为 PNG 或 PDF，随时分享你的作品</p>
            </div>
          </div>
        </div>
      </section>

      {/* 关于区域 */}
      <section id="about" className="px-6 py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            专为创意思维而生
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {brand.name} 是一款极简而强大的在线白板工具，专注于帮助你快速捕捉灵感、整理思路、绘制草图。
            无论是头脑风暴、项目规划，还是随手涂鸦，都能在这里找到最舒适的创作体验。
          </p>
          <Link 
            href="/board"
            className="inline-flex items-center px-6 py-3 text-base font-medium border-2 rounded-full transition-all duration-300 hover:scale-105"
            style={{ 
              borderColor: brand.colors.primary,
              color: brand.colors.primary
            }}
          >
            立即体验
          </Link>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="px-6 py-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <LogoComponent />
            <span className="text-lg font-semibold">{brand.name}</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 {brand.name}. 让创意自由流淌。
          </p>
        </div>
      </footer>
    </div>
  )
}