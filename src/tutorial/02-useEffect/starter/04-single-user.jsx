import { useEffect, useState } from "react";

const SingleUser = ({ currentUser, showSingleUser }) => {
  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    setUser(null);
    const url = `https://api.github.com/users/${currentUser.login}`;

    var response = await fetch(url);
    var data = await response.json();
    console.log({ data });
    setTimeout(() => {
      setUser(data);
    }, 10);
  };
  useEffect(() => {
    fetchUser();
  }, [currentUser]);
  return (
    <section className="single-user-show">
      {user ? (
        <div>
          <img
            style={{ width: "150px", borderRadius: "25px" }}
            src={user.avatar_url}
            alt={user.name}
          />
          <h2>{user.name}</h2>
          <h4>works at {user.company}</h4>
          <p>{user.bio}</p>
          <button
            className="btn btn-block"
            onClick={() => showSingleUser(null)}
          >
            Go Back
          </button>
        </div>
      ) : (
        <div className="loading"></div>
      )}
    </section>
  );
};
export default SingleUser;
