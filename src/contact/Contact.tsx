import * as React from "react";
import { Col, Container, Nav, Navbar } from "react-bootstrap";

const titleStyle = {
  //   fontFamily: "Montserrat",
  //   fontWeight: "bold" as "bold",
  borderBottom: "4px solid grey",
  margin: "0px 0px 48px 0px",
  padding: "0px 0px 16px 0px",
};

export default class Contacts extends React.Component {
  render() {
    return (
      <div
        id={"contact"}
        className={"d-flex flex-column align-items-center w-100"}
        style={{ padding: "64px 0px 56px 0px" }}
      >
        <h4 style={titleStyle}>Contact</h4>
        <div className={"d-flex flex-column flex-md-row"}>
          <div
            style={{
              margin: "8px 0px",
            }}
          >
            <a href={"mailto: mramli@purdue.edu"} style={{ color: "black" }}>
              {"mramli@purdue.edu"}
            </a>
          </div>
          <div className="d-none d-md-block" style={{ padding: "8px 8px" }}>
            {"|"}
          </div>
          <div
            style={{
              margin: "8px 0px",
            }}
          >
            <a
              href={"https://github.com/raziqraif"}
              target="_blank"
              style={{
                color: "black",
                margin: "8px 0px",
              }}
            >
              {"Github"}
            </a>
          </div>
          <div className="d-none d-md-block" style={{ padding: "8px 8px" }}>
            {"|"}
          </div>
          <div
            style={{
              margin: "8px 0px",
            }}
          >
            <a
              href={"https://www.linkedin.com/in/raziq-raif-ramli-723a13156/"}
              target="_blank"
              style={{ color: "black" }}
            >
              {"LinkedIn"}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
