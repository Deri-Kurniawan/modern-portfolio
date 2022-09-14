import { useState } from "react";
import Button from "./Button";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { projects as projectsData } from "../constants";

const Projects = () => {
  const [indexPosition, setIndexPosition] = useState(0);
  const [projectData, setProjectData] = useState(projectsData[0]);

  const handlePrev = () =>
    setIndexPosition((prev) => {
      const hasDecrementPrev = prev - 1;

      if (hasDecrementPrev < 0) {
        return 0;
      }

      setProjectData(projectsData[hasDecrementPrev]);
      return hasDecrementPrev;
    });

  const handleNext = () =>
    setIndexPosition((prev) => {
      const hasIncrementPrev = prev + 1;
      const projectIndex = projectsData.length - 1;

      if (hasIncrementPrev > projectIndex) {
        return projectIndex;
      }

      setProjectData(projectsData[hasIncrementPrev]);
      return hasIncrementPrev;
    });

  return (
    <section id="projects" className="py-[80px] lg:py-[140px]">
      <div className="flex flex-col lg:flex-row">
        <h2 className="block lg:hidden font-semibold text-[28px] lg:text-[48px] pb-[30px]">
          Recent Projects
        </h2>
        <div className="flex flex-1">
          <div className="flex items-center justify-center lg:justify-start max-w-full lg:max-w-[600px]">
            <button
              className="flex flex-col justify-center items-center text-2xl h-full px-2 disabled:text-white/30 z-10"
              onClick={handlePrev}
              title={
                indexPosition !== projectsData.length + 1
                  ? "Previous Project"
                  : "No More Project"
              }
              disabled={indexPosition === 0}
            >
              <BiLeftArrow />
            </button>
            <div className="relative">
              <img
                className="flex justify-center w-full object-contain z-10"
                src={projectData.image}
                alt={`project_image_${indexPosition + 1}`}
                width="100%"
                height="100%"
              />
              <p className="absolute top-3 right-4 text-center px-2 py-1 bg-primary rounded-md z-10">
                {indexPosition + 1}/{projectsData.length}
              </p>
            </div>
            <button
              className="flex flex-col justify-center items-center text-2xl h-full px-2 disabled:text-white/30 z-10"
              onClick={handleNext}
              title={
                indexPosition !== projectsData.length - 1
                  ? "Next Project"
                  : "No More Project"
              }
              disabled={indexPosition === projectsData.length - 1}
            >
              <BiRightArrow />
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col pt-[30px] lg:pt-0 lg:ml-[50px]">
          <h2 className="hidden lg:block font-semibold text-[48px]">
            Recent Projects
          </h2>
          <h2 className="mt-6 text-[24px] lg:text-[28px]">
            {projectData.name}
          </h2>
          <div className="text-[18px] text-dimWhite mt-6">
            {projectData.description}
          </div>
          <Button
            title="See More Project"
            clickHandle={() => {
              window.open(
                "https://github.com/Deri-Kurniawan?tab=repositories",
                "_blank"
              );
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
