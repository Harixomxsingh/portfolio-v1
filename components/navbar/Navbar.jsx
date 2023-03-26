"use client";
import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full md:px-56 backdrop-filter bg-opacity-30 backdrop-blur-lg bg-neutral-400 mx-auto p-4 md:p-0 transition-all ease-out duration-500  shadow sticky top-0 z-50 dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between">
            <div className="md:py-3 md:block">
              <h2 className="text2xl font-bold text-sky-500">Harixomxsingh</h2>
            </div>
            <div className="md:hidden">
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center md:flex md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className=" md:flex  md:flex-row md:items-center px-4 md:px-0 flex-col md:space-x-6 space-y-8 md:space-y-0">
              <Link
                to="/"
                className="block lg:inline-block text-slate-900 hover:text-neutral-400  cursor-pointer"
                // activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
              <Link
                to="about"
                className="block lg:inline-block  hover:text-neutral-400 text-slate-900 cursor-pointer"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                About
              </Link>
              <Link
                to="projects"
                className="block lg:inline-block hover:text-neutral-400 text-slate-900 cursor-pointer"
                // activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Projects
              </Link>
              {currentTheme === "dark" ? (
                <button
                  className="bg-slate-100 p-2 rounded-xl"
                  onClick={() => setTheme("light")}
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  className="bg-slate-100 p-2 rounded-xl"
                  onClick={() => setTheme("dark")}
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
