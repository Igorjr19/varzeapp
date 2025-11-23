import { useEffect, useState } from 'react';
import { getProfile, type UserProfile } from '../../api/profile.mock';
import { AttributesList } from '../../components/attributes-list/AttributesList';
import { BottomNav } from '../../components/bottom-nav/BottomNav';
import { PlayerRadarChart } from '../../components/player-radar-chart/PlayerRadarChart';
import { ProfileHeader } from '../../components/profile-header/ProfileHeader';
import texts from '../../i18n/texts';
import './Profile.css';

export const Profile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [selectedAttribute, setSelectedAttribute] = useState<string | null>(
    null
  );

  useEffect(() => {
    const loadProfile = async () => {
      const data = await getProfile();
      setProfile(data);
    };
    loadProfile();
  }, []);

  if (!profile) {
    return (
      <div className="profile-container">
        <div className="profile-content">
          <p>Carregando...</p>
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-content">
        <ProfileHeader profile={profile} />
        <div className="attributes-card">
          <h3 className="attributes-card-title">
            {texts.profile.attributesTitle}
          </h3>
          <PlayerRadarChart
            attributes={profile.attributes}
            selectedAttribute={selectedAttribute}
            onAttributeClick={setSelectedAttribute}
          />
          <AttributesList
            attributes={profile.attributes}
            selectedAttribute={selectedAttribute}
            onAttributeClick={setSelectedAttribute}
          />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};
