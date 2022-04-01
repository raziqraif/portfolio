import * as React from "react";
import { Col, Container, Nav, Navbar } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export interface ProjectType {
  title: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
  technologies: string[];
}

const projects: ProjectType[] = [
  {
    title: "Parallel Whole-Program Analysis",
    description:
      "PWPA is a pointer analysis platform that I am working on at\
       Reliable and Secure Systems Lab.\
       Pointer analysis is a type of analysis that attempts to \
       determine which pointers can point to which memory locations. \
       It is beneficial for applications like program security and \
       bug detection. However, the analysis process can be time-consuming. \
       So, I am implementing a parallelization technique for pointer \
       analysis algorithms and studying its impact when used to \
       analyze large software systems.",
    technologies: ["C++", "SVF", "LLVM"],
    githubLink: "https://github.com/raziqraif/simple-us",
  },
  {
    title: "AgMIP Global Economics Data Uploader",
    description:
      "",
    technologies: ["Python", "Pandas", "Selenium", "GitHub Action", "Pytest", "Ipywidgets"],
    githubLink: "https://github.com/raziqraif/simple-us",
  },
  {
    title: "SIMPLE-G US",
    description:
      "SIMPLE-G US is an analysis software that allows researchers to \
      study agricultural prices, land use, and the environment in the United States region. \
      The legacy version of this software has a limited graphical capability due to \
      the library that was used. I rebuilt the software by using state-of-the-art packages, \
      allowing for the implementation of new features that tailor to \
      researchers' needs.",
    technologies: ["Python", "GDAL", "SQLite", "Ipymaterialui"],
    githubLink: "https://github.com/raziqraif/simple-us",
  },
  {
    title: "Techno-Economic Analysis (TEA)",
    description:
      "TEA is a proprietary tool suite for conducting techno-economic assessments (TEA) on the technology projects at Critical Material Institute. \
      I committed to \
      this project when I was the software developer at Purdue University Environmental and Ecological Engineering department. \
      Throughout my time here, I have developed mechanisms for reporting preliminary TEA, dynamic TEA, mass flow estimates, and energy \
      costs estimates.",
    technologies: ["Python", "Tkinter", "Pygubu"],
  },
  // {
  //   title: "Fortune",
  //   description:
  //     "Fortune is a cryptocurrency trading game that operates on real time cryptocurrency data. It was a team project for my \
  //     Software Engineering course. I contributed to this project by developing the admin functionalities, the game \
  //     management page, and the game chat feature between players. I was involved in both the frontend and backend development \
  //     processes throughout this project.",
  //   technologies: [
  //     "ReactJS",
  //     "Typescript",
  //     "Redux",
  //     "Flask",
  //     "Python",
  //     "PostgreSQL",
  //   ],
  //   githubLink: "https://github.com/raziqraif/fortune",
  // },
  // {
  //   title: "Fighter VR",
  //   description:
  //     "Fighter VR is a virtual reality fighting game inspired by the animation series, Naruto. It was a team project for my Virtual\
  //     Reality Technology course. My responsibility for this project was to integrate enemy characters into the game by utilizing 3D models \
  //     from Mixamo. On top of that, I implemented the fighting logic between the player and the enemy characters \
  //     by utilizing Unity Navmesh",
  //   technologies: ["Unity", "SteamVR", "C#"],
  //   githubLink: "https://github.com/raziqraif/ninja-vr",
  // },
];

const titleStyle = {
  //   fontFamily: "Montserrat",
  //   fontWeight: "bold" as "bold",
  borderBottom: "4px solid grey",
  margin: "8px 0px 0px 0px",
  padding: "0px 0px 16px 0px",
};

export class Experience extends React.Component {
  render() {
    return (
      <div
        id={"experience"}
        className={"d-flex flex-column align-items-center w-100"}
        style={{ padding: "56px 0px 0px 0px" }}
      >
        <h4 style={titleStyle}>Experience</h4>
        {projects.map((project) => {
          return (
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          );
        })}
      </div>
    );
  }
}
