import {
  faCalendarDays,
  faChartLine,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import texts from '../../i18n/texts';
import './Home.css';

export const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="logo">
          <img
            src="/public/pwa-192x192.svg"
            alt="VarzeApp Logo"
            className="logo-image"
          />
        </div>
        <h2 className="app-subtitle">{texts.home.subtitle}</h2>

        <div className="feature-list">
          <div className="feature-item">
            <FontAwesomeIcon icon={faTrophy} className="feature-icon" />
            <p>{texts.home.features.manageTournaments}</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faCalendarDays} className="feature-icon" />
            <p>{texts.home.features.manageMatches}</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faChartLine} className="feature-icon" />
            <p>{texts.home.features.trackStats}</p>
          </div>
        </div>

        <button className="login-button" onClick={handleLogin}>
          {texts.home.loginButton}
        </button>

        <p className="welcome-text">{texts.home.welcomeText}</p>
      </div>
    </div>
  );
};
