import { FormControls, FormHeader, FormTitle, RegisterForm, SubmitButton } from './style';
import * as Dialog from '@radix-ui/react-dialog';

export function RegisterUserForm() {
  return (
    <RegisterForm>
      <FormHeader>
        <FormTitle>Cadastre-se</FormTitle>
        <Dialog.Close>X</Dialog.Close>
      </FormHeader>

      <FormControls>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" required />
      </FormControls>

      <FormControls>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </FormControls>

      <FormControls>
        <label htmlFor="password">Senha</label>
        <input type="text" name="password" id="password" required />
      </FormControls>

      <FormControls>
        <label htmlFor="name">CPF</label>
        <input type="number" name="cpf" id="cpf" required />
      </FormControls>

      <SubmitButton>Cadastrar</SubmitButton>
    </RegisterForm>
  );
};
