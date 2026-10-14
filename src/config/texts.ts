export const texts = {
  // Navigation
  nav: {
    brand: "ASLI SAHIN",
    home: "Home",
    skills: "Skills",
    about: "About",
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
