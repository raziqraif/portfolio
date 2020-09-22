import * as React from "react";
import profile from "../images/profile.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TypeWriter from "./Typewriter";

const aboutStyle = {
  display: "flex",
  flexDirection: "row" as "row",
  flexWrap: "wrap" as "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  alignSelf: "center",
  padding: "72px 0px 0px 0px",
};

const profileImageWidth = "260px";

const imageCropperStyle = {
  display: "flex",
  margin: "0px 0px 0px 0px",
  padding: "0px 0px 0px 40px",
  justifyContent: "center",
  alignItems: "center",
};

const imageCropperStyleSmall = {
  display: "flex",
  margin: "0px 0px 0px 0px",
  padding: "0px 0px 0px 0px",
  justifyContent: "center",
  alignItems: "center",
};

const profileStyle = {
  //   minWidth: profileImageWidth,
  margin: "0px 0px 0px 0px",
  borderRadius: "4px",
  //   borderRadius: "50%" as "50%",
  boxShadow:
    "0 50px 100px rgba(50, 50, 93, 0.05),\
      0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1)",
};

const textWrapperStyle = {
  // maxWidth: "500px",
  display: "flex",
  flexDirection: "column" as "column",
  padding: "0px 0px 0px 0px",
};

const socialsWrapperStyle = {
  display: "flex",
  width: "43px",
  justifyContent: "space-between",
  alignSelf: "center",
  margin: "0px 8px 0px 0px",
};

const textStyle = {
  lineHeight: "165%",
  //   fontFamily: "Montserrat",
  textAlign: "left" as "left",
  padding: "0px 0px 0px 0px",
  margin: "16px 0px 24px 0px",
  fontSize: "16px",
};

const linkStyle = {
  color: "#000000",
};

export default class About extends React.Component {
  render() {
    return (
      <Container id={"about"} style={aboutStyle}>
        <Col
          id={"text-wrapper"}
          sm={12}
          md={8}
          lg={8}
          xs={12}
          style={textWrapperStyle}
        >
          <div className={"d-flex flex-row"}>
            <h1 style={{ margin: "0px 16px 0px 0px" }}>{">"}</h1>
            <TypeWriter
              typingDelay={40}
              erasingDelay={40}
              newTextDelay={1000}
              textArray={[" ", " Hi, I'm Raziq"]}
              loop={false}
            ></TypeWriter>
          </div>
          <div className={"d-flex d-flex-row"}>
            <div style={textStyle}>
              I am a Computer Science junior at Purdue University with a minor
              in Mathematics, who is passionate about building software that is
              not just visually appealing, but also well-engineered.
            </div>
          </div>
          <div
            className="d-flex flex-row justify-content-between"
            style={{ margin: "0px 0px 24px 0px" }}
          >
            <Button
              href="/resume.pdf"
              target="_blank"
              variant="dark"
              style={{
                background: "black",
                outline: "none",
                boxShadow: "none",
                borderRadius: "0px",
                border: "none",
                fontSize: "13px",
              }}
            >
              Resume
            </Button>
            <div id={"socials-wrapper"} style={socialsWrapperStyle}>
              <a
                href={"https://github.com/raziqraif"}
                target={"_blank"}
                style={linkStyle}
              >
                <FaGithub size={18} color={"#4a5568"} />
              </a>
              <a
                href={"https://www.linkedin.com/in/raziq-raif-ramli-723a13156/"}
                target={"_blank"}
                style={linkStyle}
              >
                <FaLinkedin size={18} color={"#4a5568"} />
              </a>
            </div>
          </div>
        </Col>
        <Col
          className={"d-md-none"}
          style={imageCropperStyleSmall}
          sm={12}
          md={4}
          lg={4}
          xs={12}
        >
          <img
            src={profile}
            style={profileStyle}
            width={"100%"}
            alt={"Raziq Ramli"}
          />
        </Col>
        <Col
          className={"d-none d-md-block"}
          style={imageCropperStyle}
          sm={12}
          md={4}
          lg={4}
          xs={12}
        >
          <img
            src={profile}
            style={profileStyle}
            width={"100%"}
            alt={"Raziq Ramli"}
          />
        </Col>
      </Container>
    );
  }
}
