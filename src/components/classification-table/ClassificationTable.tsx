import type { Classification } from '../../api/tournaments.mock';
import texts from '../../i18n/texts';
import './ClassificationTable.css';

interface ClassificationTableProps {
  classification: Classification[];
  tournamentName: string;
}

export const ClassificationTable = ({
  classification,
  tournamentName,
}: ClassificationTableProps) => {
  const getPositionColor = (position: number) => {
    if (position <= 2) return '#10b981'; // Verde para primeiros colocados
    if (position >= classification.length - 1) return '#ef4444'; // Vermelho para últimos
    return '#6b7280'; // Cinza para meio
  };

  return (
    <div className="classification-table">
      <div className="classification-header">
        <h3>
          {texts.tournaments.classification.title}: {tournamentName}
        </h3>
      </div>

      <div className="table-header">
        <div className="table-cell pos">
          {texts.tournaments.classification.position}
        </div>
        <div className="table-cell team"></div>
        <div className="table-cell stat">
          {texts.tournaments.classification.points}
        </div>
        <div className="table-cell stat">
          {texts.tournaments.classification.wins}
        </div>
        <div className="table-cell stat">
          {texts.tournaments.classification.draws}
        </div>
        <div className="table-cell stat">
          {texts.tournaments.classification.losses}
        </div>
      </div>

      {classification.map((item) => (
        <div key={item.teamId} className="table-row">
          <div className="table-cell pos">
            <div
              className="position-indicator"
              style={{ backgroundColor: getPositionColor(item.position) }}
            >
              {item.position}
            </div>
          </div>
          <div className="table-cell team">{item.teamName}</div>
          <div className="table-cell stat points">{item.points}</div>
          <div className="table-cell stat">{item.wins}</div>
          <div className="table-cell stat">{item.draws}</div>
          <div className="table-cell stat">{item.losses}</div>
        </div>
      ))}
    </div>
  );
};
