import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SkillMarquee from "../aboutSection/SkillMarquee";
// import MetaMealImg from "../../public/MetaMealImg.jpg";
// import Tilt from "react-parallax-tilt";
// import Tilt from "react-tilt";

const projects = [
  {
    name: "Meta Meal",
    description:
      "Meta Meal is Food Oder website that can fetch food from Meta, Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at anywhere All our meals are cooked with high quality ingredients, just in time and of course by experienced chefs!",
    // image: { metaMealImg },
    // image: "https://freeimage.host/i/HEbddsp",
    image: "https://iili.io/HEbddsp.png",
    // image: { MetaMealImg },
    github: "https://github.com/Harixomxsingh/MetaMeals",
    link: "https://meta-meals.vercel.app/",
  },
  {
    name: "Take Todo",
    description:
      "Take Todo is a Todo list application that take todo and store in an array, fetch the data to list the all todos user can CRUD the todos, project is use context api",
    image: "https://iili.io/HGHJe8N.png",
    github: "https://github.com/Harixomxsingh/react-todo-project/tree/main",
    link: "https://react-todo-project-eight.vercel.app/",
  },
  {
    name: "Good Vibes only",
    description:
      "Good Vibes only is a quote generator web-app where user can see quote from successful people and filter out quoter using there choice",
    image: "",
    github: "xxx",
    link: "xyz",
  },
];
const ProjectSection = () => {
  return (
    <div id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-8 h-2 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-20">
        {projects.map((project, idx) => {
          return (
            <div key={idx} className="">
              <div className="flex flex-col md:flex-row md:space-x-12 mt-10 ">
                {/* image */}
                {/* <Tilt> */}
                <div className="md:w-1/2 ">
                  <Image
                    className="rounded-xl shadow-xl hover:opacity-70"
                    src={project.image}
                    alt={project.name}
                    width={1000}
                    height={1000}
                  />
                </div>
                {/* </Tilt> */}
                <div className="md:w-1/2 mt-6">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="leading-7 text-xl mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row space-x-6 align-bottom ">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:translate-y-1 transition-transform  cursor-pointer"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectSection;
