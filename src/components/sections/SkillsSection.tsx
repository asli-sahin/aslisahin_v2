import type { IconType } from "react-icons";
import { FaCode, FaJava } from "react-icons/fa";
import {
  SiAndroid,
  SiBootstrap,
  SiConfluence,
  SiCss3,
  SiDotnet,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiNextdotjs,
  SiOracle,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSpring,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbApi, TbDatabase } from "react-icons/tb";

type SkillGroup = {
  title: string;
  level: number;
  icons: { Icon: IconType; color: string }[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Java & Spring Boot",
    level: 5,
    icons: [
      { Icon: FaJava, color: "#f89820" },
      { Icon: SiSpring, color: "#6db33f" },
    ],
  },
  {
    title: "C# & .NET / ASP.NET / ASP MVC",
    level: 5,
    icons: [
      { Icon: FaCode, color: "#b39ddb" },
      { Icon: SiDotnet, color: "#9b78dc" },
    ],
  },
  {
    title: "JavaScript / TypeScript, React, React Native, Next.js, Vite, Three.js",
    level: 5,
    icons: [
      { Icon: SiJavascript, color: "#f7df1e" },
      { Icon: SiTypescript, color: "#3178c6" },
      { Icon: SiReact, color: "#61dafb" },
      { Icon: SiNextdotjs, color: "#f5f5f5" },
      { Icon: SiVite, color: "#646cff" },
      { Icon: SiThreedotjs, color: "#c7d2fe" },
    ],
  },
  {
    title: "Flutter & Mobile Development",
    level: 5,
    icons: [
      { Icon: SiFlutter, color: "#54c5f8" },
      { Icon: SiAndroid, color: "#a4c639" },
    ],
  },
  {
    title: "Python, HTML, CSS, Tailwind CSS, Bootstrap",
    level: 5,
    icons: [
      { Icon: SiPython, color: "#ffd43b" },
      { Icon: SiHtml5, color: "#e34f26" },
      { Icon: SiCss3, color: "#1572b6" },
      { Icon: SiTailwindcss, color: "#38bdf8" },
      { Icon: SiBootstrap, color: "#a879ff" },
    ],
  },
  {
    title: "RESTful APIs, WebRTC, Oracle SQL, Microsoft SQL Server, PostgreSQL, Firebase",
    level: 5,
    icons: [
      { Icon: TbApi, color: "#78e0c1" },
      { Icon: SiOracle, color: "#f80000" },
      { Icon: TbDatabase, color: "#a7b8ff" },
      { Icon: SiPostgresql, color: "#699eca" },
      { Icon: SiFirebase, color: "#ffca28" },
    ],
  },
  {
    title: "Git, GitHub, Postman, Jira, Confluence, Agile / Scrum",
    level: 5,
    icons: [
      { Icon: SiGit, color: "#f05032" },
      { Icon: SiGithub, color: "#f5f5f5" },
      { Icon: SiPostman, color: "#ff6c37" },
      { Icon: SiJira, color: "#2684ff" },
      { Icon: SiConfluence, color: "#579dff" },
    ],
  },
  {
    title: "Figma, UI/UX Prototyping",
    level: 5,
    icons: [{ Icon: SiFigma, color: "#f24e1e" }],
  },
];

function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative flex min-h-screen w-full items-center overflow-hidden text-white"
      style={{
        background: "linear-gradient(#720455, #4f0349 55%, #490079)",
      }}
    >
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col px-5 py-24 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="mb-8 border-b border-white/15 pb-6">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            style={{
              textShadow:
                "0px 0px 15px #fb83db, 0px 0px 30px rgba(251, 131, 219, 0.5)",
            }}
          >
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
          {skillGroups.map((group) => (
            <article
              className="group border-b border-white/15 py-6"
              key={group.title}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="max-w-[36ch] text-base font-semibold leading-6 text-white transition-all duration-200 ease-out group-hover:text-pink-100 group-hover:[text-shadow:0_0_12px_rgba(251,131,219,0.7)] motion-reduce:transition-none sm:text-lg">
                  {group.title}
                </h3>
                <div
                  aria-label={`Knowledge level: ${group.level} out of 5`}
                  className="flex shrink-0 items-center gap-1.5 pt-1.5"
                  role="img"
                >
                  {Array.from({ length: 5 }, (_, dotIndex) => (
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        dotIndex < group.level
                          ? "bg-pink-300 shadow-[0_0_10px_rgba(251,131,219,0.55)]"
                          : "bg-white/20"
                      }`}
                      key={dotIndex}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                {group.icons.map(({ Icon, color }, iconIndex) => (
                  <Icon
                    aria-hidden="true"
                    className="inline-block h-[22px] w-[22px] shrink-0 align-middle opacity-70 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:brightness-125 motion-reduce:transition-none"
                    key={`${group.title}-${iconIndex}`}
                    style={{ color }}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { SkillsSection };
