import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
export const Workwithus = () => {
  return (
    <div className="w-full h-screen mt-6 ">
      <h1 className="text-center font-bold text-4xl">Work with me</h1>
      <hr className="w-8 h-2 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      <div className="flex md:flex-row flex-col gap-6 justify-center items-center">
        <div className="pic w-full flex flex-col">
          <img
            src="https://avatars.githubusercontent.com/u/81488390?v=4"
            className="rounded-lg"
            alt="elon musk"
          />
          <div className="social flex flex-row mt-2 gap-2 w-full">
            <span>
              <i>keep in touch</i>
            </span>
            <a href="" className="">
              <AiFillLinkedin size={25} className="hover:text-blue-500" />
            </a>
            <a href="">
              <BsTwitter size={25} className="hover:text-sky-500" />
            </a>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-sky-600 mb-6 text-3xl font-bold">
            Let's Work Together
          </h2>
          <div className="text-sky-800 flex flex-col ">
            <p>What can i do to push your Goals?</p>
            <p>
              Shoot an email to hello
              <a
                href="mailto:work.hariom.com@gmail.com"
                className="hover:border-b-2 block hover:border-solid hover:border-sky-900 "
                target="__blank"
              >
                work.hariom.com@gmail.com
              </a>
            </p>
            <a
              href="mailto:work.hariom.com@gmail.com"
              className="md:py-6 md:px-12 md:w-[35%] py-2 px-4 w-[10rem] mt-6  bg-cyan-300 text-sky-800 rounded-lg hover:bg-cyan-300/25 hover:border-b-2 hover:border-solid hover:border-cyan-300"
              target="_blank"
            >
              Let's Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
