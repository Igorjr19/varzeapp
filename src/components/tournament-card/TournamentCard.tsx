import { faTrophy, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Tournament } from '../../api/tournaments.mock';
import './TournamentCard.css';

interface TournamentCardProps {
  tournament: Tournament;
  isSelected: boolean;
  onClick: () => void;
}

export const TournamentCard = ({
  tournament,
  isSelected,
  onClick,
}: TournamentCardProps) => {
  const getStatusColor = (status: Tournament['status']) => {
    switch (status) {
      case 'active':
        return '#10b981';
      case 'finished':
        return '#ef4444';
      case 'upcoming':
        return '#f59e0b';
      default:
        return '#6b7280';
    }
  };

  return (
    <div
      className={`tournament-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="tournament-card-header">
        <FontAwesomeIcon icon={faTrophy} className="tournament-icon" />
        <div
          className="tournament-status"
          style={{ backgroundColor: getStatusColor(tournament.status) }}
        />
      </div>
      <h3 className="tournament-name">
        {tournament.name} {tournament.year}
      </h3>
      <div className="tournament-info">
        <FontAwesomeIcon icon={faUsers} />
        <span>{tournament.teams} Times</span>
      </div>
    </div>
  );
};
