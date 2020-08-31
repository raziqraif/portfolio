import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./navbar";
import About from "./about"

let appStyle = {
    display: "flex",
    flexDirection: "column",
}

function App() {
    return (
        <div className="App" style={appStyle}>
            <NavBar/>
            <About/>
        </div>
    );
}

export default App;