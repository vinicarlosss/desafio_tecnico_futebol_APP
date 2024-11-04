import "./player.style.css";
import { Header } from "../../Components/index";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPlayer } from "../../../api";

export function Player() {

    const { playerId } = useParams();
    const [ player, setPlayer ] = useState();
    async function fetchPlayer(){
        try{
            const response = await getPlayer({ playerId: playerId});
            setPlayer(response.data);
        }catch( e ){
            console.error(e);
        }
    }

    useEffect(()=>{
        fetchPlayer();
    }, [])

    if (!player) return <div>Carregando...</div>;

    return (
      <>
        <Header />
        <div className="player-card">
          <h2>{player.playerName}</h2>
          <p>Time: {player.teamName} - País: {player.country}</p>
          <p>{player.position}</p>
          <div className="stats-grid">
            <div className="stat-item">
              <span>Idade:</span>
              <div className="stat-value">{player.age}</div>
            </div>
            <div className="stat-item">
              <span>Partidas Jogadas:</span>
              <div className="stat-value">{player.matchesPlayed}</div>
            </div>
            <div className="stat-item">
              <span>Iniciadas:</span>
              <div className="stat-value">{player.started}</div>
            </div>
            <div className="stat-item">
              <span>Minutos:</span>
              <div className="stat-value">{player.minutes}</div>
            </div>
            <div className="stat-item">
              <span>Gols:</span>
              <div className="stat-value">{player.goals}</div>
            </div>
            <div className="stat-item">
              <span>Assistências:</span>
              <div className="stat-value">{player.assist}</div>
            </div>
            <div className="stat-item">
              <span>Pênaltis Convertidos em gol:</span>
              <div className="stat-value">{player.penaltysMade}</div>
            </div>
            <div className="stat-item">
              <span>Pênaltis Tentados:</span>
              <div className="stat-value">{player.penaltysAttempted}</div>
            </div>
            <div className="stat-item">
              <span>Cartões Amarelos:</span>
              <div className="stat-value">{player.yellowCard}</div>
            </div>
            <div className="stat-item">
              <span>Cartões Vermelhos:</span>
              <div className="stat-value">{player.redCard}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
