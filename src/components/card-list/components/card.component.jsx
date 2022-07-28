import "./card.css";

const Card = ({ user }) => {
  const { name, id, email } = user;
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
};

export default Card;
