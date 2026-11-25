import { useCallback, useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { texts } from "../../config/texts";

type Project = (typeof texts.projects.items)[number];

const projects = texts.projects.items as readonly Project[];

// Only projects that have a video appear in the showcase carousel.
const showcaseItems = projects.filter(
  (p): p is Project & {
    video: string;
    aspect: string;
    videoWidth: number;
    videoHeight: number;
  } =>
    typeof p.video === "string" &&
    typeof p.aspect === "string" &&
    typeof p.videoWidth === "number" &&
    typeof p.videoHeight === "number",
);

// Parse an "W / H" aspect string into numbers.
function parseAspect(aspect?: string): [number, number] {
  if (!aspect) return [16, 9];
  const [w, h] = aspect.split("/").map((n) => parseFloat(n.trim()));
  return [w || 16, h || 9];
}

function ProjectsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Measure the available area so the frame can be sized explicitly per slide.
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [avail, setAvail] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const measure = () => {
      const el = wrapRef.current;
      setAvail({ w: el?.clientWidth ?? 0, h: window.innerHeight });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const scrollToShowcase = useCallback(() => {
    document.getElementById("showcase")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const handleProjectClick = useCallback(
    (project: Project) => {
      scrollToShowcase();
      if (typeof project.video !== "string") return; // no slide for this one
      const slideIdx = showcaseItems.findIndex((s) => s.id === project.id);
      if (slideIdx >= 0) setCurrentSlide(slideIdx);
    },
    [scrollToShowcase],
  );

  const count = showcaseItems.length;
  const prev = () => setCurrentSlide((i) => (i - 1 + count) % count);
  const next = () => setCurrentSlide((i) => (i + 1) % count);

  const activeItem = showcaseItems[currentSlide];

  // Explicit frame size for the active slide. Bigger now (70% of viewport
  // height), but never upscaled beyond the video's native resolution so it
  // stays crisp.
  const [aw, ah] = parseAspect(activeItem?.aspect);
  const maxH = avail.h * 0.65;
  let frameW = avail.w;
  let frameH = (avail.w * ah) / aw;
  if (frameH > maxH) {
    frameH = maxH;
    frameW = (frameH * aw) / ah;
  }
  // Cap at native pixel size to avoid upscaling blur.
  if (activeItem && frameW > activeItem.videoWidth) {
    frameW = activeItem.videoWidth;
    frameH = (frameW * ah) / aw;
  }
  if (activeItem && frameH > activeItem.videoHeight) {
    frameH = activeItem.videoHeight;
    frameW = (frameH * aw) / ah;
  }
  const frameStyle =
    avail.w > 0
      ? { width: `${frameW}px`, height: `${frameH}px` }
      : { width: "100%", aspectRatio: activeItem?.aspect };

  return (
    <>
      <section
        id="projects"
        className="relative w-full h-screen min-h-screen overflow-x-hidden items-center justify-center flex"
        style={{ background: "linear-gradient(#720455, #4f0349 55%, #490079)" }}
      >
        <div className="flex flex-col w-full px-4 md:px-12 lg:px-16 xl:px-20 2xl:px-24 gap-14 md:gap-24">
          {/* Heading */}
          <div className="text-center space-y-3">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              style={{
                textShadow:
                  "0px 0px 15px #fb83db, 0px 0px 30px rgba(251, 131, 219, 0.5)",
              }}
            >
              {texts.projects.title}
            </h2>
            <p className="text-lg md:text-xl text-purple-200 font-medium">
              {texts.projects.subtitle}
            </p>
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mx-auto">
            {projects.map((project) => {
              const hasVideo = typeof project.video === "string";
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => handleProjectClick(project)}
                  className={`group text-left flex flex-col h-full rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-6 shadow-lg transition-transform duration-200 ${
                    hasVideo
                      ? "cursor-pointer hover:scale-[1.03] hover:border-white/50"
                      : "cursor-default"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {project.name}
                  </h3>
                  <p className="text-base text-pink-200 font-medium mb-4 leading-snug">
                    {project.title}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-purple-100 bg-purple-500/30 border border-purple-300/30 rounded-full px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-200 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  {hasVideo && (
                    <span className="mt-4 text-sm font-semibold text-pink-300 group-hover:text-pink-200 transition-colors">
                      View showcase &rarr;
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Showcases */}
      <section
        id="showcase"
        className="relative w-full min-h-screen overflow-x-hidden items-center justify-center flex pt-28 pb-16 md:pt-36 md:pb-20"
        style={{ background: "linear-gradient(#490079, #4f0349 55%, #720455)" }}
      >
        <div className="flex flex-col items-center gap-6 md:gap-8 max-w-7xl w-full mx-auto px-4 md:px-12">
          <h3
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            style={{
              textShadow:
                "0px 0px 15px #fb83db, 0px 0px 30px rgba(251, 131, 219, 0.5)",
            }}
          >
            {texts.projects.showcasesTitle}
          </h3>

          <div className="relative w-full flex items-center gap-3 md:gap-5">
            {/* Left arrow */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous showcase"
              className="shrink-0 z-10 flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all cursor-pointer"
            >
              <IoIosArrowBack className="text-2xl md:text-3xl" />
            </button>

            {/* Video frame — sized to the active video's aspect ratio */}
            <div
              ref={wrapRef}
              className="relative flex-1 min-w-0 flex justify-center"
            >
              <div
                className="overflow-hidden rounded-2xl border-4 border-white shadow-lg bg-black/60 transition-all duration-300"
                style={frameStyle}
              >
                <video
                  key={activeItem?.id}
                  src={activeItem?.video}
                  className="w-full h-full object-contain pointer-events-none select-none"
                  controls={false}
                  controlsList="nodownload noremoteplayback noplaybackrate"
                  disablePictureInPicture
                  playsInline
                  autoPlay
                  loop
                  muted
                  preload="auto"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>

            {/* Right arrow */}
            <button
              type="button"
              onClick={next}
              aria-label="Next showcase"
              className="shrink-0 z-10 flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all cursor-pointer"
            >
              <IoIosArrowForward className="text-2xl md:text-3xl" />
            </button>
          </div>

          {/* Dots + caption */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              {showcaseItems.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Go to ${item.videoLabel}`}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === currentSlide
                      ? "w-6 bg-pink-400"
                      : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-purple-200 font-medium">
              {activeItem?.videoLabel}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export { ProjectsSection };