import React from "react";
import data from "../../content/About/HeroSection.json";
import Resume from "../../Files/AshokResume.pdf";

function HeroSection() {
  return (
    <div id="1" className="py-5 bg-[#090917] md:px-20 lg:px-40 px-3">
      <section className="md:flex justify-between space-y-6 md:space-y-0">
        <div className=" text-white space-y-3 self-end md:w-1/2">
          <h1 className="lg:text-5xl text-3xl py-1">{data.wish}</h1>
          <h1 className="lg:text-5xl text-5xl py-1">{data.name}</h1>
          <h2 className="lg:text-3xl text-xl  py-1">{data.role}</h2>
          <h3 className="lg:text-lg text-md text-[#919299]  py-3 font-semibold  ">
            {data.description}
          </h3>
          <div className="md:flex grid items-center">
            <a
              href={Resume}
              target="_blank"
              className="bg-[#AF00FF] focus-within:bg-[#AF00ff] cursor-pointer w-fit  rounded-full py-4 px-20"
            >
              {data.button}
            </a>
          </div>
        </div>
        <div className="grid place-content-center md:w-1/2">
          <img
            src={data.img}
            alt=""
            className="w-48 h-48 md:w-96 md:h-96   border-2 border-purple-700  md:rounded-full"
          />
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
