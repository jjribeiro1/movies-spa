import { api } from '../api';
import { LocalStorageHelper } from '../helper/local-storage';

type LoginInput = {
  email: string;
  password: string;
};

type LoginDataResponse = {
  user: {
    id: string;
    name: string;
    email: string;
    cpf: string;
    role: string;
  };
  token: string;
};

export function AuthService() {
  async function login({ email, password }: LoginInput) {
    const request = await api.post<LoginDataResponse>('/auth', { email, password });
    LocalStorageHelper.setItem('access_token', request.data.token);
    LocalStorageHelper.setItem('logged_user', request.data.user);
    return request.data;
  }

  function logOut() {
    LocalStorageHelper.clear();
  }

  return {
    login,
    logOut,
  };
}
