import React from "react";
// import { useState, useEffect } from "react";
// import { getUsers } from "../api/api";

function Users(props) {
  //   backup
  //   const [usersData, setUsersData] = useState([]);
  //   useEffect(() => {
  //     getUsers().then((data) => {
  //       setUsersData(data.data);
  //     });
  //   }, []);


  let users = props.usersData;

  return (
    <>
      <div className="users-layout">
        {users &&
          users.map((user) => {
            return (
              <div className="user" key={user.id}>
                <img alt={user.first_name} src={user.avatar} />
                <div className="user-name">
                  {user.first_name} {user.last_name}
                </div>
                {user.email}
                <div>
                  <button>Follow</button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Users;
