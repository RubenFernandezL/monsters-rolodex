import "./App.css";
import { Component } from "react";
import SearchBar from "./components/forms/search-bar/search-bar.component";
import CardListContainer from "./components/card-list/card-list.container";
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      query: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((apiUsers) =>
        this.setState(() => {
          return { users: apiUsers };
        })
      );
  }

  search = (event) => {
    const query = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { query };
    });
  };

  render() {
    const { users, query } = this.state;
    const { search } = this;

    const filteredUsers = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(query)
    );

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
  }
}

export default App;
