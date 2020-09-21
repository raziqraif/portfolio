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
      "SIMPLE-G US is a geospatial visualization and analysis tool. I rebuilt this tool as a Jupyter application during my \
      Summer 2020 internship with Rosen Center for Advanced Computing. The frontend is built using ipymaterialui, a Python library\
      based on the Material UI framework. The data processing is done using the Python GDAL library.",
    technologies: ["Python", "Jupyter", "SQLite", "GDAL", "Ipymaterialui"],
    githubLink: "https://github.com/raziqraif/simple-us",
  },
  {
    title: "Fortune",
    description:
      "Fortune is a cryptocurrency trading game. It was a team project for my Software Engineering course. I was responsible\
      to develop the manage game page, admin page functionalities, and the real-time chat feature. I was involved in both the \
      frontend and backend part of the project.",
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
      "TEA is a desktop application made for analyzing the technology projects at Critical Material Institute. I worked on this \
       project when I was the software developer at Purdue University Environmental and Ecological Engineering department. My main \
       contributions to this project include reimplementing the codebase in object-oriented structure, adding support for multiple \
       workspaces, and simplifying the software's flow.",
    technologies: ["Python", "Tkinter"],
  },
  {
    title: "Ninja VR",
    description:
      "Ninja VR is a virtual reality fighting game inspired by the animation series, Naruto. It was a team project for my Virtual\
      Reality Technology course. I was responsible to integrate 3D enemy characters into the game and implement the fighting \
      logic.",
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
