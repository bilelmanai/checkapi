import React from "react";
function UserList({ name, username, email, phone }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ color: "red" }}>
        {name}
        {username}
      </h3>
      <h4>email: {email}</h4>
      <h5>phone: {phone}</h5>
    </div>
  );
}

export default UserList;
