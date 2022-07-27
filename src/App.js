import "./App.css";
import { Component } from "react";

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
        <input
          className="search-box"
          type="search"
          placeholder="search user"
          onChange={search}
        />
        {filteredUsers?.map((user) => (
          <h1 key={user.id}>{user.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
