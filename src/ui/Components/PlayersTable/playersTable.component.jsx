import { Link } from "react-router-dom";
import "./playersTable.style.css";

export function PlayersTable({ players }) {
  return (
    <>
      <h2>Elenco:</h2>
      <table className="player-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>País</th>
            <th>Posição</th>
          </tr>
        </thead>
        <tbody>
          {players?.map((player) => (
            <tr
              key={player.id}
              className="player-row"
              //onClick={() => handleRowClick(player.id)}
            >
              <td>
                <Link to={`/player/${player.id}`} className="player-link">
                  {player.id}
                </Link>
              </td>
              <td>
                {
                  <Link to={`/player/${player.id}`} className="player-link">
                    {player.playerName}
                  </Link>
                }
              </td>
              <td>
                <Link to={`/player/${player.id}`} className="player-link">
                  {player.country}
                </Link>
              </td>
              <td>
                <Link to={`/player/${player.id}`} className="player-link">
                  {player.position}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
