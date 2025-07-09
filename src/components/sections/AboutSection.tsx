import { texts } from "../../config/texts";

function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full h-screen min-h-screen overflow-x-hidden items-center justify-center flex"
      style={{ background: "linear-gradient(#720455, #4f0349 55%, #490079)" }}
    >
      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full px-4 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Left: Photo and label */}
        <div className="relative flex flex-col items-center w-full h-full justify-end md:justify-center max-w-lg min-h-0">
          {/* Photo in circle */}
          <div className="relative">
            <img
              src="/square.png"
              alt="Aslı Ayşe Şahin"
              className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full object-cover border-4 border-white shadow-lg"
            />
            {/* 'About me' label */}
            <span
              className="absolute top-6 -right-16 sm:top-6 sm:-right-20 md:top-6 md:-right-24 text-[#ffffff] font-bold text-lg sm:text-2xl md:text-3xl select-none pointer-events-none playwrite-font"
              style={{ textShadow: "0px 0px 15px #fb83db" }}
            >
              About me
            </span>
          </div>
        </div>
        {/* Right: Summary */}
        <div className="flex items-start pt-6 md:pt-0 md:items-center justify-start md:justify-end w-full max-w-2xl h-full">
          <p className="text-white text-xs sm:text-base md:text-xl top leading-relaxed text-center md:text-right px-2 md:px-0">
            {texts.about.summary}
          </p>
        </div>
      </div>
    </section>
  );
}

export { AboutSection };
