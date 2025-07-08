import { texts } from "../../config/texts";

function AboutSection() {
  return (
    <section
      className="relative w-full min-h-screen overflow-x-hidden"
      style={{ background: "linear-gradient(#720455, #4f0349 55%, #490079)" }}
    >
      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen px-4 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-16 md:py-0">
        {/* Left: Photo and label */}
        <div className="relative flex flex-col items-center md:items-start w-full max-w-lg min-h-0">
          {/* Photo in circle */}
          <div className="relative">
            <img
              src="https://placehold.co/240x240/png"
              alt="Aslı Ayşe Şahin"
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full object-cover border-4 border-white shadow-lg"
            />
            {/* 'About me' label */}
            <span className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 bg-white bg-opacity-90 text-[#720455] font-bold text-base sm:text-lg md:text-2xl px-3 sm:px-4 py-1 rounded-full shadow-md select-none pointer-events-none">
              About me
            </span>
          </div>
        </div>
        {/* Right: Summary */}
        <div className="flex items-center justify-center md:justify-end w-full max-w-2xl mt-8 sm:mt-12 md:mt-0">
          <p className="text-white text-sm sm:text-base md:text-xl leading-relaxed text-center md:text-right px-2 md:px-0">
            {texts.about.summary}
          </p>
        </div>
      </div>
    </section>
  );
}

export { AboutSection };
