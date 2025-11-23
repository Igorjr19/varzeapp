import {
  faCalendar,
  faLocationDot,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type Game } from '../../api/games.mock';
import texts from '../../i18n/texts';
import './GameCard.css';

interface GameCardProps {
  game: Game;
  onClick: (game: Game) => void;
}

export const GameCard = ({ game, onClick }: GameCardProps) => {
  const getStatusColor = () => {
    if (game.status === 'confirmed') return 'status-confirmed';
    if (game.status === 'completed') return 'status-completed';
    return 'status-pending';
  };

  const getStatusText = () => {
    if (game.status === 'confirmed') return texts.games.status.confirmed;
    if (game.status === 'completed') return texts.games.status.completed;
    return texts.games.status.pending;
  };

  return (
    <div className="game-card" onClick={() => onClick(game)}>
      <div className={`game-status ${getStatusColor()}`}>{getStatusText()}</div>

      <div className="game-info">
        <div className="info-row">
          <FontAwesomeIcon icon={faCalendar} className="info-icon" />
          <span>
            {game.date}, {game.time}
          </span>
        </div>

        <div className="info-row">
          <FontAwesomeIcon icon={faLocationDot} className="info-icon" />
          <span>{game.location}</span>
        </div>

        <div className="info-row field-info">
          <span>{game.field}</span>
        </div>

        <div className="info-row confirmation">
          <FontAwesomeIcon icon={faUsers} className="info-icon" />
          <span className="confirmation-text">
            {game.confirmed}/{game.total} {texts.games.confirmed}
          </span>
        </div>
      </div>
    </div>
  );
};
