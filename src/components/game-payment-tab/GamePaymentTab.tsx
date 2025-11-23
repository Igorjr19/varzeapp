import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type Game } from '../../api/games.mock';
import texts from '../../i18n/texts';
import './GamePaymentTab.css';

interface GamePaymentTabProps {
  game: Game;
}

export const GamePaymentTab = ({ game }: GamePaymentTabProps) => {
  if (!game.payment) {
    return (
      <div className="payment-empty">
        <p>{texts.games.payment.noData}</p>
      </div>
    );
  }

  const { payment } = game;
  const totalPaid = payment.players.filter((p) => p.paid).length;
  const totalPlayers = payment.players.length;

  return (
    <div className="payment-tab">
      <div className="payment-summary">
        <div className="summary-item">
          <span className="summary-label">{texts.games.payment.total}</span>
          <span className="summary-value">
            R$ {payment.totalValue.toFixed(2)}
          </span>
        </div>
        <div className="summary-item">
          <span className="summary-label">
            {texts.games.payment.pricePerPlayer}
          </span>
          <span className="summary-value">
            R$ {payment.pricePerPlayer.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="payment-progress">
        <div className="progress-text">
          {texts.games.payment.paid}: {totalPaid}/{totalPlayers}
        </div>
        <div className="progress-bar-container">
          <div
            className="progress-bar-fill"
            style={{ width: `${(totalPaid / totalPlayers) * 100}%` }}
          />
        </div>
      </div>

      <div className="payment-list">
        <h4>{texts.games.payment.playersList}</h4>
        {payment.players.map((player, index) => (
          <div
            key={index}
            className={`payment-item ${player.paid ? 'paid' : 'pending'}`}
          >
            <div className="payment-player">
              <span className="player-name">{player.name}</span>
              <span className="player-value">R$ {player.value.toFixed(2)}</span>
            </div>
            <div
              className={`payment-status ${player.paid ? 'paid' : 'pending'}`}
            >
              <FontAwesomeIcon icon={player.paid ? faCheck : faXmark} />
            </div>
          </div>
        ))}
      </div>

      <button className="confirm-payment-button">
        {texts.games.payment.confirmButton}
      </button>
    </div>
  );
};
