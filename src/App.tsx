import Layout from "./components/Layout";
import MainHomeScreen from "./components/sections/MainHomeScreen";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ContactSection } from "./components/sections/ContactSection";

function App() {
  return (
    <Layout>
      <MainHomeScreen />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
