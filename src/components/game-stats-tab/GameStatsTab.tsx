import { type Game } from '../../api/games.mock';
import texts from '../../i18n/texts';
import './GameStatsTab.css';

interface GameStatsTabProps {
  game: Game;
}

export const GameStatsTab = ({ game }: GameStatsTabProps) => {
  if (!game.stats || !game.team1 || !game.team2) {
    return (
      <div className="stats-empty">
        <p>{texts.games.stats.noData}</p>
      </div>
    );
  }

  const { stats, team1, team2 } = game;

  return (
    <div className="stats-tab">
      <div className="stat-row">
        <div className="stat-value left">{stats.team1Possession}%</div>
        <div className="stat-label">{texts.games.stats.possession}</div>
        <div className="stat-value right">{stats.team2Possession}%</div>
      </div>
      <div className="stat-bar-container">
        <div
          className="stat-bar left"
          style={{ width: `${stats.team1Possession}%` }}
        />
        <div
          className="stat-bar right"
          style={{ width: `${stats.team2Possession}%` }}
        />
      </div>

      <div className="stat-row">
        <div className="stat-value left">{stats.team1Shots}</div>
        <div className="stat-label">{texts.games.stats.shots}</div>
        <div className="stat-value right">{stats.team2Shots}</div>
      </div>
      <div className="stat-bar-container">
        <div
          className="stat-bar left"
          style={{
            width: `${(stats.team1Shots / (stats.team1Shots + stats.team2Shots)) * 100}%`,
          }}
        />
        <div
          className="stat-bar right"
          style={{
            width: `${(stats.team2Shots / (stats.team1Shots + stats.team2Shots)) * 100}%`,
          }}
        />
      </div>

      <div className="stat-row">
        <div className="stat-value left">{stats.team1ShotsOnTarget}</div>
        <div className="stat-label">{texts.games.stats.shotsOnTarget}</div>
        <div className="stat-value right">{stats.team2ShotsOnTarget}</div>
      </div>
      <div className="stat-bar-container">
        <div
          className="stat-bar left"
          style={{
            width: `${(stats.team1ShotsOnTarget / (stats.team1ShotsOnTarget + stats.team2ShotsOnTarget)) * 100}%`,
          }}
        />
        <div
          className="stat-bar right"
          style={{
            width: `${(stats.team2ShotsOnTarget / (stats.team1ShotsOnTarget + stats.team2ShotsOnTarget)) * 100}%`,
          }}
        />
      </div>

      <div className="stat-row">
        <div className="stat-value left">{stats.team1Fouls}</div>
        <div className="stat-label">{texts.games.stats.fouls}</div>
        <div className="stat-value right">{stats.team2Fouls}</div>
      </div>
      <div className="stat-bar-container">
        <div
          className="stat-bar left"
          style={{
            width: `${(stats.team1Fouls / (stats.team1Fouls + stats.team2Fouls)) * 100}%`,
          }}
        />
        <div
          className="stat-bar right"
          style={{
            width: `${(stats.team2Fouls / (stats.team1Fouls + stats.team2Fouls)) * 100}%`,
          }}
        />
      </div>

      <div className="teams-legend">
        <div className="legend-item">
          <div className="legend-color green" />
          <span>{team1.name}</span>
        </div>
        <div className="legend-item">
          <div className="legend-color gray" />
          <span>{team2.name}</span>
        </div>
      </div>
    </div>
  );
};
