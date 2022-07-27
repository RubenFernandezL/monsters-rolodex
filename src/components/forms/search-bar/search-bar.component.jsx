import { Component } from "react";

export class SearchBar extends Component {
  render() {
    return (
      <input
        // className="search-box"
        type="search"
        // placeholder="search user"
        onChange={this.props.search}
      />
    );
  }
}

export default SearchBar;
