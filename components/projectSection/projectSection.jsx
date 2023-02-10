import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "E-commarce Food Add to Cart",
    description:
      "E-Com Add to cart is full function E-com web-application here user will interact with section see the item and add item into cart and see the total prize",
    // image: "",
    github: "xxx",
    link: "xyz",
  },
  {
    name: "Your note",
    description:
      "Your note is a note taking web-app where user can do CRUD operations and intaract the web-app",
    // image: "",
    github: "xxx",
    link: "xyz",
  },
  {
    name: "Good Vibes only",
    description:
      "Good Vibes only is a quote generator web-app where user can see quote from successful people and filter out quoter using there choice",
    // image: "",
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
                <div className="md:w-1/2 ">
                  <Image
                    className="rounded-xl shadow-xl hover:opacity-70"
                    src={project.image}
                    alt={project.name}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="md:w-1/2">
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