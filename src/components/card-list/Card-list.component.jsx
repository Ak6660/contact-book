import { Component } from "react";

export default class CardList extends Component {
  render() {
    const { users } = this.props;
    return (
      <ul className="cardList">
        {users.map((user) => (
          <li className="cardItem" key={user.id}>
            <img
              alt="monster"
              src={`https://i.pravatar.cc/300?img=${user.id}`}
            />
            <h2>{user.firstName + " " + user.lastName}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </li>
        ))}
      </ul>
    );
  }
}
