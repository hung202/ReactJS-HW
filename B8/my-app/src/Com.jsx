import React from 'react';

export default function HelloWorld() {
  let name = "Cee";

  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

  const formatName = (user) => {
    return user.firstName + ' ' + user.lastName;
  };


  return (
    <div>
      <div>Xin chào: {name} và {formatName(user)}</div>
      <div>{name === 'Cee' ? 'Xin Chào Cee' : `Xin Chào ${formatName(user)}`}</div>
      {/* <div>Rất vui được gặp bạn</div> */}
    </div>
  );
}