import { Component } from "react";
import "./card.css";

export class Card extends Component {
  render() {
    const { name, id, email } = this.props.user;
    return (
      <div className="card">
        <img
          alt={`user ${name}`}
          src={`https://robohash.org/${id}?set=1&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
