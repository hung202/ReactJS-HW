// import logo from './logo.svg';
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Testcom from "./exm/Test";
import React from "react";
import HelloWorld from "./Com";
import { useState } from "react";

function App() {
  const mess = "hello cc";
  const ismess = true;
  const todo = ["learn1", "learn2"];

  return (
    <>
      <div class="App">
        {" "}
        {mess}
        <h1>{ismess ? mess : "abc"}</h1>
        {todo.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <div>
          <Testcom> </Testcom>
        </div>
      </div>
    </>
  );
}

export default App;
