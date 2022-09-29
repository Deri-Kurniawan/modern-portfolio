import { useEffect, useState } from "react";
import Button from "./Button";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import Image from "next/image";
import parse from "html-react-parser";

const Projects = ({ data }) => {
  const [indexPosition, setIndexPosition] = useState(0);
  const [projectData, setProjectData] = useState([]);

  const handlePrev = () =>
    setIndexPosition((prev) => {
      const hasDecrementPrev = prev - 1;

      if (hasDecrementPrev < 0) {
        return 0;
      }

      setProjectData(data[hasDecrementPrev]);
      return hasDecrementPrev;
    });

  const handleNext = () =>
    setIndexPosition((prev) => {
      const hasIncrementPrev = prev + 1;
      const projectIndex = data?.length - 1;

      if (hasIncrementPrev > projectIndex) {
        return projectIndex;
      }

      setProjectData(data[hasIncrementPrev]);
      return hasIncrementPrev;
    });

  useEffect(() => {
    setProjectData(data[indexPosition]);
  }, [data, indexPosition]);

  return (
    <section id="projects" className="py-[80px] lg:py-[140px]">
      <div className="flex flex-col lg:flex-row">
        <h2 className="block lg:hidden font-semibold text-[28px] lg:text-[48px] pb-[30px]">
          Recent Projects
        </h2>
        <div className="flex flex-1">
          <div className="flex items-center justify-center lg:justify-start max-w-full lg:max-w-[600px]">
            <button
              className="z-10 flex flex-col items-center justify-center h-full px-2 text-2xl disabled:text-white/30"
              onClick={handlePrev}
              title={
                indexPosition !== data?.length + 1
                  ? "Previous Project"
                  : "No More Project"
              }
              disabled={indexPosition === 0}
            >
              <BiLeftArrow />
            </button>
            <div className="relative">
              <Image
                className="z-10 object-contain"
                src={projectData?.image}
                alt={`project_image_${indexPosition + 1}`}
                width="624"
                height="362"
              />
              <p className="absolute z-10 px-2 py-1 text-center rounded-md top-3 right-4 bg-primary">
                {indexPosition + 1}/{data?.length}
              </p>
            </div>
            <button
              className="z-10 flex flex-col items-center justify-center h-full px-2 text-2xl disabled:text-white/30"
              onClick={handleNext}
              title={
                indexPosition !== data?.length - 1
                  ? "Next Project"
                  : "No More Project"
              }
              disabled={indexPosition === data?.length - 1}
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
            {projectData?.name}
          </h2>
          <div className="text-[18px] text-dimWhite mt-6">
            {parse(projectData?.description || "")}
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
