import { Fragment, useState, useEffect } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "max" },
  { id: "u2", name: "manual" },
  { id: "u3", name: "julie" },
];

const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <input type="search" onChange={searchChangeHandler} />
      <Users users={filteredUsers} />
    </Fragment>
  );
};

export default UserFinder;
