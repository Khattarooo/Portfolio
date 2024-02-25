import React from "react";

const SkillProgressBar = ({ skill, level }) => {
  return (
    <div className="mb-4">
      <p className="text-lg">{skill}</p>
      <div className="flex items-center bg-wh">
        <div className="bg-gray-300 h-4 rounded-full w-48 mr-2">
          <div
            className="bg-sky-500 hover:shadow-md hover:shadow-sky-500 rounded-full h-full"
            style={{ width: level + "%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className="min-w-full md:min-w-screen overflow-auto text-white mt-36 h-screen flex justify-center items-center">
      <div className="text-start ml-4 w-2/4 h-full ">
        <h1 className="text-3xl hover:text-sky-500 sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-center mb-2">
          About Me
        </h1>
        <p className="text-base sm:text-sm md:text-md lg:text-lg xl:text-xl mb-2">
          I'm a diligent individual with a proven track record of exceeding
          expectations. My strong work ethic and passion for excellence make me
          an asset to any organization.
        </p>
        <p className="text-xl text-sky-500 sm:text-md md:text-lg lg:text-xl xl:text-2xl font-semibold mb-2">
          Education:
        </p>
        <p className="text-base sm:text-sm md:text-md lg:text-lg xl:text-xl mb-2">
          I graduated with a degree in Computer Science from Lebanese
          International University.
        </p>
        <p className="text-xl text-sky-500 sm:text-md md:text-lg lg:text-xl xl:text-2xl font-semibold mb-2">
          Work Experience:
        </p>
        <ul className="text-base sm:text-sm md:text-md lg:text-lg xl:text-xl mb-2 list-disc ">
          <li>
            I work at NR Software as a Web Developer{" "}
            <span className="text-gray-500">2023-present</span>
          </li>

          <li>
            I used to work at SarahCell as a Sales representative{" "}
            <span className="text-gray-500">2017-2022</span>
          </li>
        </ul>
        <p className="text-xl text-sky-500 sm:text-md md:text-lg lg:text-xl xl:text-2xl font-semibold mb-2">
          Informations:
        </p>
        <ul className="text-base sm:text-sm md:text-md lg:text-lg xl:text-xl mb-2 list-disc ">
          <li>
            Born in WadiQuannoubine <span className="text-gray-500">2001</span>
          </li>
          <li>I Live in Kousba,al-koura,north Lebanon </li>
          <li>
            I Speak 3 languages:{" "}
            <span className="text-sky-200">Arabic, English and French</span>
          </li>
        </ul>
      </div>
      <div className="bg-transparent rounded-3xl ml-4 mt-18">
        <div className="text-left p-2">
          <p className="text-2xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold mb-4">
            Skills
          </p>
          <SkillProgressBar skill="Html" level={70} />
          <SkillProgressBar skill="CSS" level={75} />
          <SkillProgressBar skill="JavaScript" level={65} />
          <SkillProgressBar skill="Vue.Js" level={60} />
          <SkillProgressBar skill="React/React Native" level={70} />
          <SkillProgressBar skill="Responsive Web Design" level={75} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
