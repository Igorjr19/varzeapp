export const texts = {
  app: {
    name: 'VarzeApp',
    tagline: 'Gerencie seus campos de futebol facilmente',
    footer: 'VarzeApp - Gerenciando campos de futebol em movimento',
  },

  common: {
    back: 'Voltar',
    login: 'Entrar',
    email: 'Email',
    password: 'Senha',
  },

  home: {
    subtitle: 'Gerencie suas partidas e campeonatos facilmente',
    loginButton: 'Entrar',
    welcomeText: 'Bem-vindo! Toque em entrar para começar',
    features: {
      bookFields: 'Reservar campos',
      manageTeams: 'Gerenciar times',
      trackMatches: 'Acompanhar partidas',
    },
  },

  login: {
    title: 'Bem-vindo de volta!',
    subtitle: 'Faça login para continuar no VarzeApp',
    backButton: 'Voltar',
    form: {
      email: {
        label: 'Usuário',
        placeholder: 'Digite seu usuário',
      },
      password: {
        label: 'Senha',
        placeholder: 'Digite sua senha',
      },
      submitButton: 'ENTRAR',
    },
    footer: {
      forgotPassword: 'Esqueceu a senha?',
      signupText: 'Ainda não possui conta?',
      signupLink: 'Registrar',
    },
  },

  mobileGuard: {
    title: 'App Exclusivo para Mobile',
    description:
      'Este aplicativo foi projetado exclusivamente para dispositivos móveis.',
    instruction:
      'Por favor, acesse este app do seu smartphone para baixar e usar.',
    footer: 'VarzeApp - Gerenciando campos de futebol em movimento',
  },

  bottomNav: {
    games: 'Jogos',
    tournaments: 'Torneios',
    profile: 'Perfil',
  },

  tournaments: {
    classification: {
      title: 'Classificação',
      position: 'PTS',
      points: 'V',
      wins: 'E',
      draws: 'D',
      losses: 'D',
    },
    upcomingMatches: {
      title: 'Próxima Partida',
      noMatches: 'Nenhuma partida agendada',
    },
    tabs: {
      classification: 'Classificação',
      matches: 'Próxima Partida',
      statistics: 'Estatísticas',
    },
  },

  register: {
    form: {
      email: {
        label: 'Email',
        placeholder: 'Digite seu email',
      },
      username: {
        label: 'Nome de Usuário',
        placeholder: 'Digite seu nome de usuário',
      },
      password: {
        label: 'Senha',
        placeholder: 'Digite sua senha',
      },
      confirmPassword: {
        label: 'Confirmar Senha',
        placeholder: 'Confirme sua senha',
      },
      submitButton: 'REGISTRAR',
    },
    footer: {
      loginText: 'Já possui conta?',
      loginLink: 'Logar',
    },
  },

  profile: {
    radarTitle: 'Estatísticas',
    attributesTitle: 'Atributos',
    attributes: {
      pace: 'Ritmo',
      shooting: 'Finalização',
      passing: 'Passe',
      dribbling: 'Drible',
      defending: 'Defesa',
      physical: 'Físico',
    },
  },
} as const;

export type Texts = typeof texts;
export type TextKey = keyof Texts;

export const getText = <T extends string>(path: T): string => {
  const keys = path.split('.') as string[];
  let result: unknown = texts;

  for (const key of keys) {
    if (typeof result === 'object' && result !== null) {
      result = (result as Record<string, unknown>)[key];
    }
  }

  return typeof result === 'string' ? result : path;
};

export default texts;
