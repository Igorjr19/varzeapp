import type { Match } from '../../api/tournaments.mock';
import texts from '../../i18n/texts';
import './UpcomingMatches.css';

interface UpcomingMatchesProps {
  matches: Match[];
}

export const UpcomingMatches = ({ matches }: UpcomingMatchesProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
    });
  };

  if (matches.length === 0) {
    return (
      <div className="upcoming-matches">
        <div className="no-matches">
          {texts.tournaments.upcomingMatches.noMatches}
        </div>
      </div>
    );
  }

  return (
    <div className="upcoming-matches">
      <h3 className="matches-title">
        {texts.tournaments.upcomingMatches.title}
      </h3>
      {matches.map((match) => (
        <div key={match.id} className="match-card">
          <div className="match-date">
            {formatDate(match.date)} • {match.time}
          </div>
          <div className="match-teams">
            <div className="team home-team">
              <span className="team-name">{match.homeTeam.name}</span>
            </div>
            <div className="match-vs">VS</div>
            <div className="team away-team">
              <span className="team-name">{match.awayTeam.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
