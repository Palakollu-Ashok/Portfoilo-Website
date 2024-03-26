import React from "react";
import { MdRocketLaunch } from "react-icons/md";

function Form() {
  return (
    <div id="7" className="grid  bg-[#090917] py-5 px-3 justify-center">
      <div className="p-14">
        <h1 className="text-5xl text-white text-center">Contact</h1>
        <p className="text-white text-lg text-center py-2">
          Feel free to reach out to me for any questions or opportunities!
        </p>
      </div>
      <form className="space-y-7 bg-[#101725] shadow-lg rounded-xl border border-gray-400 p-5">
        <h1 className="text-white   text-2xl flex gap-2 ">
          Email Me{" "}
          <span className="mt-1 ">
            <MdRocketLaunch className="text-purple-400" />
          </span>
        </h1>
        <div className="">
          <input
            className="border text-black bg-[#101725] font-bold border-gray-400 p-4  rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-400"
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Name"
            required
          />
        </div>

        <div className="w-full">
          <input
            className="border  focus:ring p-4 bg-[#101725] font-bold   text-black focus:ring-blue-400 border-gray-400 rounded-md w-full"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="w-full">
          <input
            className="border  p-4  bg-[#101725]   focus:ring font-bold focus:ring-blue-400 border-gray-400 rounded-md w-full"
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>

        <div className="w-full">
          <textarea
            className="border p-4 bg-[#101725]  font-bold text-start focus:ring text-gray-500 focus:ring-blue-400 border-gray-400 rounded-md w-full"
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="  p-4  bg-[#AD00FF] text-white  focus:ring font-bold  focus:ring-blue-400  rounded-md w-full">
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
