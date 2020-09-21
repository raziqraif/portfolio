import * as React from "react";
import { Col, Container, Nav, Navbar } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

export interface ProjectType {
  title: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
  technologies: string[];
}

const projects: ProjectType[] = [
  {
    title: "SIMPLE-G US",
    description:
      "SIMPLE-G US is a research software that allows users to analyze and visualize geospatial data for agricultural \
      prices, land use, and the environment in the United States region. I rebuilt this software as a Jupyter application during my \
      internship with Rosen Center for Advanced Computing. The reimplementation gives the software access to state-of-the-art \
      packages, allowing new features that cater to researchers' needs to be implemented.",
    technologies: ["Python", "Jupyter", "SQLite", "GDAL", "Ipymaterialui"],
    githubLink: "https://github.com/raziqraif/simple-us",
  },
  {
    title: "Fortune",
    description:
      "Fortune is a cryptocurrency trading game that operates on real time cryptocurrency data. It was a team project for my \
      Software Engineering course. I contributed to this project by developing the admin functionalities, the game \
      management page, and the game chat feature between players. I was involved in the frontend and backend development \
      processes throughout this project, from designing the user interface to developing the APIs and the database \
      tables.",
    technologies: [
      "ReactJS",
      "Typescript",
      "Redux",
      "Flask",
      "Python",
      "PostgreSQL",
    ],
    githubLink: "https://github.com/raziqraif/fortune",
  },
  {
    title: "Techno-Economic Analysis (TEA)",
    description:
      "TEA is a proprietary tool suite made for analyzing the technology projects at Critical Material Institute. I committed to \
      this project when I was the software developer at Purdue University Environmental and Ecological Engineering department. My \
      core contributions to this project include reconstructing the whole codebase in a modular and object-oriented structure, \
      implementing multiple workspaces support, and streamlining the software's flow.",
    technologies: ["Python", "Tkinter"],
  },
  {
    title: "Ninja VR",
    description:
      "Ninja VR is a virtual reality fighting game inspired by the animation series, Naruto. It was a team project for my Virtual\
      Reality Technology course. My major responsibility for this project was to integrate 3D enemy characters into the game and \
      develop their combat abilities. On top of that, I also implemented the fighting logic between the player and the enemy characters.",
    technologies: ["Unity", "SteamVR", "C#"],
    githubLink: "https://github.com/raziqraif/ninja-vr",
  },
];

const titleStyle = {
  //   fontFamily: "Montserrat",
  //   fontWeight: "bold" as "bold",
  borderBottom: "4px solid grey",
  margin: "8px 0px 0px 0px",
  padding: "0px 0px 16px 0px",
};

export default class Projects extends React.Component {
  render() {
    return (
      <div
        id={"projects"}
        className={"d-flex flex-column align-items-center w-100"}
        style={{ padding: "56px 0px 0px 0px" }}
      >
        <h4 style={titleStyle}>Projects</h4>
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
