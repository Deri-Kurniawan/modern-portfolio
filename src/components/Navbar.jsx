import React from "react";
import { brand } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => (
  <nav className="pt-[30px]">
    <div className="flex flex-row justify-between items-center">
      <img src={brand} alt="brand_logo" />
      <ul className="flex flex-row justify-end items-center list-none">
        {navLinks.map((nav, index) => (
          <li key={index} className="text-white ml-[60px] hover:text-secondary">
            <a href={nav.url}>{nav.label}</a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
