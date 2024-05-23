import { MdRocketLaunch } from "react-icons/md";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your user ID

function Form() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hna253v", "template_8bgnqi5", form.current, {
        publicKey: "qaA1h2akl5nGjFP2E",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="7" className="grid bg-[#090917] py-5 px-3 justify-center">
      <div className="p-14">
        <h1 className="text-5xl text-white/90 text-center font-serif font-bold">
          Contact
        </h1>
        <p className="text-white/50 md:text-lg text-md text-center py-2 font-serif ">
          Feel free to reach out to me for any questions or opportunities!
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-7 shadow-[#175CE626.] bg-[#101725] shadow-lg rounded-xl border border-gray-400 p-5"
      >
        <h1 className="text-white text-2xl flex gap-2">
          Email Me{" "}
          <span className="mt-1">
            <MdRocketLaunch className="text-purple-400" />
          </span>
        </h1>
        <div>
          <input
            className="border p-4 bg-[#101725] text-start  rounded-md w-full"
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Name"
            required
          />
        </div>

        <div>
          <input
            className="border p-4 bg-[#101725] font-bold text-start focus:ring text-gray-500 focus:ring-blue-400 border-gray-400 rounded-md w-full"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <div>
          <input
            className="border p-4 bg-[#101725] font-bold text-start focus:ring text-gray-500 focus:ring-blue-400 border-gray-400 rounded-md w-full"
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>

        <div>
          <textarea
            className="border p-4 bg-[#101725] font-bold text-start focus:ring text-gray-500 focus:ring-blue-400 border-gray-400 rounded-md w-full"
            id="message"
            name="message"
            placeholder="Message"
            required
          />
        </div>
        <button className="p-4 bg-[#AD00FF] text-white focus:ring font-bold focus:ring-blue-400 rounded-md w-full">
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
