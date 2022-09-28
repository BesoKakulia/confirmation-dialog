import React, { useState } from "react";
import "./List.scss";
import { useDialog } from "../ConfirmationDialog";

const USERS = ["Billy", "Joe", "Doe", "Ann"];

function List() {
  const { confirm } = useDialog();
  const [users, setUsers] = useState(USERS);

  const confirmHandler = async (user) => {
    const isConfirmed = await confirm("Hello World!");
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
