export const texts = {
  // Navigation
  nav: {
    brand: "ASLI SAHIN",
    home: "Home",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },

  // Main Text Component
  mainText: {
    name: "Aslı Ayşe Şahin",
    title: "Full Stack Developer & UI/UX Designer",
    description:
      "I create beautiful, functional, and user-centered digital experiences that bring ideas to life through code and design.",
  },

  // Lottie Animation
  lottie: {
    loading: "Loading animation...",
    error: "Failed to load animation",
  },
} as const;

// Type for accessing text values
export type TextKey = keyof typeof texts;
