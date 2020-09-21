import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./navbar";
import About from "./about";
import { Container } from "react-bootstrap";
import Projects from "./projects";
import Contact from "./contact";

const appStyle = {
  display: "flex",
  flexDirection: "column" as "column",
};

const feedStyle = {
  display: "flex",
  flexDirection: "column" as "column",
  maxWidth: "900px",
  margin: "0px 24px",
  alignSelf: "center",
  alignItems: "center",
  justifyContent: "center",
};

function App() {
  return (
    <div className="App" style={appStyle}>
      <NavBar />
      <div style={feedStyle}>
        <About />
        <Projects />
        <Contact />
        <span style={{ color: "grey", padding: "0px 0px 48px 0px" }}>
          Built by raziqraif @ 2020
        </span>
      </div>
    </div>
  );
}

export default App;
