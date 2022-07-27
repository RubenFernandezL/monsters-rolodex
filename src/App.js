import "./App.css";
import { Component } from "react";
import Card from "./components/card/card.component";
import SearchBar from "./components/forms/search-bar/search-bar.component";
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
        <SearchBar search={search}></SearchBar>
        {filteredUsers?.map((user) => (
          <Card key={user.id} user={user}></Card>
        ))}
      </div>
    );
  }
}

export default App;
