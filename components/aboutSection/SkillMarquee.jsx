import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
// import reactImg from "./icons-8-react-100.png";
const SkilImage = [
  {
    img: "/html.png",
  },
  {
    img: "/css.png",
  },
  {
    img: "/js.png",
  },
  {
    img: "/react.png",
  },
  {
    img: "/tailwindcss.png",
  },
  {
    img: "/typescript.png",
  },
  {
    img: "/nextjs.png",
  },
  {
    img: "/python.png",
  },
  {
    img: "/nodejs.png",
  },
  {
    img: "/git.png",
  },
  {
    img: "/github.png",
  },
  {
    img: "/vscode.png",
  },
  {
    img: "/vim.png",
  },
  {
    img: "/linux.png",
  },
];
export default function SkillMarquee() {
  return (
    <div className="bg-white dark:bg-black dark:text-white">
      <Marquee gradientColor="" className="dark:text-white">
        <div className="flex flex-row justify-center items-center">
          {SkilImage.map((ele) => (
            <Image
              src={ele.img}
              width={150}
              height={150}
              className="space-x-3 px-4"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
}
