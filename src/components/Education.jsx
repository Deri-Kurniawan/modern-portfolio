import React from "react";
import { educations } from "../constants";
import Button from "./Button";

const Education = () => (
  <section id="education" className="py-[80px] lg:py-[140px]">
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-1 flex-col">
        <h2 className="font-semibold text-[28px] lg:text-[48px]">
          My Formal Educations
        </h2>
        <p className="text-[18px] text-dimWhite mt-6">
          They are the places where I can reach my path to become a software
          developer.
        </p>
        <p className="hidden lg:block text-[18px] text-dimWhite mt-6">
          Take a look my non-formal education with certificate on my LinkedIn.
        </p>
        <div className="hidden lg:block">
          <Button
            title="Show More"
            clickHandle={() =>
              window.open(
                "https://www.linkedin.com/in/deri-kurniawan/",
                "_blank"
              )
            }
          />
        </div>
      </div>
      <div className="flex flex-1 pt-[30px] lg:pt-0 lg:ml-[111px]">
        {/* timeline start */}
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {educations.map(({ timeRange, title, description, url }, index) => (
            <li
              key={index}
              className="mb-3 ml-4 hover-gradient-card rounded-[20px]"
            >
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white" />
              <div className="px-3 py-2">
                <time className="mb-1 text-sm font-medium leading-none text-gray-400">
                  {timeRange}
                </time>

                {title && (
                  <h3 className="text-lg font-semibold">
                    <a
                      className="hover:text-secondary"
                      href={url}
                      target="_blank"
                    >
                      {title}
                    </a>
                  </h3>
                )}

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
      <p className="block lg:hidden text-[18px] mt-[30px] lg:mt-6 text-dimWhite">
        Take a look my non-formal education with certificate on LinkedIn.
      </p>
      <div className="block lg:hidden">
        <Button
          title="Show More"
          clickHandle={() =>
            window.open("https://www.linkedin.com/in/deri-kurniawan/", "_blank")
          }
        />
      </div>
    </div>
  </section>
);

export default Education;
