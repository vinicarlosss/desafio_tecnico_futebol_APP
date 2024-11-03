import React, { useState, useEffect } from 'react';
import "./matchesList.style.css";

export function MatchesList({ matches }) {
    const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  
    useEffect(() => {
      const initialRoundIndex = matches.findIndex(
        round => round.matches.some(match => !match.result)
      );
      if (initialRoundIndex !== -1) {
        setCurrentRoundIndex(initialRoundIndex);
      }
    }, [matches]);
  
    const currentRound = matches[currentRoundIndex];
  
    const goToPreviousRound = () => {
      if (currentRoundIndex > 0) {
        setCurrentRoundIndex(currentRoundIndex - 1);
      }
    };
  
    const goToNextRound = () => {
      if (currentRoundIndex < matches.length - 1) {
        setCurrentRoundIndex(currentRoundIndex + 1);
      }
    };
  
    if (matches.length === 0 || !currentRound) {
      return <div>Carregando rodadas...</div>;
    }
  
    return (
      <div className="matches-list">
        <div className="round-header">
          <button onClick={goToPreviousRound} disabled={currentRoundIndex === 0}>
            &lt;
          </button>
          <h2>{currentRound.matchweek.replace("Matchweek", "Rodada")}</h2>
          <button onClick={goToNextRound} disabled={currentRoundIndex === matches.length - 1}>
            &gt;
          </button>
        </div>
        <ul className="matches">
          {currentRound.matches.map((match) => (
            <li key={match.id} className="match-item">
              <div className="match-date">
                <span>{new Date(match.date).toLocaleDateString()}</span>
              </div>
              <div className="match-details">
                <span>{match.team.teamName}</span>
                {match.result ? (
                  <span> {match.goalsFor} X {match.goalsAgainst} </span>
                ) : (
                  <span> X </span>
                )}
                <span>{match.opponentTeam.teamName}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
