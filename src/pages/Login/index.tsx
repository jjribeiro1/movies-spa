import {
  SubmitButton,
  FormTitle,
  FormControls,
  LoginForm,
  LoginSection,
  Register,
  DialogTrigger,
  DialogOverlay,
  DialogContent,
} from './style';
import * as Dialog from '@radix-ui/react-dialog';
import { RegisterUserForm } from '../../components/register-user';
import { ChangeEvent, FormEvent, useState } from 'react';
import { AuthService } from '../../services/auth-service';
import { ToastMessage } from '../../components/toast';
import { ValidateEmail } from '../../validations/email-validator';
import { ValidatePassword } from '../../validations/password-validator';
import { useNavigate } from 'react-router-dom';
import { LocalStorageHelper } from '../../helper/local-storage';

export function Login() {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [openToast, setOpenToast] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const error = [];

    const { email, password } = inputValues;
    const emailIsValid = ValidateEmail(email);
    const passwordIsValid = ValidatePassword(password);

    if (!emailIsValid) {
      error.push('Email inválido');
    }
    if (!passwordIsValid) {
      error.push(
        'Senha deve conter no mínimo 8 caracteres, um caracter especial(!, @, #, $, %) e um número '
      );
    }

    if (error.length > 0) {
      setErrors(error);
      setOpenToast(true);
      return;
    }

    authentication();
  }

  async function authentication() {
    try {
      await AuthService.login(inputValues);
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
      <Dialog.Root open={openRegister} onOpenChange={setOpenRegister}>
        <LoginForm onSubmit={handleSubmit}>
          <FormTitle>Login</FormTitle>
          <FormControls>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleChange} />
          </FormControls>

          <FormControls>
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" onChange={handleChange} />
          </FormControls>

          <SubmitButton type="submit">Entrar</SubmitButton>
          <Register>
            <span>Não tem uma conta?</span>
            <DialogTrigger>Registre-se</DialogTrigger>
          </Register>
        </LoginForm>
        <Dialog.Portal>
          <DialogOverlay>
            <DialogContent>
              <RegisterUserForm setOpenRegister={setOpenRegister} />
            </DialogContent>
          </DialogOverlay>
        </Dialog.Portal>
      </Dialog.Root>
      <ToastMessage
        openToast={openToast}
        setOpenToast={setOpenToast}
        title="Erro ao fazer login"
        messages={errors}
      />
    </LoginSection>
  );
}
