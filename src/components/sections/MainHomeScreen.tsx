import Nav from "../Nav";
import LottieAnimation from "../LottieAnimation";
import MainText from "../MainText";
import ThreeD from "../ThreeD";
import StarsBackground from "../StarsBackground";
import gradientAnimation from "../../assets/animations/gradient.json";

function MainHomeScreen() {
  return (
    <div className="relative w-full min-h-[200vh] md:min-h-screen overflow-x-hidden bg-gradient-to-b from-[#030637] via-[#360342] to-[#720455]">
      {/* Fixed Navbar overlays the top, no border */}
      <div className="fixed top-0 left-0 py-6 w-full z-20 bg-transparent backdrop-blur">
        <Nav />
      </div>
      {/* Fixed Stars Background - covers entire screen, above gradient, below content */}
      <StarsBackground />
      {/* Mobile: Gradient and 3D stacked at 1.5*100vh, only on small screens */}
      <div className="block md:hidden">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center"
          style={{ top: "calc(150vh - 55vw)" }}
        >
          <div className="relative flex items-center justify-center w-[110vw] h-[110vw] max-w-md max-h-md">
            {/* Responsive gradient animation as background */}
            <div className="absolute inset-0 pointer-events-none w-full h-full rounded-full overflow-hidden flex items-center justify-center z-0">
              <LottieAnimation
                animationData={gradientAnimation}
                className="w-full h-full"
              />
            </div>
            {/* 3D Model centered over gradient, larger size */}
            <ThreeD />
          </div>
        </div>
      </div>
      {/* Main content: vertically centered on desktop, grows on mobile */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full mt-28 md:mt-0 z-10 md:h-screen px-4 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Left/Text Section */}
        {/* Mobile: absolutely center text at 50vh */}
        <div
          className="md:hidden absolute left-0 w-full flex items-center justify-center"
          style={{ top: "50vh", transform: "translateY(-50%)" }}
        >
          <div className="w-full max-w-xl px-4">
            <MainText />
          </div>
        </div>
        {/* Desktop: flex centering as before */}
        <div className="hidden md:flex flex-1 items-center h-full justify-center md:justify-start">
          <div className="w-full max-w-xl pl-8">
            <MainText />
          </div>
        </div>
        {/* Right/Visual Section - desktop gradient and 3D model stacked and centered */}
        <div className="flex-1 flex items-center h-full justify-center md:justify-end relative min-h-[500px] overflow-visible">
          <div className="relative flex items-center justify-center w-[40vw] h-[40vw] max-w-[600px] max-h-[600px]">
            {/* Gradient animation as background */}
            <div className="absolute inset-0 pointer-events-none hidden md:block w-full h-full rounded-full overflow-hidden flex items-center justify-center z-0">
              <LottieAnimation
                animationData={gradientAnimation}
                className="w-full h-full"
              />
            </div>
            {/* 3D Model centered over gradient, only on desktop, responsive */}
            <div className="hidden md:block">
              <ThreeD />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHomeScreen;
