import React from "react";
import Image from "next/image";
const skills = [
  {
    skill: "HTML",
  },
  {
    skill: "CSS",
  },
  {
    skill: "JavaScript",
  },
  {
    skill: "TypeScript",
  },
  {
    skill: "Python",
  },
  {
    skill: "React",
  },
  {
    skill: "Next.js",
  },
  {
    skill: "Tailwind CSS",
  },
  {
    skill: "Git",
  },
  {
    skill: "Github",
  },
  {
    skill: "Linux",
  },
  {
    skill: "Vim",
  },
  {
    skill: "VS Code",
  },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-32">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-8 h-2 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        {/* items */}
        <div className="flex flex-col  md:flex-row space-y-10 items-stretch justify-center align-top md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to Know me!
            </h1>
            <p>
              Hi, my name is Hari om and I am a{" "}
              <span className="font-bold">highly ambitious</span>
              <span className="font-bold">self-motivated</span>
              <span className="font-bold">life time learner</span>
            </p>
            <br />
            <p>
              I&#39;m currently in College, I&#39;m interested in computer
              science and software development, I Stated my coding journey at
              the 2020 in lockdown and the more i learn more i enjoyed, I like
              practical things and when i write code it effect and these thing
              more push me to become a dev
            </p>
            <br />
            <p>
              I have a wide range of Hobbies and passions that keep me busy.
              From reading, playing sports, traveling I believe that I never
              gonna vast my time so that why i try to learn some thing new every
              day in various field, that why i stated learning guitar and i grep
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-sky-400">never stop growing</span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to push the limits of what is possible. I
              am excited to see where my career takes me and i am always able to
              new opportunities.
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl mb-6 font-bold md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 mr-2 mt-2 text-gray-500"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <div>
              <Image
                src="/portfolioabout2.png"
                alt="iron-man"
                width={325}
                height={325}
                className="hidden md:block md:relative md:bottom-0 md:left-32 md:z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
