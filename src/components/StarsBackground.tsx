import Player from "lottie-react";
import starsAnimation from "../assets/animations/stars.json";

function StarsBackground() {
  return (
    <div className="fixed inset-0 w-screen h-screen pointer-events-none z-[5]">
      <Player
        className="w-screen h-screen"
        autoplay
        loop
        animationData={starsAnimation}
        style={{ width: "100%", height: "100%" }}
        rendererSettings={{
          preserveAspectRatio: "none",
        }}
      />
    </div>
  );
}

export default StarsBackground;
