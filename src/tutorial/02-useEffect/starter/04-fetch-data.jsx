import { useEffect, useState } from "react";
import UsersList from "./04-users-list";
import SingleUser from "./04-single-user";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  const [isError, setIsError] = useState(false);
  const fetchUsers = async () => {
    setUsers([]);

    const response = await fetch(`${url}?per_page=${perPage}&since=${page}`);
    if (response.ok) {
      const data = await response.json();

      setUsers(data);
    } else {
      console.log("here");
      setIsError(true);
    }
    console.log(users);
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
  const showSingleUser = (user) => {
    setCurrentUser(user);
  };
  useEffect(() => {
    fetchUsers();
  }, [perPage, page]);

  if (isError) {
    return <h1>Something went wrong</h1>;
  }
  console.log({ users });
  return (
    <>
      {currentUser && (
        <SingleUser currentUser={currentUser} showSingleUser={showSingleUser} />
      )}
      <UsersList
        showSingleUser={showSingleUser}
        prevPage={prevPage}
        nextPage={nextPage}
        users={users}
      />
    </>
  );
};
export default FetchData;
