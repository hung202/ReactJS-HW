import React from "react";
import { Button, Col, Row } from "react-bootstrap";

import Childcom from "./Child";

class Testcom extends React.Component {
  state = {
    fName: "",
    sName: "",
    arrJob: [
      { id: "1", title: "a", salary: "200" },
      { id: "2", title: "b", salary: "600" },
      { id: "3", title: "c", salary: "800" },
    ],
  };
  handleOnClickButton = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  handleOnChangefName = (event) => {
    this.setState({
      fName: event.target.value,
    });
  };
  handleOnChangesName = (event) => {
    this.setState({
      sName: event.target.value,
    });
  };
  render() {
    let name = "????";
    return (
      <>
        <div>hello world {name}</div>

        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.fName}
            onChange={(event) => this.handleOnChangefName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.sName}
            onChange={(event) => this.handleOnChangesName(event)}
          />
          <br />
          <input
            type="submit"
            onClick={(event) => this.handleOnClickButton(event)}
          />
          {/* <Button  onClick={() => this.handleOnClickButton()}>Submit </Button> */}
        </form>
        <Childcom
          fName={this.state.fName}
          sName={this.state.sName}
          arrJob={this.state.arrJob}
        />
      </>
    );
  }
}
export default Testcom;
