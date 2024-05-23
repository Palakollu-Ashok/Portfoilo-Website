import React from "react";
import data from "../../content/Projects.js/Projects.json";
import Tilt from "react-parallax-tilt";

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
      <Tilt>
        <div className=" mt-3">
          {data &&
            data?.projects.map((d, i) => (
              <div
                key={i}
                class="max-w-md bg-white bord grid   md:p-7 p-3 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img class="rounded-lg" src={d.image} alt="" />
                </a>
                <div className="w-full ">
                  <ul>
                    <div className="py-3 flex justify-between ">
                      <li className="rounded-full lg:text-md md:text-[16px] text-[11px]  grid justify-center items-center  bg-[#AE8959] font-semibold   p-1  text-black">
                        {d.tag}
                      </li>
                      <li className="rounded-full lg:text-md md:text-[16px] text-[12px]  grid justify-center items-center  bg-[#AE8959] font-semibold   p-1  text-black">
                        {d.tag4}
                      </li>
                      <li className="rounded-full lg:text-md md:text-[16px] text-[12px]  grid justify-center items-center  bg-[#AE8959] font-semibold   p-1  text-black">
                        {d.tag1}
                      </li>
                      <li className="rounded-full lg:text-md md:text-[16px] text-[12px]  grid justify-center items-center  bg-[#AE8959] font-semibold   p-1  text-black">
                        {d.tag2}
                      </li>
                      <li className="rounded-full lg:text-md md:text-[16px] text-[8px]  grid justify-center items-center  bg-[#AE8959] font-semibold   p-1  text-black">
                        {d.tag3}
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
            ))}
        </div>
      </Tilt>
    </div>
  );
}

export default Projectdetails;
