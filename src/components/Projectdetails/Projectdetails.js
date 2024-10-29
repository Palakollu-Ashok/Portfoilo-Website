import React from "react";
import data from "../../content/Projects.js/Projects.json";
<<<<<<< HEAD
import { HiArrowRight } from "react-icons/hi2";
=======
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
>>>>>>> 34671f09d20b37fc83b87ea36c7e7b9f235d80c0

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
<<<<<<< HEAD
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {data?.projects?.map((d, i) => (
          <div className="w-full lg:px-12 h-84 px-3 py-10 rounded-lg bg-[#101725] shadow-shadowOne r bg-gradient-to-r from-bodyColor to-[#202327]  group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
            <div className="xl:h-72 overflow-y-hidden">
              <div className="flex h-full flex-col gap-3 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-col gap-6">
                  <h2 className="text-xl  font-titleFont font-bold text-white">
                    {d.title}
                  </h2>
                  <p className="text-white">{d.description}</p>
                  <a href={d.link} target="_blank">
                    <span className="text-2xl text-red-700">
                      <HiArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
=======
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
>>>>>>> 34671f09d20b37fc83b87ea36c7e7b9f235d80c0
      </div>
    </div>
  );
}

export default Projectdetails;
