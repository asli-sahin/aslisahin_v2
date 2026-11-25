export const texts = {
  // Navigation
  nav: {
    brand: "ASLI SAHIN",
    home: "Home",
    about: "About",
    projects: "Projects",
    showcases: "Showcases",
    skills: "Skills",
    contact: "Contact",
  },

  // Main Text Component
  mainText: {
    name: "Aslı Ayşe Şahin",
    title: "Full Stack Developer & UI/UX Designer",
    description:
      "I create beautiful, functional, and user-centered digital experiences that bring ideas to life through code and design.",
  },

  about: {
    summary:
      "I am a Software Developer with a BSc in Computer Engineering and hands-on experience building production-ready web and mobile applications. My expertise spans full-stack development using Spring Boot, .NET, React, and Flutter, along with relational database design and cloud platform releases. Currently focused on delivering scalable backend architectures and modern web/mobile interfaces in fast-paced Agile environments.",
  },

  projects: {
    title: "Projects",
    subtitle: "Things I've built",
    showcasesTitle: "Showcases",
    items: [
      {
        id: "couch",
        name: "Couch",
        title: "Multi-Device Co-Watching Platform",
        stack: ["React", "TypeScript", "Vite", "WebRTC", "HLS.js"],
        description:
          "P2P screen-sharing watch-party system where a host captures a browser tab via a Chrome/Firefox extension and guests join via a 6-digit room code on Android TV, mobile, or web.",
        video: "/videos/couch-demo.mp4",
        videoLabel: "Couch Demo",
        aspect: "16 / 9",
        videoWidth: 1920,
        videoHeight: 1080,
      },
      {
        id: "dual-sub",
        name: "Dual-Sub",
        title: "Dual-Subtitle Chrome Extension",
        stack: ["TypeScript", "React 19", "WXT", "Chrome Extension APIs"],
        description:
          "Client-side extension that detects HTML5 videos and overlays customizable, synchronized dual subtitles (SRT, VTT, ASS/SSA) with auto-language detection, translation, and persistent caching.",
        video: null,
        videoLabel: null,
        aspect: null,
        videoWidth: null,
        videoHeight: null,
      },
      {
        id: "ping",
        name: "Ping",
        title: "Real-Time Chat Application",
        stack: ["React Native", "PostgreSQL", "Firebase Auth", "Tailwind CSS"],
        description:
          "Cross-platform mobile messaging app featuring secure authentication and low-latency real-time sync.",
        video: "/videos/ping-demo.mp4",
        videoLabel: "Ping Demo",
        aspect: "1080 / 2400",
        videoWidth: 1080,
        videoHeight: 2400,
      },
    ],
  },

  contact: {
    title: "Get In Touch",
    subtitle: "Let's work together on your next project",
    description:
      "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and design.",
    email: "asliayse404@gmail.com",
    phone: "+34745089391",
    location: "Malaga, Spain",
  },

  // Lottie Animation
  lottie: {
    loading: "Loading animation...",
    error: "Failed to load animation",
  },
} as const;

// Type for accessing text values
export type TextKey = keyof typeof texts;
