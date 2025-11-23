import { faFutbol, faTrophy, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate } from 'react-router-dom';
import texts from '../../i18n/texts';
import './BottomNav.css';

export const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/jogos', icon: faFutbol, label: texts.bottomNav.games },
    { path: '/torneios', icon: faTrophy, label: texts.bottomNav.tournaments },
    { path: '/perfil', icon: faUser, label: texts.bottomNav.profile },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.path}
          className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          onClick={() => navigate(item.path)}
        >
          <FontAwesomeIcon icon={item.icon} className="nav-icon" />
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};
