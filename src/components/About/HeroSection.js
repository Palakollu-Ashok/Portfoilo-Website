import { useTypewriter, Cursor } from "react-simple-typewriter";
import React from "react";
import Resume from "../../Files/AshokResume.pdf";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function HeroSection() {
  const [text] = useTypewriter({
    words: ["Front-End Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="grid place-items-center bg-[#090917]">
      <section
        id="1"
        className="md:flex md:justify-between md:items-center gap-16 md:h-full p-3 "
      >
        {/* IMAGE SECTION */}
        <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
          <div
            className="relative z-0 ml-20 before:absolute before:-top-16 before:-left-20 before:rounded-t-full
          before:w-full before:max-w-[400px]  md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[200px] md:max-w-[300px]  rounded-t-full"
              src="/assects/About/Heroimg.jpg"
            />
          </div>
        </div>

        {/* MAIN TEXT */}
        <div className="z-30  lg:w-[60vw] text-white mt-12 md:mt-32">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="space-y-5">
              <div>
                <h1 className="md:text-4xl text-2xl font-bold text-white">
                  Hi, I'm{" "}
                  <span className="text-red-700 capitalize">
                    Ashok Palakollu
                  </span>
                </h1>
              </div>
              <div className=" text-white xl:text-[40px] text-2xl sm:text-xs  text-start font-semibold py-4 ">
                a {text}
                <Cursor
                  cursorBlinking="false"
                  cursorStyle="|"
                  cursorColor="#ff014f"
                />
              </div>
            </div>
          </motion.div>

          {/* CALL TO ACTIONS */}
          <motion.div
            className="flex gap-2 mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <a
              href="#7"
              className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-deep-blue rounded-l-lg py-3 px-7 md:text-md text-sm md:font-semibold
            hover:bg-blue hover:text-white transition duration-500"
            >
              Contact Me
            </a>
            <a
              href={Resume}
              target="_blank"
              className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-deep-blue rounded-l-lg py-3 px-7 font-semibold md:text-md text-sm md:font-semibold hover:bg-blue hover:text-white transition duration-500"
            >
              Resume(CV)
            </a>
          </motion.div>

          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          ></motion.div>
          <div className="text-white flex pt-10 gap-4 md:items-start  justify-center items-center md:w-1/2">
            <div className="group relative">
              <Link
                to="https://www.linkedin.com/in/palakollu-ashok-a21882262/"
                target="_blank"
              >
                <FaLinkedin className="w-8 h-8" />

                <span
                  class="absolute -top-12  right-[50%] -translate-x-[50%] 
                  z-20 origin-left scale-0 px-3 rounded-lg border 
                  border-gray-300 bg-white text-black py-2 text-sm font-bold
                  shadow-md transition-all duration-300 ease-in-out 
                  group-hover:scale-100"
                >
                  Linkedin<span></span>
                </span>
              </Link>
            </div>
            <div className="group relative">
              <Link to="https://github.com/Palakollu-Ashok" target="_blank">
                <FaGithub className="w-8 h-8" />

                <span
                  class="absolute -top-12 left-[50%] -translate-x-[50%] 
                z-20 origin-left scale-0 px-3 rounded-lg border 
                border-gray-300 bg-white text-black py-2 text-sm font-bold
                shadow-md transition-all duration-300 ease-in-out 
                group-hover:scale-100"
                >
                  GitHub<span></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
