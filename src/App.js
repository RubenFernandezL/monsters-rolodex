import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/forms/search-bar/search-bar.component";
import CardListContainer from "./components/card-list/card-list.container";

const App = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const search = (event) => {
    setQuery(event.target.value.toLocaleLowerCase());
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((apiUsers) => setUsers(apiUsers));
  });

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) => user.name.toLocaleLowerCase().includes(query))
    );
  }, [query, users]); //useEffect only executes the callback code if any of the values in the second param has changed

  return (
    <div className="App">
      <SearchBar
        search={search}
        placeholder="Search users"
        className="monsters"
      ></SearchBar>
      <CardListContainer users={filteredUsers} />
    </div>
  );
};

export default App;
