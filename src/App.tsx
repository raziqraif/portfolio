import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./navbar";
import About from "./about"

const appStyle = {
    display: "flex",
    flexDirection: "column" as "column",
}

const feedStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    maxWidth: "900px",
    alignSelf: "center",
}

function App() {
    return (
        <div className="App" style={appStyle}>
            <NavBar/>
            <div style={feedStyle}>
                <About/>
            </div>
        </div>
    );
}

export default App;