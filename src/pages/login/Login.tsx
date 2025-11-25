import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/login.mock';
import texts from '../../i18n/texts';
import './Login.css';

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/torneios');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-header">
          <div className="logo-container">
            <div className="logo-circle">
              <FontAwesomeIcon icon={faFutbol} className="login-icon" />
            </div>
            <h1 className="app-title">{texts.app.name}</h1>
          </div>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={texts.login.form.email.placeholder}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={texts.login.form.password.placeholder}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            {texts.login.form.submitButton}
          </button>
        </form>

        <div className="login-footer">
          <a href="#" className="forgot-password">
            {texts.login.footer.forgotPassword}
          </a>
          <p className="signup-text">
            {texts.login.footer.signupText}{' '}
            <button
              onClick={() => navigate('/register')}
              className="signup-link"
            >
              {texts.login.footer.signupLink}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
