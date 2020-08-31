import * as React from 'react';
import {Button} from 'react-bootstrap';

const aboutStyle = {
    maxWidth: "1200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center"
}

export default class About extends React.Component {
    render() {
        return (
            <div id={"about"} style={aboutStyle}>
                <h1>Hello, I'm Raziq</h1>
                <p style={{maxWidth: "800px"}}>I'm a junior from Purdue University majoring in Computer Science and
                    minoring in Mathematics. From my previous software
                    development roles, I have mostly been working on Python applications, but I'm aiming for a web
                    developer role for my next gig.
                </p>
            </div>
        );
    }
}
