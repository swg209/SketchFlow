// 品牌配置文件
export const brand = {
  name: 'SketchFlow',
  tagline: '释放你的思绪，即刻捕捉灵感',
  description: '一款极简的在线白板，专注于整理、手绘与分享',
  
  colors: {
    primary: '#7B61FF',      // 创造性的紫色
    primaryHover: '#6B51E6', // 悬停时的深紫色
    secondary: '#4A90E2',    // 柔和的蓝色
    accent: '#FF6B6B',       // 强调色（红色）
    background: '#FFFFFF',   // 背景白色
    surface: '#F8F9FA',      // 表面灰色
    text: '#2D3748',         // 主文本色
    textSecondary: '#718096', // 次要文本色
    border: '#E2E8F0',       // 边框色
  },
  
  fonts: {
    primary: 'Nunito, -apple-system, BlinkMacSystemFont, sans-serif',
    secondary: 'Poppins, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  }
}

// Logo SVG 组件的配置
export const logoSvg = {
  viewBox: "0 0 32 32",
  paths: [
    {
      d: "M4 28L8 24L12 20L16 16L20 12L24 8L28 4",
      stroke: "#7B61FF",
      strokeWidth: "2",
      strokeLinecap: "round"
    },
    {
      d: "M6 26C8 24 10 22 12 20C14 18 16 16 18 14",
      stroke: "#4A90E2",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      opacity: "0.7"
    }
  ],
  circles: [
    {
      cx: "26",
      cy: "6", 
      r: "3",
      fill: "#7B61FF"
    },
    {
      cx: "6",
      cy: "26",
      r: "2", 
      fill: "#FF6B6B"
    }
  ]
}