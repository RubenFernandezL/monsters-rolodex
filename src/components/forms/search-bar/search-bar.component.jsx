import "./search-bar.css";

const SearchBar = ({ className, placeholder, search }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={search}
  />
);

export default SearchBar;
