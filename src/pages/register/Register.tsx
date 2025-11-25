import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../api/register.mock';
import texts from '../../i18n/texts';
import './Register.css';

export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    try {
      await register(email, username, password);
      navigate('/torneios');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <div className="register-header">
          <div className="logo-container">
            <div className="logo-circle">
              <FontAwesomeIcon icon={faFutbol} className="register-icon" />
            </div>
            <h1 className="app-title">{texts.app.name}</h1>
          </div>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={texts.register.form.email.placeholder}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={texts.register.form.username.placeholder}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={texts.register.form.password.placeholder}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={texts.register.form.confirmPassword.placeholder}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            {texts.register.form.submitButton}
          </button>
        </form>

        <div className="register-footer">
          <p className="login-text">
            {texts.register.footer.loginText}{' '}
            <button onClick={handleLoginClick} className="login-link">
              {texts.register.footer.loginLink}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
