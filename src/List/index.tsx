import React, { useState } from "react";
import "./List.scss";
import { useDialog } from "promise-confirmation-dialog";

const USERS = ["Billy", "Joe", "Doe", "Ann"];

function List() {
  const { showDialog } = useDialog();
  const [users, setUsers] = useState(USERS);

  const confirmHandler = async (user: string) => {
    const isConfirmed = await showDialog("Hello World!");
    if (isConfirmed) {
      setUsers(users.filter((item) => item !== user));
    }
  };

  return (
    <ul className="users-list">
      {users.map((user) => (
        <li className="users-list-item" key={user}>
          {user}
          <button className="delete-user" onClick={() => confirmHandler(user)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;
