# Aslı Şahin - Personal Portfolio

A modern, interactive personal portfolio website showcasing full-stack development and UI/UX design skills. Built with cutting-edge web technologies and featuring stunning 3D graphics, smooth animations, and responsive design.

## 🚀 Technologies

### Core Framework

- **React 19** - Latest React with concurrent features and improved performance
- **TypeScript** - Type-safe development with enhanced developer experience
- **Vite** - Lightning-fast build tool and development server

### 3D Graphics & Animation

- **Three.js** - 3D graphics library for web
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **GSAP** - Professional-grade animation library for smooth transitions

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Icons** - Comprehensive icon library
- **Custom Fonts** - Montserrat and Playwrite fonts for typography

### Interactive Components

- **Keen Slider** - Touch-friendly carousel for skills showcase
- **Lottie React** - High-quality animations using Lottie files
- **Scroll Detection** - Custom scroll-based interactions

### Development Tools

- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

## 🏗️ Project Structure

```
src/
├── components/
│   ├── sections/           # Main page sections
│   │   ├── MainHomeScreen.tsx    # Hero section with 3D model
│   │   ├── AboutSection.tsx      # About me section
│   │   ├── SkillsSection.tsx     # Skills carousel
│   │   └── ContactSection.tsx    # Contact information
│   ├── Layout.tsx          # Main layout wrapper
│   ├── Nav.tsx             # Navigation component
│   ├── ThreeD.tsx          # 3D model and animations
│   ├── StarsBackground.tsx # Animated background
│   ├── LottieAnimation.tsx # Lottie animation wrapper
│   └── MainText.tsx        # Hero text content
├── config/
│   └── texts.ts            # Centralized text content
├── assets/
│   └── animations/         # Lottie animation files
└── public/
    ├── cat_arun/           # 3D model assets
    └── fonts/              # Custom font files
```

## ✨ Features

### 🎨 Visual Design

- **Gradient Backgrounds** - Beautiful purple gradient transitions between sections
- **3D Cat Model** - Interactive 3D model with mouse tracking and animations
- **Animated Stars** - Dynamic star field background effect
- **Lottie Animations** - Smooth gradient and contact animations
- **Responsive Design** - Optimized for all device sizes

### 🎯 Interactive Elements

- **Smooth Navigation** - Fixed navigation with smooth scrolling
- **Skills Overview** - Categorized technologies with proficiency indicators
- **3D Interactions** - Mouse-responsive 3D model with floating animations
- **Download CV** - Floating CV download button
- **Contact Information** - Professional contact details with animations

### 📱 Responsive Features

- **Mobile-First Design** - Optimized layout for mobile devices
- **Adaptive 3D Model** - Responsive 3D canvas sizing
- **Flexible Typography** - Scalable text across all screen sizes
- **Touch-Friendly** - Optimized touch interactions for mobile

## 🎮 How It Works

### 3D Graphics System

The website features a sophisticated 3D graphics system built with Three.js and React Three Fiber:

- **Model Loading** - GLTF model loader for the cat 3D model
- **Responsive Canvas** - Dynamic canvas sizing based on screen size
- **Mouse Tracking** - Interactive mouse movement effects
- **Floating Animation** - GSAP-powered floating animations
- **Shadow System** - Dynamic contact shadows with responsive parameters

### Animation System

Multiple animation layers create a rich visual experience:

- **Lottie Animations** - JSON-based animations for gradients and contact
- **GSAP Transitions** - Smooth page transitions and element animations
- **CSS Animations** - Tailwind-powered micro-interactions
- **Scroll-Based Effects** - Custom scroll detection for parallax effects

### Content Management

Centralized content management through the `texts.ts` configuration:

- **Modular Content** - Easy-to-update text content
- **Type Safety** - TypeScript interfaces for content structure
- **Internationalization Ready** - Structured for future i18n support

### Performance Optimizations

- **Code Splitting** - Vite's automatic code splitting
- **Lazy Loading** - Suspense boundaries for 3D components
- **Optimized Assets** - Compressed images and 3D models
- **Efficient Rendering** - React 19's concurrent features

## 🎨 Design Philosophy

The portfolio emphasizes:

- **Modern Aesthetics** - Purple gradient theme with professional styling
- **Interactive Experience** - Engaging 3D elements and smooth animations
- **Performance** - Fast loading and smooth interactions
- **Accessibility** - Semantic HTML and keyboard navigation
- **Mobile Excellence** - Perfect experience across all devices

## 🛠️ Development

The project uses modern development practices:

- **TypeScript** for type safety and better developer experience
- **ESLint** for code quality and consistency
- **Vite** for fast development and optimized builds
- **Modular Architecture** for maintainable and scalable code

This portfolio showcases advanced web development skills while maintaining excellent performance and user experience across all devices.
