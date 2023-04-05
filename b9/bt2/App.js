import React, { useState } from "react";
import UserForm from "./UserForm";
import Greeting from "./Greeting";

function App() {
  const [name, setName] = useState("");

  function handleInputChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <UserForm onChange={handleInputChange} />
      <Greeting name={name} />
    </div>
  );
}

export default App;
