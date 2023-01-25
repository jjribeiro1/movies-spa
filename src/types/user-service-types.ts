import { Profile } from './profile-service-types';

export type RegisterUserInput = {
  name: string;
  email: string;
  password: string;
  cpf: string;
};

export type RegisterUserOutput = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  role: string;
};

export type GetUserByIdOutput = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  role: string;
  profiles: Profile[];
};
