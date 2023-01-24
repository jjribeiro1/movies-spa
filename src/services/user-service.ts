import { api } from '../api';

type RegisterUserInput = {
  name: string;
  email: string;
  password: string;
  cpf: string;
};

type RegisterUserOutput = RegisterUserInput & { id: string };

const makeUserService = () => ({
  async register({ name, email, password, cpf }: RegisterUserInput) {
    const request = await api.post<RegisterUserOutput>('/user', {
      name,
      email,
      password,
      cpf,
      role: 'USER',
    });

    return request;
  },
});

export const UserService = makeUserService();
