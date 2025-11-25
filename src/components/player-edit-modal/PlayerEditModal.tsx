import {
  faMinus,
  faPlus,
  faStar,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { type Player, type PlayerAttributes } from '../../api/games.mock';
import texts from '../../i18n/texts';
import { PlayerRatingModal } from '../player-rating-modal/PlayerRatingModal';
import './PlayerEditModal.css';

interface PlayerEditModalProps {
  player: Player;
  teamName: string;
  onClose: () => void;
  onSave: (playerId: number, goals: number, assists: number) => void;
  onRate?: (playerId: number, attributes: PlayerAttributes) => void;
}

export const PlayerEditModal = ({
  player,
  teamName,
  onClose,
  onSave,
  onRate,
}: PlayerEditModalProps) => {
  const [goals, setGoals] = useState(player.goals || 0);
  const [assists, setAssists] = useState(player.assists || 0);
  const [showRatingModal, setShowRatingModal] = useState(false);

  const handleIncrement = (type: 'goals' | 'assists') => {
    if (type === 'goals') {
      setGoals((prev) => prev + 1);
    } else {
      setAssists((prev) => prev + 1);
    }
  };

  const handleDecrement = (type: 'goals' | 'assists') => {
    if (type === 'goals' && goals > 0) {
      setGoals((prev) => prev - 1);
    } else if (type === 'assists' && assists > 0) {
      setAssists((prev) => prev - 1);
    }
  };

  const handleSave = () => {
    onSave(player.id, goals, assists);
    onClose();
  };

  const handleRateClick = () => {
    setShowRatingModal(true);
  };

  const handleSaveRating = (playerId: number, attributes: PlayerAttributes) => {
    if (onRate) {
      onRate(playerId, attributes);
    }
    setShowRatingModal(false);
  };

  return (
    <div className="player-edit-overlay" onClick={onClose}>
      <div className="player-edit-content" onClick={(e) => e.stopPropagation()}>
        <div className="player-edit-header">
          <h3>{texts.games.playerEdit.title}</h3>
          <button className="close-button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="player-edit-body">
          <div className="player-info-card">
            <div className="player-avatar-large">{player.avatar}</div>
            <div className="player-details">
              <div className="player-name-large">{player.name}</div>
              <div className="player-team">{teamName}</div>
            </div>
          </div>

          <div className="stats-controls">
            <div className="stat-control">
              <label>{texts.games.playerEdit.goals}</label>
              <div className="control-row">
                <button
                  className="control-button"
                  onClick={() => handleDecrement('goals')}
                  disabled={goals === 0}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <div className="stat-value">{goals}</div>
                <button
                  className="control-button"
                  onClick={() => handleIncrement('goals')}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>

            <div className="stat-control">
              <label>{texts.games.playerEdit.assists}</label>
              <div className="control-row">
                <button
                  className="control-button"
                  onClick={() => handleDecrement('assists')}
                  disabled={assists === 0}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <div className="stat-value">{assists}</div>
                <button
                  className="control-button"
                  onClick={() => handleIncrement('assists')}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="player-edit-footer">
          {onRate && (
            <button className="rate-button" onClick={handleRateClick}>
              <FontAwesomeIcon icon={faStar} />
              {texts.games.playerEdit.rate}
            </button>
          )}
          <button className="save-button" onClick={handleSave}>
            {texts.games.playerEdit.save}
          </button>
        </div>
      </div>

      {showRatingModal && (
        <PlayerRatingModal
          player={player}
          teamName={teamName}
          onClose={() => setShowRatingModal(false)}
          onSave={handleSaveRating}
        />
      )}
    </div>
  );
};
