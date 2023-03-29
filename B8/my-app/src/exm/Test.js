import React from "react";
import { Button, Col, Row } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';



class Testcom extends React.Component{
state ={
    
    fName: '',
    sName: '',
}
handleOnClickButton= (event)=>{
    event.preventDefault()
    console.log(this.state);
}
handleOnChangefName = (event)=>{
    this.setState({
        fName: event.target.value,
        
    })
}
handleOnChangesName = (event)=>{
    this.setState({
        sName: event.target.value,
        
    })
}
    render() {
        let name='????'
       return (
        <>
        {/* <div> 
            <input value={this.state.name1} type="text" 
            onChange={(event)=> this.handleOnChangeName(event)} />
             </div>    */}
            
            <div>
            hello world  {name}
            </div>
            <div>
                <Button variant="primary" >clicked cc</Button>
            </div>
            <form>
            <label htmlFor="fname">First name:</label><br/>
            <input type="text" value={this.state.fName}
             onChange={(event)=> this.handleOnChangefName(event)}
             /><br/>
            <label htmlFor="lname">Last name:</label><br/>
            <input type="text"  value={this.state.sName}
             onChange={(event)=> this.handleOnChangesName(event)}
             /><br/>
            <input type="submit"  onClick={(event) => this.handleOnClickButton(event)}/>
            {/* <Button  onClick={() => this.handleOnClickButton()}>Submit </Button> */}
            </form>




        </>
       ) 
    }
}
export default Testcom;