import React from "react";
import { brand } from "../assets";
import { footer, socialMedia } from "../constants";

const Footer = () => (
  <footer className="pt-[140px]">
    <div className="flex flex-row flex-wrap justify-between">
      <div className="flex flex-col">
        <img
          className="relative w-[74px] h-[74px]"
          src={brand}
          alt="brand_logo"
        />
        <p className="text-dimWhite mt-[18px]">
          If opportunity does not come to you, then create it.
          <br />
          Life about finding not waiting without effort.
        </p>
      </div>
      {footer.map(({ label, urls }, index) => (
        <div key={index}>
          <h5 className="text-[18px] text-white">{label}</h5>
          <ul className="flex flex-col mt-6">
            {urls.map(({ label, url }, index) => (
              <li key={index} className="text-[16px] text-dimWhite pb-1">
                <a className="hover:text-secondary" href={url}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="flex flex-row justify-between items-center border-t-[1px] border-white mt-10">
      <p className="text-white py-5">
        Copyright &copy; {new Date().getFullYear()} Deri Kurniawan. All Rights
        Reserved.
      </p>
      <div className="flex flex-row justify-end flex-1">
        {socialMedia.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className={`${
              socialMedia.length - 1 === index ? "mr-0" : "mr-[30px]"
            }`}
          >
            <img src={social.icon} alt={`${social.label}_icon`} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
