import * as React from 'react';
import profile from '../images/profile.png'
import {Col, Container, Row} from "react-bootstrap";
import {FaGithub, FaLinkedin} from "react-icons/fa"

const aboutStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    flexWrap: "wrap" as "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    padding: "56px 0px 56px 0px",
}

const profileImageWidth = "260px"

const imageCropperStyle = {
    display: "flex",
    margin: "0px 0px 0px 0px",
    padding: "0px 0px 0px 0px",
    justifyContent: "center",
    alignItems: "center",
}

const profileStyle = {
    borderRadius: "4px",
    minWidth: profileImageWidth,
    margin: "0px 0px 0px 0px",
}

const textWrapperStyle = {
    // maxWidth: "500px",
    display: "flex",
    flexDirection: "column" as "column",
    padding: "0px 0px 0px 0px",
}

const socialsWrapperStyle = {
    display: "flex",
    width: "43px",
    justifyContent: "space-between",
    alignSelf: "flex-start",
    margin: "0px 0px 24px 0px",
}

const titleStyle = {
    fontFamily: "Montserrat !important",
    textAlign: "left" as "left",
    // fontSize: "34px",
}

const textStyle = {
    fontFamily: "Montserrat !important",
    textAlign: "left" as "left",
    padding: "0px 0px 0px 0px",
    fontSize: "16px",
}

const linkStyle = {
    color: "#000000",
}

export default class About extends React.Component {
    render() {
        return (
            <Container id={"about"} style={aboutStyle}>
                <Col id={"text-wrapper"} sm={12} md={7} lg={7} xs={12} style={textWrapperStyle}>
                    <h1 style={titleStyle}>Hi, I'm Raziq</h1>
                    <div className={"d-flex d-flex-row"}>
                        <p style={textStyle}>I am a junior in Computer Science at Purdue University with a minor in
                            Mathematics. I am deeply passionate about writing
                            elegant software design, visually and technically. 
                        </p>
                       <div className={"d-none d-md-block"} style={{padding: "0px 8px"}}/>
                    </div>
                    <div id={"socials-wrapper"} style={socialsWrapperStyle}>
                        <a href={"https://github.com/raziqraif"} target={"_blank"} style={linkStyle}>
                            <FaGithub size={18} color={"#4a5568"}/>
                        </a>
                        <a href={"https://www.linkedin.com/in/raziq-raif-ramli-723a13156/"} target={"_blank"}
                           style={linkStyle}>
                            <FaLinkedin size={18} color={"#4a5568"}/>
                        </a>
                    </div>
                </Col>
                <Col style={imageCropperStyle} sm={12} md={5} lg={5} xs={12}>
                    <img src={profile} width={"100%"} alt={"Raziq Ramli"} style={profileStyle}/>
                </Col>
            </Container>
        );
    }
}
