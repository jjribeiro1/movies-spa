import { Button, FormTitle, FormControls, LoginForm, LoginSection, Register } from './style';

export const Login = () => {
  return (
    <LoginSection>
      <LoginForm>
        <FormTitle>Login</FormTitle>
        <FormControls>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </FormControls>

        <FormControls>
          {' '}
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" />
        </FormControls>

        <Button type="submit">Entrar</Button>
        <Register>
          Não tem uma conta?
          <button>Registre-se</button>
        </Register>
      </LoginForm>
    </LoginSection>
  );
};
