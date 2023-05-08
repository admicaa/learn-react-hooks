import { useState } from "react";

const UseStateObject = () => {
  const [user, setUser] = useState({
    name: "Peter",
    age: 24,
    hope: "Read Books",
  });
  const showJohn = () => {
    setUser({
      name: "John",
      age: 28,
      hope: "Scream At The Computer",
    });
  };
  return (
    <>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h4>Enjoys To: {user.hope}</h4>
      <button className="btn" onClick={showJohn}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
