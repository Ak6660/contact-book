import { Component } from "react";
import "./styles.css";
import CardList from "./components/card-list/Card-list.component";
import SearchBox from "./components/search-box/SearchBox.component";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://dummyjson.com/users?skip=0&limit=70")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data.users });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  handleSearch = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState({ searchField });
  };

  render() {
    const { users, searchField } = this.state;
    const { handleSearch } = this;
    const filteredUsers = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(searchField) ||
        user.lastName.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <div>
          <h1 className="heading"> Contact Book</h1>
        </div>
        <SearchBox handleSearch={handleSearch} />
        {/* {filteredUsers.map((monster) => (
          <h3 key={monster.id}>{monster.name}</h3>
        ))} */}
        <CardList users={filteredUsers} />
      </div>
    );
  }
}
