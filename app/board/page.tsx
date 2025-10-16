'use client'

import { Tldraw, useEditor, Editor } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import jsPDF from 'jspdf'
import { useState, useEffect } from 'react'
import { brand } from '@/lib/brand'
import WelcomeModal from '@/components/WelcomeModal'
import Toast from '@/components/Toast'

// 自定义的 UI 组件
function CustomUI() {
  const editor = useEditor()
  const [isExportingPNG, setIsExportingPNG] = useState(false)
  const [isExportingPDF, setIsExportingPDF] = useState(false)
  const [toast, setToast] = useState<{
    message: string
    type: 'success' | 'error' | 'info'
    isVisible: boolean
  }>({
    message: '',
    type: 'success',
    isVisible: false
  })

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ message, type, isVisible: true })
  }

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }))
  }

  const handleExportToPNG = async () => {
    if (!editor) return
    
    setIsExportingPNG(true)
    try {
      const svgResult = await editor.getSvgElement([...editor.getCurrentPageShapeIds()])
      if (!svgResult) {
        showToast('导出失败：无法获取画布内容', 'error')
        return
      }

      const svgString = svgResult.svg.outerHTML
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const img = new Image()

      img.onload = () => {
        canvas.width = svgResult.width
        canvas.height = svgResult.height
        ctx?.drawImage(img, 0, 0)
        
        const link = document.createElement('a')
        link.download = `sketchflow-${Date.now()}.png`
        link.href = canvas.toDataURL()
        link.click()
        
        showToast('PNG 导出成功！', 'success')
      }

      img.onerror = () => {
        showToast('导出失败：图片处理错误', 'error')
      }

      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
      const url = URL.createObjectURL(svgBlob)
      img.src = url
    } catch (error) {
      console.error('Export to PNG failed:', error)
      showToast('导出失败：请稍后重试', 'error')
    } finally {
      setIsExportingPNG(false)
    }
  }

  const handleExportToPDF = async () => {
    if (!editor) return
    
    setIsExportingPDF(true)
    try {
      const svgResult = await editor.getSvgElement([...editor.getCurrentPageShapeIds()])
      if (!svgResult) {
        showToast('导出失败：无法获取画布内容', 'error')
        return
      }

      const svgString = svgResult.svg.outerHTML
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const img = new Image()

      img.onload = () => {
        canvas.width = svgResult.width
        canvas.height = svgResult.height
        ctx?.drawImage(img, 0, 0)
        
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF({
          orientation: svgResult.width > svgResult.height ? 'landscape' : 'portrait',
          unit: 'px',
          format: [svgResult.width, svgResult.height]
        })
        
        pdf.addImage(imgData, 'PNG', 0, 0, svgResult.width, svgResult.height)
        pdf.save(`sketchflow-${Date.now()}.pdf`)
        
        showToast('PDF 导出成功！', 'success')
      }

      img.onerror = () => {
        showToast('导出失败：图片处理错误', 'error')
      }

      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
      const url = URL.createObjectURL(svgBlob)
      img.src = url
    } catch (error) {
      console.error('Export to PDF failed:', error)
      showToast('导出失败：请稍后重试', 'error')
    } finally {
      setIsExportingPDF(false)
    }
  }

  return (
    <>
      <Toast 
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
      <div style={{
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 1000,
        display: 'flex',
        gap: '12px',
        padding: '12px',
        backgroundColor: 'white',
        borderRadius: brand.borderRadius.lg,
        boxShadow: brand.shadows.lg,
        border: `1px solid ${brand.colors.border}`
      }}>
        <button 
          onClick={handleExportToPNG}
          disabled={isExportingPNG}
          style={{
            padding: '10px 16px',
            backgroundColor: isExportingPNG ? '#9CA3AF' : brand.colors.primary,
            color: 'white',
            border: 'none',
            borderRadius: brand.borderRadius.md,
            fontSize: '14px',
            fontWeight: '500',
            cursor: isExportingPNG ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          onMouseEnter={(e) => {
            if (!isExportingPNG) {
              e.currentTarget.style.backgroundColor = brand.colors.primaryHover;
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = brand.shadows.md;
            }
          }}
          onMouseLeave={(e) => {
            if (!isExportingPNG) {
              e.currentTarget.style.backgroundColor = brand.colors.primary;
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
        >
          {isExportingPNG ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
              导出中...
            </>
          ) : (
            <>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              导出 PNG
            </>
          )}
        </button>
        
        <button 
          onClick={handleExportToPDF}
          disabled={isExportingPDF}
          style={{
            padding: '10px 16px',
            backgroundColor: isExportingPDF ? '#9CA3AF' : brand.colors.secondary,
            color: 'white',
            border: 'none',
            borderRadius: brand.borderRadius.md,
            fontSize: '14px',
            fontWeight: '500',
            cursor: isExportingPDF ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          onMouseEnter={(e) => {
            if (!isExportingPDF) {
              e.currentTarget.style.backgroundColor = '#3A7BD5';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = brand.shadows.md;
            }
          }}
          onMouseLeave={(e) => {
            if (!isExportingPDF) {
              e.currentTarget.style.backgroundColor = brand.colors.secondary;
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
        >
          {isExportingPDF ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
              导出中...
            </>
          ) : (
            <>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              导出 PDF
            </>
          )}
        </button>
      </div>
    </>
  )
}

// 主页面组件
export default function BoardPage() {
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    // 检查是否是首次访问
    const hasVisited = localStorage.getItem('sketchflow-visited')
    if (!hasVisited) {
      setShowWelcome(true)
      localStorage.setItem('sketchflow-visited', 'true')
    }
  }, [])

  return (
    <>
      <WelcomeModal 
        isOpen={showWelcome} 
        onClose={() => setShowWelcome(false)} 
      />
      <div style={{ position: 'fixed', inset: 0 }}>
        <Tldraw persistenceKey="sketchflow-board">
          <CustomUI />
        </Tldraw>
      </div>
    </>
  )
}