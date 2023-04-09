import React from "react";
import { Button, Col, Row } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

class Childcom extends React.Component {
  state = {
    showJobs: false,
  };
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  render() {
    console.log(this.props);
    let { arrJob } = this.props;
    let { showJobs } = this.state;
    let check = showJobs === true ? "showJobs= true" : "showJobs:false";
    console.log(check);
    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>show</button>
          </div>
        ) : (
          <>
            <div>
              {arrJob.map((item, index) => {
                if (item.salary >= 500) {
                  return (
                    <div key={item.id}>
                      {item.title}- {item.salary}
                    </div>
                  );
                }
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default Childcom;
