import { useEffect, useState } from 'react';
import { getTournaments, type Tournament } from '../../api/tournaments.mock';
import { BottomNav } from '../../components/bottom-nav/BottomNav';
import { ClassificationTable } from '../../components/classification-table/ClassificationTable';
import { TournamentCard } from '../../components/tournament-card/TournamentCard';
import { UpcomingMatches } from '../../components/upcoming-matches/UpcomingMatches';
import './Tournaments.css';

export const Tournaments = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [selectedTournament, setSelectedTournament] =
    useState<Tournament | null>(null);

  useEffect(() => {
    const loadTournaments = async () => {
      const data = await getTournaments();
      setTournaments(data);
      if (data.length > 0) {
        setSelectedTournament(data[0]);
      }
    };
    loadTournaments();
  }, []);

  return (
    <div className="tournaments-container">
      <div className="tournaments-content">
        {/* Carrossel de torneios */}
        <div className="tournaments-carousel">
          {tournaments.map((tournament) => (
            <TournamentCard
              key={tournament.id}
              tournament={tournament}
              isSelected={selectedTournament?.id === tournament.id}
              onClick={() => setSelectedTournament(tournament)}
            />
          ))}
        </div>

        {/* Cards um abaixo do outro */}
        {selectedTournament && (
          <div className="tournament-details">
            <ClassificationTable
              classification={selectedTournament.classification}
              tournamentName={`${selectedTournament.name} ${selectedTournament.year}`}
            />
            <UpcomingMatches matches={selectedTournament.upcomingMatches} />
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
};
