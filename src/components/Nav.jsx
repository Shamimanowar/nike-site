import { useState } from "react";

import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <header className="absolute padding-x py-8 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden text-slate-gray">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="#"> Sign in </a>
          <span>/</span>
          <a href="#"> Explore now </a>
        </div>

        {/* Hamburger Menu */}
        <div onClick={() => setClicked((prev) => !prev)} className="relative">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="lg:hidden"
          />

          {clicked && (
            <div className="lg:hidden absolute bg-black w-[200px] top-6 right-0 shadow-3xl">
              <ul className="mt-[10px] flex flex-col gap-1 p-4 leading-normal">
                <li className="font-montserrat text-white hover:text-coral-red">
                  <a href="#products" className="no-underline">
                    Products
                  </a>
                </li>
                <li className="font-montserrat text-white hover:text-coral-red">
                  <a href="#about-us" className="no-underline">
                    About us
                  </a>
                </li>
                <li className="font-montserrat text-white hover:text-coral-red">
                  <a href="#contact-us" className="no-underline">
                    Contact us
                  </a>
                </li>
                <li className="font-montserrat text-white hover:text-coral-red">
                  <a href="#contact-us" className="no-underline">
                    Social media
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
