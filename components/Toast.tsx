'use client'

import { useEffect, useState } from 'react'
import { brand } from '@/lib/brand'

interface ToastProps {
  message: string
  type?: 'success' | 'error' | 'info'
  isVisible: boolean
  onClose: () => void
  duration?: number
}

export default function Toast({ 
  message, 
  type = 'success', 
  isVisible, 
  onClose, 
  duration = 3000 
}: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  if (!isVisible) return null

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return {
          backgroundColor: '#10B981',
          borderColor: '#059669'
        }
      case 'error':
        return {
          backgroundColor: '#EF4444',
          borderColor: '#DC2626'
        }
      case 'info':
        return {
          backgroundColor: brand.colors.primary,
          borderColor: brand.colors.primaryHover
        }
      default:
        return {
          backgroundColor: '#10B981',
          borderColor: '#059669'
        }
    }
  }

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )
      case 'error':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )
      case 'info':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      default:
        return null
    }
  }

  const toastStyles = getToastStyles()

  return (
    <div 
      className={`fixed top-4 right-4 z-50 flex items-center space-x-3 px-4 py-3 rounded-lg text-white font-medium shadow-lg transform transition-all duration-300 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
      style={{
        backgroundColor: toastStyles.backgroundColor,
        borderLeft: `4px solid ${toastStyles.borderColor}`,
        boxShadow: brand.shadows.lg
      }}
    >
      <div className="flex-shrink-0">
        {getIcon()}
      </div>
      
      <span className="text-sm">{message}</span>
      
      <button
        onClick={onClose}
        className="flex-shrink-0 ml-2 text-white hover:text-gray-200 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}