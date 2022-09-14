import React from "react";
import { brand } from "../assets";
import { footer, socialMedia } from "../constants";

const Footer = () => (
  <footer className="pt-[80px] lg:pt-[140px]">
    <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
      <div className="flex-1 flex flex-col justify-start items-start mr-10">
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
            })
          }
        >
          <img
            className="w-[48] h-[48px] lg:w-[74px] lg:h-[74px] object-contain"
            src={brand}
            alt="brand_logo"
          />
        </button>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 ss:max-w-[90%] lg:max-w-[410px]">
          If you do something that makes you lose track of time. Rest assured
          that's your ninja way.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footer.map(({ label, urls }, index) => (
          <div key={index} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h3 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {label}
            </h3>
            <ul className="list-none mt-4">
              {urls.map(({ label, url, blank }, index) => (
                <li
                  key={index}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== url.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <a
                    href={url}
                    target={blank ? "_blank" : "_self"}
                    rel="noreferrer noopener"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col-reverse lg:flex-row justify-between items-center border-t-[1px] border-white mt-[30px] lg:mt-10">
      <p className="py-5 text-center text-[15px] lg:text-[18px]">
        Copyright &copy; {new Date().getFullYear()} Deri Kurniawan. All Rights
        Reserved.
      </p>
      <div className="flex flex-row justify-end flex-1 py-[20px] lg:py-0">
        {socialMedia.map((social, index) => (
          <a
            key={index}
            className={`${
              socialMedia.length - 1 === index ? "mr-0" : "mr-[30px]"
            }`}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${social.label}${
              social.label !== "Credits" ? ` (${social.username})` : ""
            }`}
          >
            <img
              className="w-[24px] h-[24px] object-contain"
              src={social.icon}
              alt={`${social.label}_icon`}
            />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
