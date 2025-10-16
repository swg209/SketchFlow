# SketchFlow ✨

一个现代化的在线手稿绘制工具，让创意自由流动。

![SketchFlow Logo](https://img.shields.io/badge/SketchFlow-v1.0-blue?style=for-the-badge)

## 🎨 产品特色

### 🚀 核心功能
- **无限画布**：基于 Tldraw 的强大绘图引擎
- **自动保存**：本地存储，永不丢失创作
- **多格式导出**：支持 PNG 和 PDF 格式导出
- **响应式设计**：适配各种设备和屏幕尺寸

### 💫 用户体验
- **专业着陆页**：清晰展示产品价值和功能
- **新手引导**：首次访问时的欢迎弹窗和操作指南
- **实时反馈**：Toast 通知系统提供操作状态反馈
- **加载状态**：导出过程中的进度指示和按钮状态

### 🎯 品牌设计
- **统一视觉**：完整的品牌色彩系统和 Logo 设计
- **现代 UI**：精心设计的按钮、悬停效果和交互动画
- **品牌一致性**：所有组件遵循统一的设计语言

## 🛠️ 技术栈

- **框架**：Next.js 15 + TypeScript
- **画布引擎**：@tldraw/tldraw
- **样式系统**：Tailwind CSS
- **PDF 生成**：jsPDF
- **状态管理**：React Hooks + localStorage

## 📦 项目结构

```
SketchFlow/
├── app/
│   ├── page.tsx          # 着陆页
│   ├── board/
│   │   └── page.tsx      # 画布页面
│   ├── layout.tsx        # 根布局
│   └── globals.css       # 全局样式
├── components/
│   ├── WelcomeModal.tsx  # 欢迎引导弹窗
│   └── Toast.tsx         # 通知组件
├── lib/
│   └── brand.ts          # 品牌配置
└── public/               # 静态资源
```

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本
```bash
npm run build
npm start
```

## 🎯 使用指南

### 1. 访问着陆页
- 打开应用首页了解产品功能
- 点击"开始创作"按钮进入画布

### 2. 开始绘制
- 首次访问会显示操作指南
- 支持手绘、文字、形状等多种工具
- 作品自动保存到本地存储

### 3. 导出作品
- 点击右上角"导出 PNG"或"导出 PDF"按钮
- 支持加载状态显示和操作反馈
- 文件自动下载到本地

## 🔧 开发说明

### 品牌配置
所有品牌相关配置集中在 `lib/brand.ts` 文件中：
- 产品名称和描述
- Logo SVG 组件
- 色彩系统
- 字体、间距、圆角等设计令牌

### 组件开发
- `WelcomeModal`：新用户引导弹窗
- `Toast`：通知反馈组件
- 所有组件都使用品牌配置确保一致性

### 状态管理
- 使用 localStorage 实现自动保存
- React Hooks 管理组件状态
- Tldraw persistenceKey 确保画布数据持久化

## 🌟 功能亮点

### 用户体验优化
- ✅ 首次访问引导
- ✅ 操作状态反馈
- ✅ 加载状态指示
- ✅ 错误处理和重试

### 视觉设计提升
- ✅ 专业品牌形象
- ✅ 统一设计语言
- ✅ 现代化 UI 组件
- ✅ 响应式布局

### 技术架构优化
- ✅ 组件化开发
- ✅ TypeScript 类型安全
- ✅ 性能优化
- ✅ 代码可维护性

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**SketchFlow** - 让创意自由流动 ✨
