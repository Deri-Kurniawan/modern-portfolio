import React from "react";
import { projectImagePreview } from "../assets";
import Button from "./Button";

const Project = () => (
  <section id="projects" className="py-[140px]">
    <div className="flex flex-row">
      <div className="flex flex-1 items-center justify-start">
        <img className="z-[1]" src={projectImagePreview} alt="project_image" />
      </div>

      <div className="flex flex-1 flex-col ml-[111px]">
        <h2 className="font-semibold text-[48px] text-white">
          Windows 11 OS Clone Web
        </h2>
        <p className="text-dimWhite mt-6">
          Windows 11 OS clone as website using React JS checkout this live site
          on vercel
        </p>
        <Button title="See More Project" />
      </div>
    </div>
  </section>
);

export default Project;
