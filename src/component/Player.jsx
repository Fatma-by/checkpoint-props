import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import playersData from './players';




function Player(props) {
  const {
    name,
    team,
    nationality,
    jerseyNumber,
    age,
    image,
  } = props;
  
  return (
    <>
    <div id="container">
      <Card id="card"style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Team:{team}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Nationality:{nationality}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
           JerseyNumber: {jerseyNumber}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Age:{age}</Card.Subtitle>
          <Card.Subtitle id ="img" className="mb-2 text-muted">{image}</Card.Subtitle>
        </Card.Body>
      </Card>
      </div>
    </>
  );
}
Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown Nationality',
  jerseyNumber: 'N/A',
  age: 'N/A',
  image: 'default-image-url.jpg', // Provide a default image URL
};
export default Player;
