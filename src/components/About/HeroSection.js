// import React from "react";
// import data from "../../content/About/HeroSection.json";
// import Resume from "../../Files/AshokResume.pdf";

// function HeroSection() {
//   return (
//     <div id="1" className="py-5 bg-[#090917] md:px-20 lg:px-40 px-3">
//       <section className="md:flex justify-between space-y-6 md:space-y-0">
//         <div className=" text-white space-y-3 self-end md:w-1/2">
//           <h1 className="lg:text-5xl text-3xl py-1">{data.wish}</h1>
//           <h1 className="lg:text-5xl text-5xl py-1">{data.name}</h1>
//           <h2 className="lg:text-3xl text-xl  py-1">{data.role}</h2>
//           <h3 className="lg:text-lg text-md text-[#919299]  py-3 font-semibold  ">
//             {data.description}
//           </h3>
//           <div className="md:flex grid items-center">
//             <a
//               href={Resume}
//               target="_blank"
//               className="bg-[#AF00FF] focus-within:bg-[#AF00ff] cursor-pointer w-fit  rounded-full py-4 px-20"
//             >
//               {data.button}
//             </a>
//           </div>
//         </div>
//         <div className="grid place-content-center md:w-1/2">
//           <img
//             src={data.img}
//             alt=""
//             className="w-48 h-48 md:w-96 md:h-96   border-2 border-purple-700  md:rounded-full"
//           />
//         </div>
//       </section>
//     </div>
//   );
// }

// export default HeroSection;
import { TypeAnimation } from "react-type-animation";

import React from "react";
import data from "../../content/About/HeroSection.json";
import Resume from "../../Files/AshokResume.pdf";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function HeroSection() {

  
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
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[700px] md:max-w-[800px] md:h-[30v] rounded-t-full"
              src="/assects/About/Heroimg.jpg"
            />
          </div>
        </div>

        {/* MAIN TEXT */}
        <div className="z-30 basis-2/5 lg:w-[60vw] text-white mt-12 md:mt-32">
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
            <p className="text-6xl font-playfair z-10 text-center md:text-start">
              Ashok {""}
              <span
                className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
              >
                Palakollu
              </span>
            </p>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "I'm Front-End Developer",
                1000,
                "I'm Front-End Developer",
                1200,
                "I'm Front-End Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />

            <p className="mt-10 mb-7 text-white/70 md:text-md text-sm text-center md:text-start  font-thin">
              I am a motivated and versatile individual, always eager to take on
              new challenges. With a passion for learning I am dedicated to
              delivering high-quality results. With a positive attitude and a
              growth mindset, I am ready to make a meaningful contribution and
              achieve great things.
            </p>
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
            <AnchorLink
              className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-deep-blue rounded-l-lg py-3 px-7 font-semibold
            hover:bg-blue hover:text-white transition duration-500"
              href="#contact"
            >
              Contact Me
            </AnchorLink>
            <AnchorLink
              className="rounded-r-lg bg-gradient-rainblue border border-cyan-500 py-0.5 pr-0.5"
              href="#contact"
            >
              <div className=" hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
                Let's talk.
              </div>
            </AnchorLink>
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
          <div className="text-white flex gap-4 justify-center items-center w-1/2">
            <Link to="https://www.linkedin.com/in/palakollu-ashok-a218822626">
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link to="https://github.com/Palakollu-Ashok">
              <FaGithub className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
