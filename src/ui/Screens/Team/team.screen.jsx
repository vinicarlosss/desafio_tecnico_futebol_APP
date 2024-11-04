import "./team.style.css";
import { useParams } from "react-router-dom";
import { Header, PlayersTable } from "../../Components/index";
import { useEffect, useState } from "react";
import { getTeam } from "../../../api/index";

export function Team() {
  const { teamId } = useParams();
  const [team, setTeam] = useState({});
  async function fetchTeam() {
    try {
      const response = await getTeam({ teamId: teamId });
      setTeam(response.data);
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    fetchTeam();
  }, []);
  return (
    <>
      <Header optionSelected="none"/>
      {console.log(team)}
      <div>
        <h2>Informações do Time</h2>
        <p>
          <strong>Nome:</strong> {team.teamName}
        </p>
        <p>
          <strong>Posição na tabela:</strong> {team.position}
        </p>
        <p>
          <strong>Vitórias:</strong> {team.win}
        </p>
        <p>
          <strong>Empates:</strong> {team.draw}
        </p>
        <p>
          <strong>Derrotas:</strong> {team.loss}
        </p>
        <p>
          <strong>Gols a favor:</strong> {team.goalsFor}
        </p>
        <p>
          <strong>Gols contra:</strong> {team.goalsAgainst}
        </p>
        <p>
          <strong>Saldo de gols:</strong> {team.goalsFor - team.goalsAgainst}
        </p>
      </div>
      <PlayersTable players={team.players} />
    </>
  );
}
