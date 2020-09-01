import * as React from 'react';
import profile from '../images/profile.png'

const aboutStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    alignItems: "center",
    alignSelf: "center",
    padding: "64px 0px 64px 0px",
}

const profileImageWidth = "260px"
const profileImageHeight = "260px"

const imageCropperStyle = {
    width: profileImageWidth,
    height: profileImageHeight,
    position: "relative" as "relative",
    overflow: "hidden",
}

const profileStyle = {
    display: "inline",
    margin: "0 auto",
    height: "100%",
    width: "auto",
    borderRadius: "4px"
}

const titleStyle = {
    fontFamily: "Montserrat",
    maxWidth: "500px",
    textAlign: "left" as "left",
}

const textStyle = {
    fontFamily: "Montserrat",
    maxWidth: "500px",
    textAlign: "left" as "left",
}

const textWrapperStyle = {
    height: "100%",
}

const socialsWrapperStyle = {
    display: "flex",
}

export default class About extends React.Component {
    render() {
        return (
            <div id={"about"} style={aboutStyle}>
                <div id={"text-wrapper"} style={textWrapperStyle}>
                    <h1 style={titleStyle}>Hi, I'm Raziq</h1>
                    <p style={textStyle}>I'm a junior at Purdue University majoring in Computer Science and
                        minoring in Mathematics.
                    </p>
                    <div id={"socials-wrapper"} style={socialsWrapperStyle}>
                    </div>
                </div>
                <div id={"image-cropper"} style={imageCropperStyle}>
                    <img src={profile} width={"280px"} alt={"Raziq Ramli"} style={profileStyle}/>
                </div>
            </div>
        );
    }
}
// <Button variant={"secondary"}>Resume</Button>
// <h3>Hello, I'm Raziq</h3>
