import "./home.style.css";
import { Header, MatchesList } from "../../Components/index";
import { useEffect, useState } from "react";
import { getRanking, getAllMatches } from "../../../api/index";
import { Link } from "react-router-dom";

export function Home() {
  const [ranking, setRanking] = useState([]);
  const [matches, setMatches] = useState([]);

  async function fetchRanking() {
    try {
      const response = await getRanking();
      setRanking(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  async function fetchMatches() {
    try {
      const response = await getAllMatches();
      setMatches(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchRanking();
    fetchMatches();
  }, []);
  return (
    <>
      <Header optionSelected={""}/>
      <main className="home_main">
        <table className="ranking-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Jogos</th>
              <th>Vitórias</th>
              <th>Empates</th>
              <th>Derrotas</th>
              <th>Pontos</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((team, index) => (
              <tr key={team.id} className="ranking-row">
                <td>
                  <Link to={`/team/${team.id}`} className="ranking-link">
                    {index + 1}
                  </Link>
                </td>
                <td>
                  <Link to={`/team/${team.id}`} className="ranking-link">
                    {team.name}
                  </Link>
                </td>
                <td>
                  <Link to={`/team/${team.id}`} className="ranking-link">
                    {team.matchesPlayed}
                  </Link>
                </td>
                <td>
                  <Link to={`/team/${team.id}`} className="ranking-link">
                    {team.win}
                  </Link>
                </td>
                <td>
                  <Link to={`/team/${team.id}`} className="ranking-link">
                    {team.draw}
                  </Link>
                </td>
                <td>
                  <Link to={`/team/${team.id}`} className="ranking-link">
                    {team.loss}
                  </Link>
                </td>
                <td>
                  <Link to={`/team/${team.id}`} className="ranking-link">
                    {team.points}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <MatchesList matches={matches} />
      </main>
    </>
  );
}
