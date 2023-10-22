import Player from "./Player";
import playersData from './players';

function PlayerList() {
  return (
    
        <div>
        <h2>Players List</h2>
        {playersData.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
  );
}

export default PlayerList;


