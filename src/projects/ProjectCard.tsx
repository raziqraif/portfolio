import * as React from "react";
import { Col, Container, Nav, Navbar } from "react-bootstrap";
import { ProjectType } from "./Projects";

interface ProjectCardStates {}

const cardStyle = {
  width: "100%",
  minHeight: "300px",
  backgroundColor: "white",
  margin: "56px 0px 0px 0px",
  borderRadius: "4px",
  boxShadow:
    "0 50px 100px rgba(50, 50, 93, 0.05),\
      0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1)",
  padding: "32px",
};

const titleStyle = {
  margin: "0px 0px 32px 0px",
};

const descriptionStyle = {
  textAlign: "left" as "left",
  margin: "0px 0px 32px 0px",
};

const technologyStyle = {
  margin: "0px 10px 0px 0px",
  fontSize: "14px",
  padding: "4px 8px",
  border: "2px solid #92eac0",
  borderRadius: "4px",
};

export default class ProjectCard extends React.Component<
  ProjectType,
  ProjectCardStates
> {
  constructor(props: ProjectType) {
    super(props);
  }
  render() {
    return (
      <Container
        className={"d-flex flex-column align-items-start"}
        style={cardStyle}
      >
        <h5 style={titleStyle}>{this.props.title}</h5>
        <p style={descriptionStyle}>{this.props.description}</p>
        <div className="d-flex flex-row">
          {this.props.technologies.map((technology: string) => {
            return <p style={technologyStyle}>{technology}</p>;
          })}
        </div>
      </Container>
    );
  }
}
