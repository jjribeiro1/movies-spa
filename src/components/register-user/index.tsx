import { FormControls, FormHeader, FormTitle, RegisterForm, SubmitButton } from './style';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ValidateEmail } from '../../validations/email-validator';
import { ValidatePassword } from '../../validations/password-validator';
import { ValidateCpf } from '../../validations/cpf-validator';
import { ToastMessage } from '../toast';
import { UserService } from '../../services/user-service';

type RegisterUserFormProps = {
  setOpenRegister: React.Dispatch<React.SetStateAction<boolean>>;
};

export function RegisterUserForm({ setOpenRegister }: RegisterUserFormProps) {
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
    cpf: '',
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [openToast, setOpenToast] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const error = [];
    const { name, email, password, cpf } = inputValues;

    const nameIsValid = name.length > 3 ? true : false;
    const emailIsValid = ValidateEmail(email);
    const passwordIsValid = ValidatePassword(password);
    const cpfIsValid = ValidateCpf(cpf);

    if (!nameIsValid) {
      error.push('Nome deve ter pelo menos 3 caracterers');
    }

    if (!emailIsValid) {
      error.push('Email inválido');
    }

    if (!passwordIsValid) {
      error.push(
        'Senha deve conter no mínimo 8 caracteres, um caracter especial(!, @, #, $, %) e um número '
      );
    }

    if (!cpfIsValid) {
      error.push('Cpf inválido');
    }

    if (error.length > 0) {
      setErrors(error);
      setOpenToast(true);
      return;
    }

    registerUser();
  }

  async function registerUser() {
    try {
      await UserService().register(inputValues);
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
          <input type="text" name="name" id="name" required onChange={handleChange} />
        </FormControls>

        <FormControls>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required onChange={handleChange} />
        </FormControls>

        <FormControls>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" required onChange={handleChange} />
        </FormControls>

        <FormControls>
          <label htmlFor="cpf">CPF</label>
          <input type="number" name="cpf" id="cpf" required onChange={handleChange} />
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
