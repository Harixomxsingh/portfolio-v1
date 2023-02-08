"use client";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center mt-12 items-center justify-center">
        <div>
          <img
            // src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.entrepreneurs.ng%2Fwp-content%2Fuploads%2F2019%2F06%2FElon-Musk-6.jpg%3Ffit%3D940%252C788%26ssl%3D1&f=1&nofb=1&ipt=436fe7baa5670ef3dfb7d5c59ab471902f0b640d1f84ec1850f74dad86cb834a&ipo=images"
            src="https://avatars.githubusercontent.com/u/81488390?v=4"
            alt="elon-musk"
            width={300}
            height={300}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="mb-6">
          <h1 className="font-bold text-4xl mt-6">Hi, I&#39;m Hari om!</h1>
          <p className="py-2 text-lg mt-4 mb-6">
            I&#39;m a{" "}
            <span className="font-semibold text-indigo-500">
              Software Developer
            </span>
            Based on India (West Bangal) Current Learning and createing software
            that make life easier and more helpful
          </p>
          <Link
            to="projects"
            className="text-neutral-100 hover:rounded-lg transition-all cursor-pointer shadow-2xl font-semibold px-6 py-3 mb-6 bg-teal-600 hover:bg-teal-800"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
        {/* arrow */}
        <HiArrowDown size={35} />
        <div></div>
      </div>
    </section>
  );
};

export default HeroSection;
