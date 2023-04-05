import React from 'react';

function Greeting(props) {
  return (
    <div>
      {props.name && <p>Greeting {props.name}</p>}
    </div>
  );
}

export default Greeting;