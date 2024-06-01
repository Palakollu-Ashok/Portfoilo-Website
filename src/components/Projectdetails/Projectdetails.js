import React from "react";
import data from "../../content/Projects.js/Projects.json";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

function Projectdetails() {
  return (
    <div
      id="4"
      className="grid bg-[#090917] items-center place-items-center py-[70px] px-3 bg"
    >
      <h1 className="text-5xl text-center text-white/90 py-5 font-serif font-bold ">
        Projects
      </h1>
      <h2 className=" text-white/50 md:text-xl text-md font-serif text-center py-4">
        {data.heading}
      </h2>
      <div className=" mt-3 grid md:grid-cols-2 grid-cols-1 gap-10">
        {data &&
          data?.projects.map((d, i) => (
            <Tilt>
              <div
                key={i}
                class="max-w-md bg-white bord grid    md:p-7 p-3 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <Link to={d.link} target="_blank">
                  <img
                    class="rounded-lg md:h-[30vh] w-full"
                    src={d.image}
                    alt=""
                  />
                </Link>
                <div className="w-full ">
                  <ul>
                    <div className="py-3 flex justify-between  ">
                      <li className="rounded-full  p-2 lg:w-[90px] lg:text-md md:text-[13px] sm:text-[16px] text-xs   grid justify-center items-center  bg-[#AE8959] font-semibold    text-black">
                        {d.tag}
                      </li>
                      <li className="rounded-full p-2 lg:w-[90px] lg:text-md md:text-[13px] sm:text-[16px] text-xs  grid justify-center items-center  bg-[#AE8959] font-semibold     text-black">
                        {d.tag4}
                      </li>
                      <li className="rounded-full p-2 lg:w-[90px] lg:text-md md:text-[13px] sm:text-[16px] text-xs  grid justify-center items-center  bg-[#AE8959] font-semibold    text-black">
                        {d.tag1}
                      </li>
                      <li className="rounded-full p-2  lg:text-md md:text-[13px] sm:text-[16px] text-xs grid justify-center items-center  bg-[#AE8959] font-semibold    text-black">
                        {d.tag2}
                      </li>
                    </div>
                    <li>
                      <h1 className="text-white/60 "> {d.title}</h1>
                    </li>
                    <li>
                      <p className="text-white/40 text-xs"> {d.date}</p>
                    </li>
                    <div className="max-w-lg py-3 flex ">
                      <p className="text-white line-clamp-5   text-white/40">
                        {d.description}
                      </p>
                    </div>
                  </ul>
                </div>
              </div>
            </Tilt>
          ))}
      </div>
    </div>
  );
}

export default Projectdetails;
