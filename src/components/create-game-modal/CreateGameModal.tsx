import React, { useState } from 'react';
import { texts } from '../../i18n/texts';
import './CreateGameModal.css';

interface CreateGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateGame: (gameData: GameFormData) => void;
}

export interface GameFormData {
  location: string;
  price: string;
  date: string;
  time: string;
  modality: string;
  players: string;
}

const CreateGameModal: React.FC<CreateGameModalProps> = ({
  isOpen,
  onClose,
  onCreateGame,
}) => {
  const [formData, setFormData] = useState<GameFormData>({
    location: '',
    price: '',
    date: '',
    time: '',
    modality: '',
    players: '',
  });

  if (!isOpen) return null;

  const formatCurrency = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    const amount = Number(numbers) / 100;
    return amount.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleInputChange = (
    field: keyof GameFormData,
    value: string
  ): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePriceChange = (value: string): void => {
    const numbers = value.replace(/\D/g, '');
    if (numbers === '') {
      setFormData((prev) => ({ ...prev, price: '' }));
      return;
    }
    const formatted = formatCurrency(numbers);
    setFormData((prev) => ({ ...prev, price: formatted }));
  };

  const handleSubmit = (): void => {
    onCreateGame(formData);
    setFormData({
      location: '',
      price: '',
      date: '',
      time: '',
      modality: '',
      players: '',
    });
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="create-game-modal-backdrop" onClick={handleBackdropClick}>
      <div className="create-game-modal">
        <div className="create-game-modal-header">
          <h2>{texts.createGame.title}</h2>
          <button
            className="create-game-modal-close"
            onClick={onClose}
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        <div className="create-game-modal-content">
          <div className="create-game-form-row">
            <div className="create-game-form-field">
              <label htmlFor="location">
                {texts.createGame.form.location.label}
              </label>
              <input
                id="location"
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder={texts.createGame.form.location.placeholder}
              />
            </div>

            <div className="create-game-form-field">
              <label htmlFor="price">{texts.createGame.form.price.label}</label>
              <input
                id="price"
                type="text"
                value={formData.price}
                onChange={(e) => handlePriceChange(e.target.value)}
                placeholder={texts.createGame.form.price.placeholder}
              />
            </div>
          </div>

          <div className="create-game-form-row">
            <div className="create-game-form-field">
              <label htmlFor="date">{texts.createGame.form.date.label}</label>
              <input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
              />
            </div>

            <div className="create-game-form-field">
              <label htmlFor="time">{texts.createGame.form.time.label}</label>
              <input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => handleInputChange('time', e.target.value)}
              />
            </div>
          </div>

          <div className="create-game-form-row">
            <div className="create-game-form-field">
              <label htmlFor="modality">
                {texts.createGame.form.modality.label}
              </label>
              <select
                id="modality"
                value={formData.modality}
                onChange={(e) => handleInputChange('modality', e.target.value)}
              >
                <option value="">
                  {texts.createGame.form.modality.placeholder}
                </option>
                <option value="society">
                  {texts.createGame.form.modality.options.society}
                </option>
                <option value="futsal">
                  {texts.createGame.form.modality.options.futsal}
                </option>
                <option value="campo">
                  {texts.createGame.form.modality.options.campo}
                </option>
              </select>
            </div>

            <div className="create-game-form-field">
              <label htmlFor="players">
                {texts.createGame.form.players.label}
              </label>
              <input
                id="players"
                type="text"
                value={formData.players}
                onChange={(e) => handleInputChange('players', e.target.value)}
                placeholder={texts.createGame.form.players.placeholder}
              />
            </div>
          </div>
        </div>

        <div className="create-game-modal-footer">
          <button className="create-game-submit-btn" onClick={handleSubmit}>
            {texts.createGame.form.submitButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateGameModal;
