export interface PlayerAttributes {
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
}

export interface Player {
  id: number;
  name: string;
  avatar: string;
  goals?: number;
  assists?: number;
  attributes?: PlayerAttributes;
  rating?: number;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
  score?: number;
  players: Player[];
}

export interface GameStats {
  team1Possession: number;
  team2Possession: number;
  team1Shots: number;
  team2Shots: number;
  team1ShotsOnTarget: number;
  team2ShotsOnTarget: number;
  team1Fouls: number;
  team2Fouls: number;
}

export interface PaymentPlayer {
  name: string;
  value: number;
  paid: boolean;
}

export interface GamePayment {
  totalValue: number;
  pricePerPlayer: number;
  players: PaymentPlayer[];
}

export interface Game {
  id: number;
  date: string;
  time: string;
  location: string;
  field: string;
  confirmed: number;
  total: number;
  status: 'pending' | 'confirmed' | 'completed';
  team1?: Team;
  team2?: Team;
  stats?: GameStats;
  payment?: GamePayment;
}

export const getGames = async (): Promise<Game[]> => {
  // Simular delay de API
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: 1,
      date: '16 de janeiro de 2025',
      time: '17:30',
      location: 'FutArte Planeta Gol',
      field: 'Levar carne e cerveja para o churrasco no pós',
      confirmed: 10,
      total: 14,
      status: 'pending',
    },
    {
      id: 2,
      date: '1 de novembro de 2025',
      time: '15:00',
      location: 'Bandido',
      field: '',
      confirmed: 10,
      total: 10,
      status: 'confirmed',
    },
    {
      id: 3,
      date: '08 de novembro de 2025',
      time: '16:00',
      location: 'Arena Sesc',
      field: 'Chuteira obrigatória - $ 70,00 por pessoa',
      confirmed: 8,
      total: 14,
      status: 'completed',
      team1: {
        id: 1,
        name: 'Rep Discente 00',
        logo: '0️⃣0️⃣',
        score: 1,
        players: [
          {
            id: 1,
            name: 'Betoni',
            avatar: '👤',
            goals: 1,
            attributes: {
              pace: 75,
              shooting: 82,
              passing: 70,
              dribbling: 78,
              defending: 50,
              physical: 80,
            },
          },
          {
            id: 2,
            name: 'Kauan',
            avatar: '👤',
            attributes: {
              pace: 88,
              shooting: 65,
              passing: 75,
              dribbling: 85,
              defending: 45,
              physical: 72,
            },
          },
          {
            id: 3,
            name: 'Lucas Perrr',
            avatar: '👤',
            attributes: {
              pace: 70,
              shooting: 78,
              passing: 80,
              dribbling: 75,
              defending: 60,
              physical: 85,
            },
          },
        ],
      },
      team2: {
        id: 2,
        name: 'GDP F.C.',
        logo: '👨‍💻',
        score: 2,
        players: [
          {
            id: 4,
            name: 'IgMiras',
            avatar: '👤',
            goals: 1,
            attributes: {
              pace: 80,
              shooting: 88,
              passing: 82,
              dribbling: 86,
              defending: 48,
              physical: 76,
            },
          },
          {
            id: 5,
            name: 'Gmenezes',
            avatar: '👤',
            attributes: {
              pace: 72,
              shooting: 70,
              passing: 85,
              dribbling: 80,
              defending: 70,
              physical: 78,
            },
          },
          {
            id: 6,
            name: 'Ateves',
            avatar: '👤',
            goals: 1,
            attributes: {
              pace: 85,
              shooting: 80,
              passing: 78,
              dribbling: 88,
              defending: 42,
              physical: 74,
            },
          },
        ],
      },
      stats: {
        team1Possession: 45,
        team2Possession: 55,
        team1Shots: 8,
        team2Shots: 12,
        team1ShotsOnTarget: 4,
        team2ShotsOnTarget: 7,
        team1Fouls: 6,
        team2Fouls: 8,
      },
      payment: {
        totalValue: 560,
        pricePerPlayer: 10,
        players: [
          { name: 'Bahiano', value: 10, paid: true },
          { name: 'Lapenta', value: 10, paid: true },
          { name: 'Kaká', value: 10, paid: false },
          { name: 'Gugu Messias', value: 10, paid: true },
          { name: 'Goleiro Henrique Bruno', value: 10, paid: true },
          { name: 'Brunão', value: 10, paid: true },
          { name: 'Ramon', value: 10, paid: false },
          { name: 'Alec Ganso', value: 10, paid: true },
        ],
      },
    },
  ];
};

export const getGameById = async (id: number): Promise<Game | null> => {
  const games = await getGames();
  return games.find((game) => game.id === id) || null;
};
