import { faArrowLeft, faFutbol } from '@fortawesome/free-solid-svg-icons';
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

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <button className="back-button" onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>{texts.login.backButton}</span>
        </button>

        <div className="login-header">
          <FontAwesomeIcon icon={faFutbol} className="login-icon" />
          <h1>{texts.login.title}</h1>
          <p>{texts.login.subtitle}</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="email">{texts.login.form.email.label}</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={texts.login.form.email.placeholder}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">{texts.login.form.password.label}</label>
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
            <a href="#" className="signup-link">
              {texts.login.footer.signupLink}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
