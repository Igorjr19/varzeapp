import React, { useState } from 'react';
import './CreateTournamentModal.css';

interface CreateTournamentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateTournament: (data: TournamentFormData) => void;
}

export interface TournamentFormData {
  name: string;
  type: string;
  teams: string;
  startDate: string;
  endDate: string;
  rules: string;
}

export const CreateTournamentModal: React.FC<CreateTournamentModalProps> = ({
  isOpen,
  onClose,
  onCreateTournament,
}) => {
  const [formData, setFormData] = useState<TournamentFormData>({
    name: '',
    type: '',
    teams: '',
    startDate: '',
    endDate: '',
    rules: '',
  });

  if (!isOpen) return null;

  const handleInputChange = (
    field: keyof TournamentFormData,
    value: string
  ): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (): void => {
    onCreateTournament(formData);
    setFormData({
      name: '',
      type: '',
      teams: '',
      startDate: '',
      endDate: '',
      rules: '',
    });
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="create-tournament-modal-backdrop"
      onClick={handleBackdropClick}
    >
      <div className="create-tournament-modal">
        <div className="create-tournament-modal-header">
          <h2>Dados do campeonatos</h2>
          <button
            className="create-tournament-modal-close"
            onClick={onClose}
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        <div className="create-tournament-modal-content">
          <div className="create-tournament-form-row">
            <div className="create-tournament-form-field">
              <label htmlFor="name">Nomes</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Nomes"
              />
            </div>

            <div className="create-tournament-form-field">
              <label htmlFor="type">Tipo do Campeonato</label>
              <input
                id="type"
                type="text"
                value={formData.type}
                onChange={(e) => handleInputChange('type', e.target.value)}
                placeholder="Tipo do Campeonato"
              />
            </div>
          </div>

          <div className="create-tournament-form-row">
            <div className="create-tournament-form-field">
              <label htmlFor="teams">Times</label>
              <input
                id="teams"
                type="text"
                value={formData.teams}
                onChange={(e) => handleInputChange('teams', e.target.value)}
                placeholder="Times"
              />
            </div>
          </div>

          <div className="create-tournament-form-row">
            <div className="create-tournament-form-field">
              <label htmlFor="startDate">Data inicial</label>
              <input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => handleInputChange('startDate', e.target.value)}
              />
            </div>
            <div className="create-tournament-form-field">
              <label htmlFor="endDate">Data final</label>
              <input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => handleInputChange('endDate', e.target.value)}
              />
            </div>
          </div>

          <div className="create-tournament-form-row">
            <div className="create-tournament-form-field">
              <label htmlFor="rules">Regulamento</label>
              <div className="file-input-wrapper">
                <input
                  id="rules"
                  type="file"
                  style={{ display: 'none' }}
                  disabled
                />
                <button
                  type="button"
                  className="file-input-button"
                  tabIndex={-1}
                  disabled
                >
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M16.5 13.5V17.25C16.5 19.3211 14.8211 21 12.75 21C10.6789 21 9 19.3211 9 17.25V6.75C9 5.50736 10.0074 4.5 11.25 4.5C12.4926 4.5 13.5 5.50736 13.5 6.75V16.5"
                      stroke="#6b7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="file-input-label">Anexar arquivo</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="create-tournament-modal-footer">
          <button
            className="create-tournament-submit-btn"
            onClick={handleSubmit}
          >
            Criar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTournamentModal;
