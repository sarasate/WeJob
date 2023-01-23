import React from "react";

function Hoyeonii() {
  const skills = [
    { name: "HTML", percent: 90 },
    { name: "CSS", percent: 90 },
    { name: "JS", percent: 90 },
    { name: "TS", percent: 80 },
    { name: "React", percent: 90 },
    { name: "React-Native", percent: 80 },
    { name: "Redux", percent: 70 },
  ];

  const projects = [
    {
      name: "BillyDa",
      link: "https://main--deft-zuccutto-fdb883.netlify.app/",
      img: "https://hoyeonii.github.io/portfolio2/assets/img/billyda.png",
    },
    {
      name: "Scope",
      link: "https://profile-review.web.app/",
      img: "https://hoyeonii.github.io/portfolio2/assets/img/scope.png",
    },
    {
      name: "Bingo Game",
      link: "https://hoyeonii.github.io/bingo/",
      img: "https://hoyeonii.github.io/portfolio2/assets/img/Bingo.JPG",
    },
  ];

  function SkillBar({ skill }) {
    return (
      <div>
        <div>{skill.name}</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-orange-600 h-2.5 rounded-full"
            style={{ width: skill.percent + "%" }}
          ></div>
        </div>
      </div>
    );
  }

  function Project({ project }) {
    return (
      <a href={project.link} className="p-3">
        <img
          className="p-3 hover:scale-105"
          src={project.img}
          alt={project.name}
        />
        <div className="text-center">{project.name}</div>
      </a>
    );
  }

  return (
    <div className="m-auto max-w-sm">
      <div className="mb-24 pb-4 border-b-2">
        <img
          className="rounded-full w-8/12 m-auto"
          src="https://hoyeonii.github.io/portfolio2/assets/img/HOYEON2.jpg"
          alt="profileImg"
        />
        <h1 className="text-center text-xl m-4 md:font-bold  text-purple-700">
          HYeon
        </h1>

        <p className="flex">
          Frontend Developer living in Germany. I studied Educational Technology
          and Multi Media in uni, and my ultimate goal as a developer is to run
          an app designed and made myself.
        </p>
      </div>
      <div className="mb-14">
        <div className="text-center text-3xl mb-4 md:font-bold">Skills</div>
        {skills.map((skill) => (
          <SkillBar skill={skill} />
        ))}
      </div>
      <div className="mb-14">
        <div className="text-center text-3xl mb-4 md:font-bold">Projects</div>
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
}

export default Hoyeonii;
