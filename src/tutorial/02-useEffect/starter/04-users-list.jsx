const UsersList = ({ users, prevPage, nextPage, showSingleUser }) => {
  return (
    <section className="users-list">
      <h3>Github Users</h3>
      {users.length ? (
        <>
          <ul className="users">
            {users.map((user) => (
              <li key={user.id} onClick={() => showSingleUser(user)}>
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
export default UsersList;
