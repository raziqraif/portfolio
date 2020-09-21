import * as React from "react";
import { Col, Container, Nav, Navbar } from "react-bootstrap";

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
}

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
};

export default class ProjectCard extends React.Component<
  ProjectCardProps,
  ProjectCardStates
> {
  render() {
    return <Container style={cardStyle}></Container>;
  }
}
