import { mockedUsers } from './login.mock';

export const register = async (
  email: string,
  username: string,
  password: string
) => {
  // Verificar se o usuário já existe
  const userExists = mockedUsers.find((user) => user.email === email);

  if (userExists) {
    return Promise.reject(new Error('Email já cadastrado'));
  }

  // Simular delay de registro
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Adicionar novo usuário
  mockedUsers.push({
    email,
    name: username,
    password,
  });

  return Promise.resolve({ email, name: username });
};
