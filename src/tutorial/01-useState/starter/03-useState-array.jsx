import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [users, setUsers] = useState(data);
  const removeById = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const removeAll = () => {
    setUsers([]);
  };
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <button onClick={() => removeById(user.id)}>Remove</button>
        </div>
      ))}
      <button className="btn" onClick={removeAll}>
        Clear All
      </button>
    </>
  );
};

export default UseStateArray;
