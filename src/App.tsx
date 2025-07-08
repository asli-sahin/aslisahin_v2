import Layout from "./components/Layout";
import MainHomeScreen from "./components/sections/MainHomeScreen";
import { AboutSection } from "./components/sections/AboutSection";

function App() {
  return (
    <Layout>
      <MainHomeScreen />
      <AboutSection />
    </Layout>
  );
}

export default App;
