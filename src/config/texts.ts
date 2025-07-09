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
      "Hi, I'm Aslı. I'm a full stack developer and UI/UX designer. I always find myself in a new project and never stop learning. I love retro games and pixel art. I have a white cat named Luna and a cockatiel named Bimo that I am in love with. When I'm not coding, I'm usually playing games or watching movies. Reach out to me if you want to work together on a project or just want to chat about technology and design.",
  },

  contact: {
    title: "Get In Touch",
    subtitle: "Let's work together on your next project",
    description:
      "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and design.",
    email: "asli.ayse.sahin.404@gmail.com",
    phone: "+90 505 594 0477",
    location: "Kayseri, Turkey",
  },

  // Lottie Animation
  lottie: {
    loading: "Loading animation...",
    error: "Failed to load animation",
  },
} as const;

// Type for accessing text values
export type TextKey = keyof typeof texts;
