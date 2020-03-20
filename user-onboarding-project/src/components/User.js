import React from "react";

const User = props => {
  return (
    <div>
      {props.users.map(info => (
        <div key={info.id}>
          <h1>{info.name}</h1>
          <h2>{info.password}</h2>
          <h2>{info.email}</h2>
          <h2>{info.title}</h2>
          <h2>{info.title.value}</h2>

          {/* info.title.value should show selected dropdown item from Form.js, but does not*/}
        </div>
      ))}
    </div>
  );
};

export default User;
