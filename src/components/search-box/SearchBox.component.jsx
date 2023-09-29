import { Component } from "react";

export default class SearchBox extends Component {
  render() {
    const { handleSearch } = this.props;
    return (
      <input
        className="search-box"
        type="search"
        placeholder="search users"
        onChange={handleSearch}
      />
    );
  }
}
