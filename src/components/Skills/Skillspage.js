// import React from "react";
// import data from "../../content/skills/Skills.json";

// const Skills = () => {
//   return (
//     <section className="">
//       <div className="py-10  px-24 bg-[#090917] grid justify-center">
//         <h1 className="text-white text-center text-5xl">Skills</h1>
//         <p className="text-white text-2xl text-center">
//           Here are some of my skills on which I have been working for the past 2
//           years.
//         </p>

//         <div className="flex gap-8 border border-slate-300 py-20">
//           <div className="py-10">
//             <h2 className="text-white text-center text-3xl">{data.title}</h2>
//           </div>
//           {data &&
//             data?.skills.map((d, index) => (
//               <div
//                 key={index}
//                 className="text-white border   border-slate-400  rounded-lg  gap-2 flex-grow-3 flex items-center"
//               >
//                 <div className="">
//                   <img
//                     src={d.image}
//                     alt={d.name}
//                     className="w-14 p-3 flex  h-14 mr-3"
//                   />
//                 </div>
//                 <h4 className="">{d.name}</h4>
//               </div>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import styled from "styled-components";
import data from "../../content/skills/Skills.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 300px;
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 18px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillItem = styled.div`
  font-size: 20px;
  font-weight: 400;
  border: 1px solid ;
  border-radius: 12px;
  padding: 10px 10px;
  display: flex;
  margin-top:10px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 28px;
  height: 28px;
`;

const Skillspage = () => {
  return (
    <Container id="2" className="bg-[#090917] px-3 ">
      <Wrapper className="py-5">
        <Title className="text-white">Skills</Title>
        <Desc className="text-white">
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </Desc>

        <SkillsContainer className="bg-[#101725]  relative   rounded-lg py-20">
          {data &&
            data?.skills.map((skill) => (
              <Skill className="">
                <SkillItem className="text-white">
                  <SkillImage src={skill.image} />
                  {skill.name}
                </SkillItem>
              </Skill>
            ))}
        </SkillsContainer>
      </Wrapper>
      <div className="absolute mb-80 text-2xl text-white">Frontend</div>
    </Container>
  );
};

export default Skillspage;
