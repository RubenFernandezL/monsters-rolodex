import Card from "./components/card.component";
import "./card-list.css";

const CardListContainer = ({ users }) => (
  <div className="card-list">
    {users?.map((user) => (
      <Card key={user.id} user={user}></Card>
    ))}
  </div>
);
export default CardListContainer;
