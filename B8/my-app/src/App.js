// import logo from './logo.svg';
import './App.css';
import { Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testcom from './exm/Test';
import React from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


function App() {
 
    const mess = "hello cc"
    const ismess = true
const todo=['learn1', 'learn2']

    return (
      

<>
<div class= "App"> {mess}
        <h1>{ismess? mess: "abc"}</h1>
        {todo.map((todo, index)=>{
 return <p key={index}>{todo}</p>


        })}
      </div>
<div>

 <Button variant="primary  ">Primary</Button>{' '}
<Button variant="secondary">Secondary</Button>{' '}
<Button variant="success">Success</Button>{' '}
<Button variant="warning">Warning</Button>{' '}
<Button variant="danger">Danger</Button>{' '}
<Button variant="info">Info</Button>{' '}
<Button variant="light">Light</Button>{' '}
<Button variant="dark">Dark</Button>
<Button variant="link">Link</Button>
</div>
<div>
<Testcom> </Testcom> 
</div>
</>
)
}

export default App;
