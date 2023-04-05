// import logo from './logo.svg';
import "./App.css";
import { Button, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Testcom from "./exm/Test";
import React from "react";
import HelloWorld from "./Com";
import { useState } from "react";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const DemoComponent = (props) => {
  return (
    <div>
      <div>Đây là tuổi: {props.age}</div>
      <div>Đây là tên: {props.displayName}</div>
    </div>
  );
};
function App() {
  const [age, setAge] = useState(6);
  const [name, setName] = useState("Cee");

  const onIncreaseAge = () => {
    setAge(age + 1);
  };

  return (
    <>
      <div className="container">
        <div>{age}</div>
        <Button onClick={onIncreaseAge}>Tăng age lên 1</Button>
        <DemoComponent age={age} displayName={name} />
      </div>
    </>
  );
}

export default App;
