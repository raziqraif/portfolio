import * as React from 'react';
import profile from '../images/profile.png'
import {Col, Container} from "react-bootstrap";

const aboutStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    flexWrap: "wrap" as "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: "64px 0px 64px 0px",
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
    borderRadius: "4px"
}

const textWrapperStyle = {
    maxWidth: "500px",
    padding: "0px 0px 0px 0px",
}

const socialsWrapperStyle = {
    display: "flex",
}

const titleStyle = {
    fontFamily: "Montserrat !important",
    textAlign: "left" as "left",
}

const textStyle = {
    fontFamily: "Montserrat !important",
    textAlign: "left" as "left",
}

export default class About extends React.Component {
    render() {
        return (
            <Container id={"about"} style={aboutStyle}>
                <Col id={"text-wrapper"} md="auto" style={textWrapperStyle}>
                    <h1 style={titleStyle}>Hi, I'm Raziq</h1>
                    <p style={textStyle}>I'm a junior at Purdue University majoring in Computer Science and
                        minoring in Mathematics.
                    </p>
                    <div id={"socials-wrapper"} style={socialsWrapperStyle}>
                    </div>
                </Col>
                <Col style={imageCropperStyle} md={"auto"}>
                    <img src={profile} width={profileImageWidth} alt={"Raziq Ramli"} style={profileStyle}/>
                </Col>
            </Container>
        );
    }
}
