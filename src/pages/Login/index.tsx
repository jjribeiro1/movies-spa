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

export const Login = () => {
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

        <Dialog.Portal>
          <DialogOverlay>
            <DialogContent>
              <h2>MODAL</h2>
            </DialogContent>
          </DialogOverlay>
        </Dialog.Portal>
      </Dialog.Root>
    </LoginSection>
  );
};
