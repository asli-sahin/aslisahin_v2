import Layout from "./components/Layout";
import MainHomeScreen from "./components/sections/MainHomeScreen";
import { AboutSection } from "./components/sections/AboutSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ContactSection } from "./components/sections/ContactSection";

function App() {
  return (
    <Layout>
      <MainHomeScreen />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
