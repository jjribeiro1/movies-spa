import { FormControls, FormHeader, FormTitle, RegisterForm, SubmitButton } from './style';
import { FormEvent, useState } from 'react';
import { ValidateEmail } from '../../validations/email-validator';
import { ValidatePassword } from '../../validations/password-validator';
import { ValidateCpf } from '../../validations/cpf-validator';
import { ToastMessage } from '../radix-toast';
import { UserService } from '../../services/user-service';
import { RegisterUserInput } from '../../types/user-service-types';

type RegisterUserFormProps = {
  setOpenRegister: React.Dispatch<React.SetStateAction<boolean>>;
};

export function RegisterUserForm({ setOpenRegister }: RegisterUserFormProps) {
  const [errors, setErrors] = useState<string[]>([]);
  const [openToast, setOpenToast] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const error = [];

    const data: RegisterUserInput = {
      name: e.currentTarget.Name.value,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
      cpf: e.currentTarget.cpf.value,
    };

    data.name.length >= 3 ? null : error.push('Nome deve ter pelo menos 3 caracteres');
    ValidateEmail(data.email) ? null : error.push('Email inválido');
    ValidatePassword(data.password)
      ? null
      : error.push(
          'Senha deve conter no mínimo 8 caracteres, um caracter especial(!, @, #, $, %) e um número '
        );

    ValidateCpf(data.cpf) ? null : error.push('Cpf inválido');

    if (error.length > 0) {
      setErrors(error);
      setOpenToast(true);
      return;
    }

    registerUser(data);
  }

  async function registerUser(data: RegisterUserInput) {
    try {
      await UserService().register(data);
      setOpenRegister(false);
    } catch (error: any) {
      if (error.response.data.message === 'Email must be unique') {
        setErrors(['Alguém já possui este email. Tente novamente']);
        setOpenToast(true);
        return;
      }
      if (error.response.data.message === 'Cpf must be unique') {
        setErrors(['Alguém já possui este Cpf. Tente novamente']);
        setOpenToast(true);
        return;
      }
      setErrors([error.response.data.message]);
      setOpenToast(true);
    }
  }

  return (
    <>
      <RegisterForm onSubmit={handleSubmit}>
        <FormHeader>
          <FormTitle>Cadastre-se</FormTitle>
          <button type="submit" onClick={() => setOpenRegister(false)}>
            X
          </button>
        </FormHeader>

        <FormControls>
          <label htmlFor="name">Nome</label>
          <input type="text" name="Name" id="name" required />
        </FormControls>

        <FormControls>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </FormControls>

        <FormControls>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" required />
        </FormControls>

        <FormControls>
          <label htmlFor="cpf">CPF</label>
          <input type="number" name="cpf" id="cpf" required />
        </FormControls>

        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </RegisterForm>
      <ToastMessage
        openToast={openToast}
        setOpenToast={setOpenToast}
        title="Erro ao se cadastrar"
        messages={errors}
      />
    </>
  );
}
