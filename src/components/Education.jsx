import React from "react";
import { educations } from "../constants";
import Button from "./Button";

const Education = () => (
  <section id="education" className="py-[140px]">
    <div className="flex flex-row">
      <div className="flex flex-1 flex-col">
        <h2 className="font-semibold text-[48px]">My Formal Educations</h2>
        <p className="text-dimWhite mt-6">
          They are the places where I can reach my path to become a developer.
        </p>
        <p className="text-dimWhite mt-6">
          Take a look my non-formal education with certificate on linkedin.
        </p>
        <Button title="Show More" />
      </div>
      <div className="flex flex-1 ml-[111px]">
        {/* timeline start */}
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {educations.map(({ yearRange, title, description }, index) => (
            <li
              key={index}
              className="mb-3 ml-4 hover-gradient-card rounded-[20px]"
            >
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white" />
              <div className="px-3 py-2">
                <time className="mb-1 text-sm font-medium leading-none text-gray-400">
                  {yearRange}
                </time>

                {title && <h3 className="text-lg font-semibold">{title}</h3>}

                {description && (
                  <p className="text-base font-normal text-dimWhite">
                    {description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
        {/* timeline end */}
      </div>
    </div>
  </section>
);

export default Education;
