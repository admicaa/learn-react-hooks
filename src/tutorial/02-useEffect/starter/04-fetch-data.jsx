import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const fetchUsers = async () => {
    setUsers([]);
    const response = await fetch(`${url}?per_page=${perPage}&since=${page}`);
    const data = await response.json();

    setTimeout(() => {
      setUsers(data);
    }, 3000);
  };

  const prevPage = () => {
    var since = 0;
    since = users[0].id - perPage;
    since = since > 0 ? since : 0;
    setPage(since);
  };

  const nextPage = () => {
    var since = 0;
    since = users[users.length - 1].id;
    setPage(since);
  };

  useEffect(() => {
    fetchUsers();
  }, [perPage, page]);
  return (
    <section>
      <h3>Github Users</h3>
      {users.length ? (
        <>
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
          <div>
            <button className="btn" onClick={prevPage}>
              Prev Page
            </button>
            <button className="btn" onClick={nextPage}>
              Nex Page
            </button>
          </div>
        </>
      ) : (
        <div className="loading"></div>
      )}
    </section>
  );
};
export default FetchData;
