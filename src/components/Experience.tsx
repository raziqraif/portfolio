import * as React from "react";
import { Col, Container, Nav, Navbar } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export interface ProjectType {
  title: string;
  description: any;
  githubLink?: string;
  liveLink?: string;
  technologies: string[];
}

const projects: ProjectType[] = [
  {
    title: "Parallel Whole-Program Analysis (PWPA)",
    description: (
      <div>
        Pointer analysis is a fundamental type of program analysis. It establishes which memory locations a pointer can refer to throughout a program's lifetime. It is beneficial for applications in program security and bug detection. However, the analysis process can be time-intensive, which motivates the development of PWPA, an effort to make pointer analysis scalable. In this project, I am developing a novel parallelization technique for pointer analysis and studying its impact on large-scale systems.
      </div>
    ),
    technologies: ["C++", "SVF", "LLVM"],
    githubLink: "https://github.com/raziqraif/simple-us",
  },
  {
    title: "AgMIP Global Economics Data Uploader",
    description: (
      <div>
        Global Economics is an international research team under the <a href="https://agmip.org/" target="_blank">AgMIP Project</a>. It consists of data modeling groups with a differing research focus. These groups engage in an ensemble modeling activity, where they jointly contribute their model data into interoperable data repositories. As their projects grow, maintaining the interoperability of these repositories becomes more challenging. I developed a data processing pipeline for the team to streamline this process.
      </div>
    ),
    technologies: ["Python", "Pandas", "Ipywidgets", "Selenium", "Pytest", "GitHub Action"],
    githubLink: "https://github.com/raziqraif/simple-us",
  },
  {
    title: "SIMPLE-G US",
    description:
      <div>
        SIMPLE-G US is a geospatial analysis software for agricultural data. It supports scientific studies on long-term sustainability issues in the US, focusing on food, water, and the environment. The legacy version of this software has restricted graphical capabilities due to its library's limitations. I rebuilt the software with a cutting-edge graphics package, enabling the implementation of new visualization features that accommodate changing research requirements.
      </div>,
    technologies: ["Python", "GDAL", "SQLite", "Ipyeaflet", "Ipymaterialui"],
    githubLink: "https://github.com/raziqraif/simple-us",
  },
  {
    title: "CMI-TEA",
    description:
      <div>
        Critical Materials Institute (CMI) is an innovation hub under the Department of Energy. It focuses on developing resilient supply chains for materials crucial to clean energy technologies. To optimize the economic performance of CMI's technologies, CMI-TEA was developed. It is proprietary software for CMI researchers to conduct <i>techno-economic assessment</i> (TEA) on their processes. I spearheaded the technical development of the software from prototype until maturity.
      </div>,
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
