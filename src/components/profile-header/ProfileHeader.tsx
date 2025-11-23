import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { UserProfile } from '../../api/profile.mock';
import './ProfileHeader.css';

interface ProfileHeaderProps {
  profile: UserProfile;
}

export const ProfileHeader = ({ profile }: ProfileHeaderProps) => {
  return (
    <div className="profile-header">
      <div className="profile-avatar">
        {profile.avatar ? (
          <img src={profile.avatar} alt={profile.name} />
        ) : (
          <div className="avatar-placeholder">
            <FontAwesomeIcon icon={faUser} />
          </div>
        )}
      </div>
      <h2 className="profile-name">{profile.name}</h2>
      <p className="profile-position">{profile.position}</p>
      <div className="profile-overall">
        <span className="overall-value">{profile.overall}</span>
        <span className="overall-label">Overall</span>
      </div>
    </div>
  );
};
