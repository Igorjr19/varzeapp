import { useEffect, useState } from 'react';
import { getGames, type Game } from '../../api/games.mock';
import { BottomNav } from '../../components/bottom-nav/BottomNav';
import { GameCard } from '../../components/game-card/GameCard';
import { GameDetailsModal } from '../../components/game-details-modal/GameDetailsModal';
import './Games.css';

export const Games = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGames = async () => {
      setLoading(true);
      const data = await getGames();
      setGames(data);
      setLoading(false);
    };
    loadGames();
  }, []);

  if (loading) {
    return (
      <div className="games-container">
        <div className="games-content">
          <p>Carregando...</p>
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="games-container">
      <div className="games-content">
        {games.map((game) => (
          <GameCard key={game.id} game={game} onClick={setSelectedGame} />
        ))}
      </div>
      <BottomNav />
      {selectedGame && (
        <GameDetailsModal
          game={selectedGame}
          onClose={() => setSelectedGame(null)}
        />
      )}
    </div>
  );
};
