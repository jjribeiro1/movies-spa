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

export function Login() {
  return (
    <LoginSection>
      <Dialog.Root>
        <LoginForm>
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
            <DialogTrigger>Registre-se</DialogTrigger>
          </Register>
        </LoginForm>

        <DialogOverlay>
          <DialogContent>
            <RegisterUserForm />
          </DialogContent>
        </DialogOverlay>
      </Dialog.Root>
    </LoginSection>
  );
}
