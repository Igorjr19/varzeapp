export const mockedUsers = [
  {
    email: 'igor@email.com',
    password: 'Senha@123',
    name: 'Ígor José',
  },
];

export const login = async (email: string, password: string) => {
  const user = mockedUsers.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    return Promise.resolve({ email: user.email, name: user.name });
  } else {
    return Promise.reject(new Error('Usuário ou senha incorretos'));
  }
};
