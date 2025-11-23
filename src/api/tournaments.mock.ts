export interface Team {
  id: string;
  name: string;
  logo?: string;
}

export interface Classification {
  position: number;
  teamId: string;
  teamName: string;
  points: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  time: string;
  status: 'scheduled' | 'live' | 'finished';
  homeScore?: number;
  awayScore?: number;
}

export interface Tournament {
  id: string;
  name: string;
  year: number;
  teams: number;
  status: 'active' | 'finished' | 'upcoming';
  classification: Classification[];
  upcomingMatches: Match[];
}

export const mockedTournaments: Tournament[] = [
  {
    id: '1',
    name: 'InterFCT',
    year: 2025,
    teams: 5,
    status: 'active',
    classification: [
      {
        position: 1,
        teamId: '1',
        teamName: 'Computação',
        points: 10,
        wins: 3,
        draws: 1,
        losses: 0,
        goalsFor: 12,
        goalsAgainst: 4,
        goalDifference: 8,
      },
      {
        position: 2,
        teamId: '2',
        teamName: 'Educação Física',
        points: 9,
        wins: 3,
        draws: 0,
        losses: 1,
        goalsFor: 10,
        goalsAgainst: 5,
        goalDifference: 5,
      },
      {
        position: 3,
        teamId: '3',
        teamName: 'Estatística',
        points: 6,
        wins: 2,
        draws: 0,
        losses: 2,
        goalsFor: 8,
        goalsAgainst: 7,
        goalDifference: 1,
      },
      {
        position: 4,
        teamId: '4',
        teamName: 'Fisioterapia',
        points: 3,
        wins: 1,
        draws: 0,
        losses: 3,
        goalsFor: 5,
        goalsAgainst: 10,
        goalDifference: -5,
      },
      {
        position: 5,
        teamId: '5',
        teamName: 'Matemática',
        points: 1,
        wins: 0,
        draws: 1,
        losses: 3,
        goalsFor: 3,
        goalsAgainst: 12,
        goalDifference: -9,
      },
    ],
    upcomingMatches: [
      {
        id: '1',
        homeTeam: { id: '1', name: 'Computação' },
        awayTeam: { id: '2', name: 'Educação Física' },
        date: '2025-11-25',
        time: '15:00',
        status: 'scheduled',
      },
      {
        id: '2',
        homeTeam: { id: '3', name: 'Estatística' },
        awayTeam: { id: '4', name: 'Fisioterapia' },
        date: '2025-11-26',
        time: '16:00',
        status: 'scheduled',
      },
    ],
  },
  {
    id: '2',
    name: 'InterComp',
    year: 2025,
    teams: 5,
    status: 'finished',
    classification: [
      {
        position: 1,
        teamId: '1',
        teamName: 'Tottentando',
        points: 12,
        wins: 4,
        draws: 0,
        losses: 0,
        goalsFor: 15,
        goalsAgainst: 3,
        goalDifference: 12,
      },
      {
        position: 2,
        teamId: '2',
        teamName: 'PySandu',
        points: 9,
        wins: 3,
        draws: 0,
        losses: 1,
        goalsFor: 11,
        goalsAgainst: 6,
        goalDifference: 5,
      },
      {
        position: 3,
        teamId: '3',
        teamName: 'BahIA',
        points: 6,
        wins: 2,
        draws: 0,
        losses: 2,
        goalsFor: 9,
        goalsAgainst: 8,
        goalDifference: 1,
      },
      {
        position: 4,
        teamId: '4',
        teamName: 'West Ram',
        points: 3,
        wins: 1,
        draws: 0,
        losses: 3,
        goalsFor: 6,
        goalsAgainst: 12,
        goalDifference: -6,
      },
      {
        position: 5,
        teamId: '5',
        teamName: 'Vascode',
        points: 0,
        wins: 0,
        draws: 0,
        losses: 4,
        goalsFor: 2,
        goalsAgainst: 14,
        goalDifference: -12,
      },
    ],
    upcomingMatches: [
      {
        id: '3',
        homeTeam: { id: '2', name: 'Educação Física' },
        awayTeam: { id: '5', name: 'Matemática' },
        date: '2025-11-27',
        time: '14:00',
        status: 'scheduled',
      },
    ],
  },
  {
    id: '4',
    name: 'InterComp',
    year: 2024,
    teams: 5,
    status: 'finished',
    classification: [
      {
        position: 1,
        teamId: '1',
        teamName: 'Tottentando',
        points: 12,
        wins: 4,
        draws: 0,
        losses: 0,
        goalsFor: 15,
        goalsAgainst: 3,
        goalDifference: 12,
      },
      {
        position: 2,
        teamId: '2',
        teamName: 'PySandu',
        points: 9,
        wins: 3,
        draws: 0,
        losses: 1,
        goalsFor: 11,
        goalsAgainst: 6,
        goalDifference: 5,
      },
      {
        position: 3,
        teamId: '3',
        teamName: 'BahIA',
        points: 6,
        wins: 2,
        draws: 0,
        losses: 2,
        goalsFor: 9,
        goalsAgainst: 8,
        goalDifference: 1,
      },
      {
        position: 4,
        teamId: '4',
        teamName: 'West Ram',
        points: 3,
        wins: 1,
        draws: 0,
        losses: 3,
        goalsFor: 6,
        goalsAgainst: 12,
        goalDifference: -6,
      },
      {
        position: 5,
        teamId: '5',
        teamName: 'Vascode',
        points: 0,
        wins: 0,
        draws: 0,
        losses: 4,
        goalsFor: 2,
        goalsAgainst: 14,
        goalDifference: -12,
      },
    ],
    upcomingMatches: [
      {
        id: '3',
        homeTeam: { id: '2', name: 'Educação Física' },
        awayTeam: { id: '5', name: 'Matemática' },
        date: '2025-11-27',
        time: '14:00',
        status: 'scheduled',
      },
    ],
  },
  {
    id: '5',
    name: 'InterComp',
    year: 2023,
    teams: 5,
    status: 'finished',
    classification: [
      {
        position: 1,
        teamId: '1',
        teamName: 'Tottentando',
        points: 12,
        wins: 4,
        draws: 0,
        losses: 0,
        goalsFor: 15,
        goalsAgainst: 3,
        goalDifference: 12,
      },
      {
        position: 2,
        teamId: '2',
        teamName: 'PySandu',
        points: 9,
        wins: 3,
        draws: 0,
        losses: 1,
        goalsFor: 11,
        goalsAgainst: 6,
        goalDifference: 5,
      },
      {
        position: 3,
        teamId: '3',
        teamName: 'BahIA',
        points: 6,
        wins: 2,
        draws: 0,
        losses: 2,
        goalsFor: 9,
        goalsAgainst: 8,
        goalDifference: 1,
      },
      {
        position: 4,
        teamId: '4',
        teamName: 'West Ram',
        points: 3,
        wins: 1,
        draws: 0,
        losses: 3,
        goalsFor: 6,
        goalsAgainst: 12,
        goalDifference: -6,
      },
      {
        position: 5,
        teamId: '5',
        teamName: 'Vascode',
        points: 0,
        wins: 0,
        draws: 0,
        losses: 4,
        goalsFor: 2,
        goalsAgainst: 14,
        goalDifference: -12,
      },
    ],
    upcomingMatches: [
      {
        id: '3',
        homeTeam: { id: '2', name: 'Educação Física' },
        awayTeam: { id: '5', name: 'Matemática' },
        date: '2025-11-27',
        time: '14:00',
        status: 'scheduled',
      },
    ],
  },
];

export const getTournaments = async (): Promise<Tournament[]> => {
  return Promise.resolve(mockedTournaments);
};

export const getTournamentById = async (
  id: string
): Promise<Tournament | undefined> => {
  const tournament = mockedTournaments.find((t) => t.id === id);
  return Promise.resolve(tournament);
};
