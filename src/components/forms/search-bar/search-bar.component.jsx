import { Component } from "react";
import "./search-bar.css";

export class SearchBar extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.search}
      />
    );
  }
}

export default SearchBar;
