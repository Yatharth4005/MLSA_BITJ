import { HERO_SECTION_PROJECTS } from "@/constants";

import HeroProjectCard from "./HeroProjectCard";

const LatestProjects = () => {
  return (
    <div className="projectsAnimation mx-auto flex w-[100vw] flex-row flex-wrap justify-center gap-8 duration-500 ease-out">
      {HERO_SECTION_PROJECTS.map((project, index) => (
        <HeroProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default LatestProjects;
