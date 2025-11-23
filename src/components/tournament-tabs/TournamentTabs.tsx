import texts from '../../i18n/texts';
import './TournamentTabs.css';

interface TournamentTabsProps {
  activeTab: 'classification' | 'matches';
  onTabChange: (tab: 'classification' | 'matches') => void;
}

export const TournamentTabs = ({
  activeTab,
  onTabChange,
}: TournamentTabsProps) => {
  return (
    <div className="tournament-tabs">
      <button
        className={`tab ${activeTab === 'classification' ? 'active' : ''}`}
        onClick={() => onTabChange('classification')}
      >
        {texts.tournaments.tabs.classification}
      </button>
      <button
        className={`tab ${activeTab === 'matches' ? 'active' : ''}`}
        onClick={() => onTabChange('matches')}
      >
        {texts.tournaments.tabs.matches}
      </button>
    </div>
  );
};
