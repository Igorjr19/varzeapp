import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type Game } from '../../api/games.mock';
import texts from '../../i18n/texts';
import './GameSummaryTab.css';

interface GameSummaryTabProps {
  game: Game;
}

export const GameSummaryTab = ({ game }: GameSummaryTabProps) => {
  if (!game.team1 || !game.team2) {
    return (
      <div className="summary-empty">
        <p>{texts.games.summary.noData}</p>
      </div>
    );
  }

  return (
    <div className="summary-tab">
      <div className="match-result">
        <div className="team">
          <div className="team-logo">{game.team1.logo}</div>
          <div className="team-name">{game.team1.name}</div>
          <div className="team-score">{game.team1.score}</div>
        </div>

        <div className="vs-divider">
          <FontAwesomeIcon icon={faFutbol} />
        </div>

        <div className="team">
          <div className="team-logo">{game.team2.logo}</div>
          <div className="team-name">{game.team2.name}</div>
          <div className="team-score">{game.team2.score}</div>
        </div>
      </div>

      <div className="players-section">
        <h4>{texts.games.summary.scorers}</h4>

        <div className="team-players">
          <div className="team-header green">
            <span className="team-logo-small">{game.team1.logo}</span>
            <span>{game.team1.name}</span>
          </div>
          {game.team1.players.map((player) => (
            <div key={player.id} className="player-row">
              <span className="player-avatar">{player.avatar}</span>
              <span className="player-name">{player.name}</span>
              {player.goals && player.goals > 0 && (
                <span className="player-goals">
                  <FontAwesomeIcon icon={faFutbol} className="goal-icon" />
                  {player.goals}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="team-players">
          <div className="team-header gray">
            <span className="team-logo-small">{game.team2.logo}</span>
            <span>{game.team2.name}</span>
          </div>
          {game.team2.players.map((player) => (
            <div key={player.id} className="player-row">
              <span className="player-avatar">{player.avatar}</span>
              <span className="player-name">{player.name}</span>
              {player.goals && player.goals > 0 && (
                <span className="player-goals">
                  <FontAwesomeIcon icon={faFutbol} className="goal-icon" />
                  {player.goals}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
