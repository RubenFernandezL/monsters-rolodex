import { Component } from "react";

export class Card extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>{user.name}</h1>
        <div>
          <p>{user.email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
