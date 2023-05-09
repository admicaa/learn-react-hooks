import { useState } from "react";
import { data } from "../../../data";
const UserChallenge = () => {
  const [users, setUsers] = useState(data);
  const [name, setName] = useState("");
  const addUser = (e) => {
    e.preventDefault();

    if (!name) {
      return;
    }
    const newUsers = [
      ...users,
      {
        id: Math.random(),
        name: name,
      },
    ];
    setUsers(newUsers);
    setName("");
  };
  const removeUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  return (
    <div>
      <form className="form" onSubmit={addUser}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            id="name"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <UsersList users={users} removeUser={removeUser} />
    </div>
  );
};
export default UserChallenge;

function UsersList({ users, removeUser }) {
  return (
    <>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <button
            className="btn"
            onClick={() => {
              removeUser(user.id);
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
}
