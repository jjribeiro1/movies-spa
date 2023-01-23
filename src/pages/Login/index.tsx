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

export function Login() {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState([]);
  const [open, setOpen] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    authentication();
  }

  async function authentication() {
    try {
      await AuthService.login(inputValues);
    } catch (error: any) {
      console.log(error.response.data);
      setOpen(true);
      setErrors(error.response.data.message);
    }
  }

  return (
    <LoginSection>
      <Dialog.Root>
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
              <RegisterUserForm />
            </DialogContent>
          </DialogOverlay>
        </Dialog.Portal>
      </Dialog.Root>
      <ToastMessage open={open} setOpen={setOpen} title="Erro ao fazer login" messages={errors} />
    </LoginSection>
  );
}
