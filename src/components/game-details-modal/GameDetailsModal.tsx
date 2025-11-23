import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { type Game } from '../../api/games.mock';
import texts from '../../i18n/texts';
import { GamePaymentTab } from '../game-payment-tab/GamePaymentTab';
import { GameStatsTab } from '../game-stats-tab/GameStatsTab';
import { GameSummaryTab } from '../game-summary-tab/GameSummaryTab';
import './GameDetailsModal.css';

interface GameDetailsModalProps {
  game: Game;
  onClose: () => void;
}

type TabType = 'summary' | 'stats' | 'payment';

export const GameDetailsModal = ({ game, onClose }: GameDetailsModalProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('summary');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{texts.games.modal.title}</h2>
          <button className="close-button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="modal-tabs">
          <button
            className={`tab-button ${activeTab === 'summary' ? 'active' : ''}`}
            onClick={() => setActiveTab('summary')}
          >
            {texts.games.tabs.summary}
          </button>
          <button
            className={`tab-button ${activeTab === 'stats' ? 'active' : ''}`}
            onClick={() => setActiveTab('stats')}
          >
            {texts.games.tabs.stats}
          </button>
          <button
            className={`tab-button ${activeTab === 'payment' ? 'active' : ''}`}
            onClick={() => setActiveTab('payment')}
          >
            {texts.games.tabs.payment}
          </button>
        </div>

        <div className="modal-body">
          {activeTab === 'summary' && <GameSummaryTab game={game} />}
          {activeTab === 'stats' && <GameStatsTab game={game} />}
          {activeTab === 'payment' && <GamePaymentTab game={game} />}
        </div>
      </div>
    </div>
  );
};
