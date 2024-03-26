import React from "react";
import data from "../../content/Projects.js/Projects.json";

function Projectdetails() {
  return (
    <div
      id="4"
      className="grid bg-[#090917] items-center justify-center py-10 px-3 bg"
    >
      <h1 className="text-5xl text-center text-white py-5 ">Projects</h1>
      <h2 className=" text-white text-xl text-center py-4">{data.heading}</h2>

      <div className="flex justify-center hover:box-content py-3">
        {data &&
          data?.projects.map((d) => (
            <div class="max-w-md bg-white bord grid   p-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-lg" src={d.image} alt="" />
              </a>
              <div className="w-full">
                <ul>
                  <div className="py-3">
                    <li className="text-white space-x-2  rounded-lg">
                      <span className="rounded-full text-sm   bg-[#201B31] p-1 px-2 text-purple-800">
                        {d.tag}
                      </span>
                      <span className="rounded-full text-sm   bg-[#201B31] p-1 px-2 text-purple-800">
                        {d.tag4}
                      </span>
                      <span className="rounded-full text-sm   bg-[#201B31] p-1 px-2 text-purple-800">
                        {d.tag1}
                      </span>
                      <span className="rounded-full text-sm   bg-[#201B31] p-1 px-2 text-purple-800">
                        {d.tag2}
                      </span>
                      <span className="rounded-full text-sm   bg-[#201B31] p-1 px-2 text-purple-800">
                        {d.tag3}
                      </span>
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
    </div>
  );
}

export default Projectdetails;
