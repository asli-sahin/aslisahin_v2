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
      "I create beautiful, functional, and user-centered digital experiences that bring ideas to life through code and design. I create beautiful, functional, and user-centered digital experiences that bring ideas to life through code and design.",
  },

  contact: {
    title: "Get In Touch",
    subtitle: "Let's work together on your next project",
    description:
      "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and design.",
    email: "asli@example.com",
    phone: "+90 555 123 4567",
    location: "Istanbul, Turkey",
  },

  // Lottie Animation
  lottie: {
    loading: "Loading animation...",
    error: "Failed to load animation",
  },
} as const;

// Type for accessing text values
export type TextKey = keyof typeof texts;
