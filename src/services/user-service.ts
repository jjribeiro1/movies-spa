import { api } from '../api';
import {
  GetUserByIdOutput,
  RegisterUserInput,
  RegisterUserOutput,
} from '../types/user-service-types';

export function UserService() {
  async function register({ name, email, password, cpf }: RegisterUserInput) {
    const request = await api.post<RegisterUserOutput>('/user', {
      name,
      email,
      password,
      cpf,
      role: 'USER',
    });

    return request;
  }

  async function getById(id: string) {
    const request = await api.get<GetUserByIdOutput>(`/user/${id}`);
    return request.data;
  }

  return {
    register,
    getById,
  };
}
