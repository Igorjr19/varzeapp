import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { type Player, type PlayerAttributes } from '../../api/games.mock';
import texts from '../../i18n/texts';
import './PlayerRatingModal.css';

interface PlayerRatingModalProps {
  player: Player;
  teamName: string;
  onClose: () => void;
  onSave: (playerId: number, attributes: PlayerAttributes) => void;
}

export const PlayerRatingModal = ({
  player,
  teamName,
  onClose,
  onSave,
}: PlayerRatingModalProps) => {
  const [attributes, setAttributes] = useState<PlayerAttributes>(
    player.attributes || {
      pace: 50,
      shooting: 50,
      passing: 50,
      dribbling: 50,
      defending: 50,
      physical: 50,
    }
  );

  const handleAttributeChange = (
    attribute: keyof PlayerAttributes,
    value: number
  ) => {
    setAttributes((prev) => ({
      ...prev,
      [attribute]: value,
    }));
  };

  const handleSave = () => {
    onSave(player.id, attributes);
    onClose();
  };

  const attributeLabels: Record<keyof PlayerAttributes, string> = {
    pace: texts.profile.attributes.pace,
    shooting: texts.profile.attributes.shooting,
    passing: texts.profile.attributes.passing,
    dribbling: texts.profile.attributes.dribbling,
    defending: texts.profile.attributes.defending,
    physical: texts.profile.attributes.physical,
  };

  return (
    <div className="player-rating-overlay" onClick={onClose}>
      <div
        className="player-rating-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="player-rating-header">
          <h3>{texts.games.playerRating.title}</h3>
          <button className="close-button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="player-rating-body">
          <div className="player-info-card">
            <div className="player-avatar-large">{player.avatar}</div>
            <div className="player-details">
              <div className="player-name-large">{player.name}</div>
              <div className="player-team">{teamName}</div>
            </div>
          </div>

          <div className="rating-description">
            {texts.games.playerRating.description}
          </div>

          <div className="attributes-rating">
            {(Object.keys(attributes) as Array<keyof PlayerAttributes>).map(
              (attr) => (
                <div key={attr} className="attribute-rating">
                  <div className="attribute-rating-header">
                    <label>{attributeLabels[attr]}</label>
                    <span className="attribute-rating-value">
                      {attributes[attr]}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={attributes[attr]}
                    onChange={(e) =>
                      handleAttributeChange(attr, parseInt(e.target.value))
                    }
                    className="attribute-slider"
                  />
                  <div className="slider-labels">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="overall-rating">
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <span className="overall-label">
              {texts.games.playerRating.overall}
            </span>
            <span className="overall-value">
              {Math.round(
                Object.values(attributes).reduce((sum, val) => sum + val, 0) / 6
              )}
            </span>
          </div>
        </div>

        <div className="player-rating-footer">
          <button className="save-button" onClick={handleSave}>
            {texts.games.playerRating.save}
          </button>
        </div>
      </div>
    </div>
  );
};
