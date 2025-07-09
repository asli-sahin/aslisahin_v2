import { texts } from "../../config/texts";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState, useEffect } from "react";
import {
  FaReact,
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiFlutter,
  SiTestinglibrary,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiDotnet,
  SiMysql,
} from "react-icons/si";
import { MdPhotoCamera } from "react-icons/md";
import { TbApi } from "react-icons/tb";

const skills = [
  { name: "API Design", icon: <TbApi className="w-20 h-20 text-purple-400" /> },
  { name: "RESTful API", icon: <TbApi className="w-20 h-20 text-green-400" /> },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="w-20 h-20 text-purple-600" />,
  },
  { name: "CSS", icon: <FaCss3Alt className="w-20 h-20 text-blue-400" /> },
  { name: "Flutter", icon: <SiFlutter className="w-20 h-20 text-blue-500" /> },
  {
    name: "Functional Testing",
    icon: <SiTestinglibrary className="w-20 h-20 text-pink-400" />,
  },
  { name: "Git", icon: <FaGitAlt className="w-20 h-20 text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="w-20 h-20 text-gray-300" /> },
  { name: "Java", icon: <FaJava className="w-20 h-20 text-blue-700" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-20 h-20 text-yellow-400" />,
  },
  {
    name: "Microsoft SQL Server",
    icon: <SiMysql className="w-20 h-20 text-red-500" />,
  },
  { name: "MVC", icon: <SiDotnet className="w-20 h-20 text-blue-900" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-20 h-20 text-gray-100" />,
  },
  {
    name: "Photo Editing",
    icon: <MdPhotoCamera className="w-20 h-20 text-pink-300" />,
  },
  { name: "Python", icon: <FaPython className="w-20 h-20 text-yellow-300" /> },
  { name: "React", icon: <FaReact className="w-20 h-20 text-cyan-400" /> },
  {
    name: "React Native",
    icon: <FaReact className="w-20 h-20 text-blue-400" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="w-20 h-20 text-cyan-300" />,
  },
  {
    name: "Three.js",
    icon: <SiThreedotjs className="w-20 h-20 text-green-300" />,
  },
  { name: ".NET", icon: <SiDotnet className="w-20 h-20 text-blue-900" /> },
  { name: "Net MVC", icon: <SiDotnet className="w-20 h-20 text-blue-900" /> },
];

function SkillsSection() {
  const [perView, setPerView] = useState(6);

  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      if (w < 640) {
        setPerView(2);
      } else if (w < 768) {
        setPerView(3);
      } else if (w < 1280) {
        setPerView(4);
      } else {
        setPerView(6);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: {
      perView,
      spacing: 24,
    },
    drag: true,
    created(slider) {
      let timeout: number;
      function next() {
        slider.next();
        timeout = setTimeout(next, 1500);
      }
      timeout = setTimeout(next, 1500);
    },
  });

  return (
    <section
      id="skills"
      className="relative w-full h-screen min-h-screen overflow-x-hidden items-center justify-center flex"
      style={{ background: "linear-gradient(#490079, #4f0349 55%, #720455)" }}
    >
      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full px-5 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex flex-col items-start pt-28 justify-start w-full h-full">
          <h1
            className="text-white text-4xl font-bold mb-8"
            style={{ textShadow: "0px 0px 15px #fb83db" }}
          >
            Skills
          </h1>
          <div className="w-full h-full mb-28 mt-[20vh]">
            <div ref={sliderRef} className="keen-slider">
              {skills.map((skill) => (
                <div
                  className="keen-slider__slide flex flex-col items-center justify-center min-w-[80px] flex-shrink-0 px-2"
                  key={skill.name}
                >
                  {skill.icon}
                  <span className="mt-2 text-white text-sm font-medium text-center whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { SkillsSection };
