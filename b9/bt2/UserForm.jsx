import React from 'react';

function UserForm(props) {
  return (
    <div>
      <label htmlFor="nameInput">Enter your name: </label>
      <input type="text" id="nameInput" onChange={props.onChange} />
    </div>
  );
}

export default UserForm;