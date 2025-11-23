export interface PlayerAttribute {
  name: string;
  value: number;
  maxValue: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  position: string;
  overall: number;
  attributes: {
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
    defending: number;
    physical: number;
  };
}

const mockedProfile: UserProfile = {
  id: '1',
  name: 'Ígor José',
  email: 'igor@email.com',
  position: 'Atacante',
  overall: 85,
  attributes: {
    pace: 88,
    shooting: 82,
    passing: 75,
    dribbling: 86,
    defending: 45,
    physical: 78,
  },
};

export const getProfile = async (): Promise<UserProfile> => {
  return Promise.resolve(mockedProfile);
};

export const updateProfile = async (
  profile: Partial<UserProfile>
): Promise<UserProfile> => {
  Object.assign(mockedProfile, profile);
  return Promise.resolve(mockedProfile);
};
