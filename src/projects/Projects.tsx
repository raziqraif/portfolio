import * as React from "react";
import { Col, Container, Nav, Navbar } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const titleStyle = {
  fontFamily: "Montserrat",
  fontWeight: "bold" as "bold",
  borderBottom: "4px solid grey",
  padding: "0px 0px 8px 0px",
};

export default class Projects extends React.Component {
  render() {
    return (
      <div className={"d-flex flex-column align-items-center w-100"}>
        <h4 style={titleStyle}>Projects</h4>
        <ProjectCard
          title={"SIMPLE-G US"}
          description={
            "SIMPLE-G is a geospatial visualization and analysis tool. I rebuilt this tool as a Jupyter application during my \
            Summer 2020 internship."
          }
        />
        <ProjectCard
          title={"SIMPLE-G US"}
          description={
            "SIMPLE-G is a geospatial visualization and analysis tool. I rebuilt this tool as a Jupyter application during my \
            Summer 2020 internship."
          }
        />
        <ProjectCard
          title={"SIMPLE-G US"}
          description={
            "SIMPLE-G is a geospatial visualization and analysis tool. I rebuilt this tool as a Jupyter application during my \
            Summer 2020 internship."
          }
        />
        <ProjectCard
          title={"SIMPLE-G US"}
          description={
            "SIMPLE-G is a geospatial visualization and analysis tool. I rebuilt this tool as a Jupyter application during my \
            Summer 2020 internship."
          }
        />
      </div>
    );
  }
}
