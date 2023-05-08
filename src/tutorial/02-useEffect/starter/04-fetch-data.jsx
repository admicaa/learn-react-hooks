import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <section>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <h5>{user.login}</h5>
              <a href={user.html_url} target="_blank">
                Profile
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default FetchData;
