import React, { Component } from "react";
import Card from "./components/card.component";
import "./card-list.css";

export class CardListContainer extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="card-list">
        {users?.map((user) => (
          <Card key={user.id} user={user}></Card>
        ))}
      </div>
    );
  }
}

export default CardListContainer;
