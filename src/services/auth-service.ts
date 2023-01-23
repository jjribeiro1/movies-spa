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

const createAuthService = () => ({
  async login({ email, password }: LoginInput) {
    const request = await api.post<LoginDataResponse>('/auth', { email, password });
    LocalStorageHelper.setItem('access_Token', request.data.token);
    return request.data;
  },
});

export const AuthService = createAuthService();
