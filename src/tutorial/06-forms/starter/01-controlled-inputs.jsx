import { useEffect, useMemo, useState } from "react";

const ControlledInputs = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const changeUser = (e) => {
    const newUser = {
      ...user,
      [e.target.getAttribute("id")]: e.target.value,
    };

    setUser(newUser);
  };
  return (
    <form className="form">
      <h4>controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          value={user.name}
          onChange={changeUser}
          type="text"
          className="form-input"
          id="name"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          value={user.email}
          onChange={changeUser}
          type="email"
          className="form-input"
          id="email"
        />
      </div>
      <Button />
    </form>
  );
};
export default ControlledInputs;

function Button({}) {
  return (
    <button type="submit" className="btn btn-block">
      submit
    </button>
  );
}
