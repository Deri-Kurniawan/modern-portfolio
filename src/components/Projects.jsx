import { useState } from "react";
import Button from "./Button";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { BsCircle, BsCircleFill } from "react-icons/bs";
import { projects as projectsData } from "../constants";

const Projects = () => {
  const [indexPosition, setIndexPosition] = useState(0);
  const [projectData, setProjectData] = useState(projectsData[0]);

  return (
    <section id="projects" className="py-[140px]">
      <div className="flex flex-row">
        <div>
          <div className="flex flex-1 items-center justify-start">
            <button
              className="flex flex-col justify-center items-center text-2xl h-full px-2"
              onClick={() =>
                setIndexPosition((prev) => {
                  const hasDecrementPrev = prev - 1;

                  if (hasDecrementPrev < 0) {
                    return 0;
                  }

                  setProjectData(projectsData[hasDecrementPrev]);
                  return hasDecrementPrev;
                })
              }
            >
              <BiLeftArrow />
            </button>
            <div className="relative">
              <img
                className="z-[1] max-w-[550px]"
                src={projectData.image}
                alt="project_image"
              />
              <p className="absolute top-2 right-2 text-center bg-primary px-2 py-1 rounded-md">
                {indexPosition + 1}/{projectsData.length}
              </p>
            </div>
            <button
              className="flex flex-col justify-center items-center text-2xl h-full px-2"
              onClick={() =>
                setIndexPosition((prev) => {
                  const hasIncrementPrev = prev + 1;
                  const projectIndex = projectsData.length - 1;

                  if (hasIncrementPrev > projectIndex) {
                    return projectIndex;
                  }

                  setProjectData(projectsData[hasIncrementPrev]);
                  return hasIncrementPrev;
                })
              }
            >
              <BiRightArrow />
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col ml-[50px]">
          <h2 className="font-semibold text-[48px]">Projects</h2>
          <h2 className="mt-6 text-[28px]">{projectData.name}</h2>
          <p className="text-dimWhite mt-6">{projectData.description}</p>
          <Button title="See More Project" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
