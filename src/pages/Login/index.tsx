import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitButton, FormTitle, FormControls, LoginForm, LoginSection, Register } from './style';
import { RegisterUserForm } from '../../components/register-user';
import { ToastMessage } from '../../components/radix-toast';
import { RadixDialog } from '../../components/radix-dialog';
import { AuthService, LoginInput } from '../../services/auth-service';
import { ValidateEmail } from '../../validations/email-validator';
import { ValidatePassword } from '../../validations/password-validator';
import { LocalStorageHelper } from '../../helper/local-storage';

export function Login() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<string[]>([]);
  const [openToast, setOpenToast] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const error = [];

    const data: LoginInput = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    ValidateEmail(data.email) ? null : error.push('Email inválido');
    ValidatePassword(data.password)
      ? null
      : error.push(
          'Senha deve conter no mínimo 8 caracteres, um caracter especial(!, @, #, $, %) e um número '
        );

    if (error.length > 0) {
      setErrors(error);
      setOpenToast(true);
      return;
    }

    authentication(data);
  }

  async function authentication(data: LoginInput) {
    try {
      await AuthService().login(data);
      const token = LocalStorageHelper.getItem('access_token');
      if (token) {
        navigate('/profile');
      }
    } catch (error: any) {
      if (error.response.status === 401) {
        setErrors(['Email ou senha incorretos']);
        setOpenToast(true);
        return;
      }
      setErrors(['Um erro inesperado ocorreu ao fazer login']);
      setOpenToast(true);
    }
  }
  return (
    <LoginSection>
      <LoginForm onSubmit={handleSubmit}>
        <FormTitle>Login</FormTitle>
        <FormControls>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </FormControls>

        <FormControls>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" />
        </FormControls>

        <SubmitButton type="submit">Entrar</SubmitButton>
        <Register>
          <span>Não tem uma conta?</span>
          <button type="button" onClick={() => setOpenRegister(true)}>
            Registre-se
          </button>
        </Register>
      </LoginForm>

      <RadixDialog open={openRegister} onOpenChange={setOpenRegister}>
        <RegisterUserForm setOpenRegister={setOpenRegister} />
      </RadixDialog>

      <ToastMessage
        openToast={openToast}
        setOpenToast={setOpenToast}
        title="Erro ao fazer login"
        messages={errors}
      />
    </LoginSection>
  );
}
