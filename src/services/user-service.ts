import { api } from '../api';
import {
  GetUserByIdOutput,
  RegisterUserInput,
  RegisterUserOutput,
} from '../types/user-service-types';

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

  async getById(id: string) {
    const request = await api.get<GetUserByIdOutput>(`/user/${id}`);
    return request.data;
  },
});

export const UserService = makeUserService();
